import { AfterViewInit, Component, ElementRef, OnDestroy, signal } from '@angular/core';
import { ArgStateService } from '../arg/arg-state.service';
import { hops, sideTrips } from './route-hops';

// Matches the game master's callsign from the intro modal briefing: "GM-7".
const CIPHER_ANSWER = 'GM7';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    standalone: false
})
export class HomeComponent implements AfterViewInit, OnDestroy {
    readonly hops = hops;
    readonly sideTrips = sideTrips;
    readonly cipherInput = signal('');
    readonly cipherWrong = signal(false);

    private observer?: IntersectionObserver;

    constructor(public argState: ArgStateService, private host: ElementRef<HTMLElement>) { }

    // Lights each hop as it scrolls into view, like a trace reaching it. The
    // `.tracing` class is only added here, so hops stay lit if this never runs.
    ngAfterViewInit(): void {
        if (typeof IntersectionObserver === 'undefined') { return; }

        const route = this.host.nativeElement.querySelector('.route');
        const items = this.host.nativeElement.querySelectorAll('.hop, .era');
        if (!route) { return; }

        route.classList.add('tracing');
        this.observer = new IntersectionObserver((entries, observer) => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reached');
                    observer.unobserve(entry.target);
                }
            }
        }, { rootMargin: '0px 0px -12% 0px' });
        items.forEach(item => this.observer?.observe(item));
    }

    ngOnDestroy(): void {
        this.observer?.disconnect();
    }

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
