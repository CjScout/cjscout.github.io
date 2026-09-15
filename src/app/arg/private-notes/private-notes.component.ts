import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ArgStateService } from '../arg-state.service';
import { COUNTDOWN_BYPASS_CODE, COUNTDOWN_SECONDS } from '../arg-constants';

// Standalone so this route (Element 09's restricted zone) can be
// lazy-loaded via loadComponent behind privateNotesGuard, kept out of the
// main bundle until a player has actually earned access.
@Component({
  selector: 'app-private-notes',
  templateUrl: './private-notes.component.html',
  styleUrl: './private-notes.component.css',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
})
export class PrivateNotesComponent implements OnInit, OnDestroy {
  readonly secondsLeft = signal(COUNTDOWN_SECONDS);
  readonly bypassInput = signal('');
  readonly resolution = signal<'pending' | 'expired' | 'bypassed'>('pending');

  private intervalId: ReturnType<typeof setInterval> | null = null;

  constructor(public argState: ArgStateService) {}

  ngOnInit(): void {
    // Element 07 is already unlocked (e.g. a returning visitor) — no need to
    // run the clock again.
    if (this.argState.isUnlocked(7)) {
      this.resolution.set('bypassed');
      return;
    }

    this.intervalId = setInterval(() => {
      const next = this.secondsLeft() - 1;
      this.secondsLeft.set(next);
      if (next <= 0) {
        this.stopClock();
        this.resolution.set('expired');
        this.argState.unlockElement(7);
      }
    }, 1000);
  }

  ngOnDestroy(): void {
    this.stopClock();
  }

  tryBypass(): void {
    if (this.resolution() !== 'pending') return;
    if (this.bypassInput().trim().toUpperCase() === COUNTDOWN_BYPASS_CODE) {
      this.stopClock();
      this.resolution.set('bypassed');
      this.argState.unlockElement(7);
    }
  }

  private stopClock(): void {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}
