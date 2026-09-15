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
  /** Rubric field: Tool/Element — what escape-room mechanic the game master built here. */
  toolElement: string;
  /** Rubric field: Source — what the game master cites as the basis/reference for it. */
  source: string;
  /** Rubric field: Significance — why the game master flags this as noteworthy. */
  significance: string;
  /** Rubric field: Discipline(s) — what fields of expertise the game master says this draws on. */
  disciplines: string;
  /** Rubric field: Integration — how the game master connects this to the wider room. */
  integration: string;
  /** ISO timestamp string set at the moment the entry is unlocked. */
  unlockedAt: string;
}
