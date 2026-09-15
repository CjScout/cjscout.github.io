// Shared answer keys for the ARG's verifiable puzzles. Kept in one file so
// the voicemail transcript (source of the bypass code) and the terminal /
// private-notes components (which check against these) can't drift apart.

// SHA-256 of "ACQUIRED-DELTA-SIGNAL" — the three fragments from Files 01, 06,
// and 04, alphabetized and dash-joined so the check works regardless of
// which order a player actually finds them in. Verified with:
//   echo -n "ACQUIRED-DELTA-SIGNAL" | sha256sum
export const TERMINAL_PASSPHRASE_HASH = '241b59d9c1f8210fd7b461139e748b14800d0d853b7e31838c8ec80c9bc3eed1';

// Spoken in the Element 04 voicemail transcript; stops Element 07's countdown early.
export const COUNTDOWN_BYPASS_CODE = 'NIGHTSHADE';

export const COUNTDOWN_SECONDS = 60;
