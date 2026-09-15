import { Component } from '@angular/core';
import { ArgStateService } from '../arg/arg-state.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.css',
    standalone: false
})
export class MenuComponent {
    constructor(public argState: ArgStateService) { }
}
