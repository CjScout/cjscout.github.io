import { Component, signal } from '@angular/core';
import { ArgStateService } from '../arg/arg-state.service';

// Matches the game master's callsign from the intro modal briefing: "GM-7".
const CIPHER_ANSWER = 'GM7';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    standalone: false
})
export class HomeComponent {
    readonly cipherInput = signal('');
    readonly cipherWrong = signal(false);

    constructor(public argState: ArgStateService) { }

    submitCipher(): void {
        // Strip formatting so "GM-7", "gm 7", and "GM7" all match.
        const normalized = this.cipherInput().trim().toUpperCase().replace(/[^A-Z0-9]/g, '');
        if (normalized === CIPHER_ANSWER) {
            this.cipherWrong.set(false);
            this.argState.setFragment('a', 'SIGNAL');
            this.argState.unlockElement(1);
        } else {
            this.cipherWrong.set(true);
        }
    }
}
