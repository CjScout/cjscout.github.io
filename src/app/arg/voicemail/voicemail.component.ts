import { Component, signal } from '@angular/core';
import { ArgStateService } from '../arg-state.service';

@Component({
  selector: 'app-voicemail',
  templateUrl: './voicemail.component.html',
  styleUrl: './voicemail.component.css',
  standalone: false,
})
export class VoicemailComponent {
  readonly acknowledged = signal(false);

  constructor(public argState: ArgStateService) {}

  acknowledge(): void {
    // The player has to actively flag the transcript as relevant — not just
    // have the page open — before File 03's fragment and File 07's bypass
    // code are considered "found."
    this.acknowledged.set(true);
    this.argState.setFragment('c', 'DELTA');
    this.argState.unlockElement(4);
  }
}
