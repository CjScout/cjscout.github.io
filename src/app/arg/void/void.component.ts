import { Component, OnInit } from '@angular/core';
import { ArgStateService } from '../arg-state.service';

@Component({
  selector: 'app-void',
  templateUrl: './void.component.html',
  styleUrl: './void.component.css',
  standalone: false,
})
export class VoidComponent implements OnInit {
  constructor(public argState: ArgStateService) {}

  ngOnInit(): void {
    // Arriving here at all is the puzzle for File 02 — the contrast is the point.
    this.argState.unlockElement(2);
  }
}
