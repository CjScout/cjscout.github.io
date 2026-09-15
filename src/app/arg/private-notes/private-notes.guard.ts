import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { ArgStateService } from '../arg-state.service';

// Element 09's lock-and-key: this route only resolves once File 03's hash
// check has actually passed. Successfully clearing this guard is itself the
// puzzle-completion condition for File 09 — there's nothing further to do
// once the player is standing inside.
export const privateNotesGuard: CanActivateFn = () => {
  const argState = inject(ArgStateService);
  const router = inject(Router);

  if (argState.isUnlocked(3)) {
    argState.unlockElement(9);
    return true;
  }

  return router.createUrlTree(['/the-terminal']);
};
