import { Injectable, computed, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { PersistenceService } from './persistence.service';
import { CaseFileEntry } from './case-file-entry.model';
import { CASE_FILE_TEMPLATES } from './case-file-entries';

const STORAGE_KEY = 'arg_state_v1';

// Distinct routes that count toward File 08's audit-trail threshold.
// Kept deliberately small so a normal playthrough clears it without padding.
const NAV_LOG_UNLOCK_THRESHOLD = 5;

interface PersistedState {
  argActive: boolean;
  unlocked: number[];
  caseFile: CaseFileEntry[];
  fragments: Record<'a' | 'b' | 'c', string | null>;
  visitedRoutes: string[];
}

@Injectable({ providedIn: 'root' })
export class ArgStateService {
  readonly argActive = signal<boolean>(false);
  readonly unlocked = signal<Set<number>>(new Set());
  readonly caseFile = signal<CaseFileEntry[]>([]);
  readonly fragments = signal<Record<'a' | 'b' | 'c', string | null>>({ a: null, b: null, c: null });
  readonly visitedRoutes = signal<string[]>([]);

  // Number of elements solved — drives the "Case File" nav item's badge and
  // gives components a simple progress readout without recomputing a set size.
  readonly stage = computed(() => this.unlocked().size);

  constructor(
    private router: Router,
    private persistence: PersistenceService,
  ) {
    this.loadState();

    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e) => this.logRoute(e.urlAfterRedirects));
  }

  private loadState(): void {
    const raw = this.persistence.get(STORAGE_KEY);
    if (!raw) return;
    try {
      const parsed = JSON.parse(raw) as PersistedState;
      this.argActive.set(!!parsed.argActive);
      this.unlocked.set(new Set(parsed.unlocked ?? []));
      this.caseFile.set(parsed.caseFile ?? []);
      this.fragments.set(parsed.fragments ?? { a: null, b: null, c: null });
      this.visitedRoutes.set(parsed.visitedRoutes ?? []);
    } catch {
      // Corrupt/old state — start clean rather than throwing.
    }
  }

  private saveState(): void {
    const state: PersistedState = {
      argActive: this.argActive(),
      unlocked: Array.from(this.unlocked()),
      caseFile: this.caseFile(),
      fragments: this.fragments(),
      visitedRoutes: this.visitedRoutes(),
    };
    this.persistence.set(STORAGE_KEY, JSON.stringify(state));
  }

  private logRoute(url: string): void {
    if (!this.argActive()) return;
    const path = url.split('?')[0].split('#')[0];
    const current = this.visitedRoutes();
    if (current.includes(path)) return;

    const next = [...current, path];
    this.visitedRoutes.set(next);
    this.saveState();

    if (next.length >= NAV_LOG_UNLOCK_THRESHOLD) {
      this.unlockElement(8);
    }
  }

  isUnlocked(id: number): boolean {
    return this.unlocked().has(id);
  }

  /** Element 10: accepting the intro modal is what turns the ARG on. */
  activateArg(): void {
    if (this.argActive()) return;
    this.argActive.set(true);
    this.saveState();
    this.unlockElement(10);
    // The route the visitor is already standing on when they accept never
    // fires its own NavigationEnd again — log it explicitly so it still
    // counts toward File 08's trail.
    this.logRoute(this.router.url);
  }

  unlockElement(id: number): void {
    if (this.unlocked().has(id)) return;

    const next = new Set(this.unlocked());
    next.add(id);
    this.unlocked.set(next);

    const template = CASE_FILE_TEMPLATES[id];
    if (template) {
      const entry: CaseFileEntry = { ...template, unlockedAt: new Date().toISOString() };
      this.caseFile.set([...this.caseFile(), entry].sort((a, b) => a.id - b.id));
    }

    this.saveState();
  }

  setFragment(key: 'a' | 'b' | 'c', value: string): void {
    if (this.fragments()[key]) return;
    this.fragments.set({ ...this.fragments(), [key]: value });
    this.saveState();
  }

  /** Combined passphrase entered at /the-terminal for File 03's hash check. */
  combinedPassphrase(): string | null {
    const { a, b, c } = this.fragments();
    if (!a || !b || !c) return null;
    return `${a}-${b}-${c}`;
  }

  /** Wipes all ARG progress (state + localStorage) so a playthrough can be re-run from scratch. */
  reset(): void {
    this.argActive.set(false);
    this.unlocked.set(new Set());
    this.caseFile.set([]);
    this.fragments.set({ a: null, b: null, c: null });
    this.visitedRoutes.set([]);
    this.persistence.remove(STORAGE_KEY);
  }
}
