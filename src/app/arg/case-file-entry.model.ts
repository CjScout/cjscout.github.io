// A single dossier page, written in-character by GM-7, the game master
// running this hidden escape room. Each field maps to one of the
// assignment's five required fields, but is voiced as game-master design
// notes rather than a labeled rubric response — see case-file-entries.ts for
// the copy and case-file.component.html for how the "GM Notes" toggle
// exposes the underlying field labels without breaking the in-fiction voice.
export interface CaseFileEntry {
  /** Room number, 1-10, matching the escape room's design order. */
  id: number;
  /** Short in-fiction case name shown as the entry's heading. */
  caseName: string;
  /** Rubric field: Tool/Element — a short paragraph describing the escape-room element and how it appears here. */
  toolElement: string;
  /** Rubric field: Example — a specific example that illustrates the element, and how. (Key kept as `source` so saved progress still loads.) */
  source: string;
  /** Rubric field: Significance — why the element matters when designing escape rooms. */
  significance: string;
  /** Rubric field: Discipline(s) — the academic disciplines the element aligns with, and how it connects to each. */
  disciplines: string;
  /** Rubric field: Integration — whether the element is about control and surveillance, collaboration and trust, or both, and why. */
  integration: string;
  /** ISO timestamp string set at the moment the entry is unlocked. */
  unlockedAt: string;
}
