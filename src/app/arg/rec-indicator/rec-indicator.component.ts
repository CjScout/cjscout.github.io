import { Component } from '@angular/core';
import { ArgStateService } from '../arg-state.service';

@Component({
  selector: 'app-rec-indicator',
  templateUrl: './rec-indicator.component.html',
  styleUrl: './rec-indicator.component.css',
  standalone: false,
})
export class RecIndicatorComponent {
  constructor(public argState: ArgStateService) {}
}
