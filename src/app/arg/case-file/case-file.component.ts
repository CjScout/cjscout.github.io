import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ArgStateService } from '../arg-state.service';

@Component({
  selector: 'app-case-file',
  templateUrl: './case-file.component.html',
  styleUrl: './case-file.component.css',
  standalone: false,
})
export class CaseFileComponent {
  // Diegetic justification for exposing the rubric-style field labels: the
  // game master is offering to show their literal design notes on the room,
  // consistent with the escape-room conceit established elsewhere.
  readonly gmNotes = signal(false);

  // Whether the credits panel is open. Starts closed so the case file itself
  // stays the first thing a visitor sees.
  readonly credits = signal(false);

  constructor(
    public argState: ArgStateService,
    private router: Router,
  ) {}

  toggleGmNotes(): void {
    this.gmNotes.set(!this.gmNotes());
  }

  toggleCredits(): void {
    this.credits.set(!this.credits());
  }

  // Testing/playtesting convenience — wipes all room progress so a
  // playthrough can be re-run from a clean slate without clearing
  // localStorage by hand.
  resetRoom(): void {
    if (!confirm('Reset the whole room? This clears every unlocked file and fragment.')) {
      return;
    }
    this.argState.reset();
    this.router.navigate(['/home']);
  }
}
