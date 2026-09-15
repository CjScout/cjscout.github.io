import { Injectable } from '@angular/core';

// Thin wrapper around localStorage so ArgStateService doesn't touch the
// global directly and callers stay safe if storage is unavailable
// (private browsing, disabled storage, SSR-ish edge cases).
@Injectable({ providedIn: 'root' })
export class PersistenceService {
  get(key: string): string | null {
    try {
      return window.localStorage.getItem(key);
    } catch {
      return null;
    }
  }

  set(key: string, value: string): void {
    try {
      window.localStorage.setItem(key, value);
    } catch {
      // Storage unavailable — ARG state simply won't persist across reloads.
    }
  }

  remove(key: string): void {
    try {
      window.localStorage.removeItem(key);
    } catch {
      // no-op
    }
  }
}
