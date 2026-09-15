import { Component, OnInit } from '@angular/core';
import { ArgStateService } from '../arg-state.service';

@Component({
  selector: 'app-signal-noise',
  templateUrl: './signal-noise.component.html',
  styleUrl: './signal-noise.component.css',
  standalone: false,
})
export class SignalNoiseComponent implements OnInit {
  constructor(public argState: ArgStateService) {}

  ngOnInit(): void {
    // Following the "anomaly" link to this dead end IS the puzzle — there's
    // nothing further to solve once the player arrives.
    this.argState.unlockElement(5);
  }
}
