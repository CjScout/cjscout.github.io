import { Component, effect, signal } from '@angular/core';
import { ArgStateService } from '../arg-state.service';

@Component({
  selector: 'app-intro-modal',
  templateUrl: './intro-modal.component.html',
  styleUrl: './intro-modal.component.css',
  standalone: false,
})
export class IntroModalComponent {
  readonly visible = signal(false);
  readonly dismissed = signal(false);

  constructor(public argState: ArgStateService) {
    // A page (e.g. Projects' "Start the Room" button) can ask this
    // singleton modal to show the briefing on demand, rather than
    // activating the ARG directly and skipping it.
    effect(() => {
      if (this.argState.briefingRequested()) {
        this.visible.set(true);
      }
    });
  }

  accept(): void {
    this.argState.activateArg();
    this.argState.acknowledgeBriefing();
    this.visible.set(false);
  }

  dismiss(): void {
    this.dismissed.set(true);
    this.argState.acknowledgeBriefing();
    this.visible.set(false);
  }
}
