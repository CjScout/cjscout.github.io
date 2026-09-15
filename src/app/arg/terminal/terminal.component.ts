import { Component, signal } from '@angular/core';
import { ArgStateService } from '../arg-state.service';
import { normalizePassphrase, sha256Hex } from '../sha256';
import { TERMINAL_PASSPHRASE_HASH } from '../arg-constants';

type Status = 'idle' | 'checking' | 'wrong' | 'right';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrl: './terminal.component.css',
  standalone: false,
})
export class TerminalComponent {
  readonly input = signal('');
  readonly status = signal<Status>('idle');

  constructor(public argState: ArgStateService) {}

  async submit(): Promise<void> {
    const normalized = normalizePassphrase(this.input());
    if (!normalized) return;

    this.status.set('checking');
    const hash = await sha256Hex(normalized);

    if (hash === TERMINAL_PASSPHRASE_HASH) {
      this.status.set('right');
      this.argState.unlockElement(3);
    } else {
      this.status.set('wrong');
    }
  }
}
