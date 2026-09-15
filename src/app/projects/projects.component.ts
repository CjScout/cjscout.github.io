import { Component, OnInit, signal } from '@angular/core';
import { ArgStateService } from '../arg/arg-state.service';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css',
    standalone: false
})
export class ProjectsComponent implements OnInit {
    readonly decrypted = signal(false);

    // Snapshot taken once per page visit (not reactive to argState) so that
    // decrypting the site card during THIS visit doesn't instantly reveal
    // the unlisted card in front of the player — they have to actually
    // navigate away and come back before it appears.
    readonly showUnlisted = signal(false);

    constructor(public argState: ArgStateService) { }

    ngOnInit(): void {
        this.showUnlisted.set(this.argState.isUnlocked(1) && this.argState.isUnlocked(6));
    }

    decrypt(): void {
        this.decrypted.set(true);
        this.argState.setFragment('b', 'ACQUIRED');
        this.argState.unlockElement(6);
    }

    // Fallback entry point for anyone who declined the intro modal — the
    // modal only shows once per session, so without this, a decline would
    // otherwise lock a visitor out of the room entirely. Re-shows the same
    // briefing rather than activating the ARG outright.
    startRoom(): void {
        this.argState.requestBriefing();
    }
}
