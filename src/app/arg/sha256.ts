// Client-side SHA-256 via the Web Crypto API — used by File 03's terminal
// puzzle to verify the assembled passphrase without ever storing or
// transmitting the plaintext answer.
export async function sha256Hex(message: string): Promise<string> {
  const bytes = new TextEncoder().encode(message);
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

// Normalizes free-form terminal input so "signal acquired delta",
// "DELTA-SIGNAL-ACQUIRED", and "Signal, Acquired, Delta" all hash the same:
// split on anything that isn't a letter/digit, uppercase each token, sort
// alphabetically (the three fragments can be found in any order, so the
// check can't depend on the order they're typed in), rejoin with a dash.
export function normalizePassphrase(input: string): string {
  return input
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((token) => token.toUpperCase())
    .sort()
    .join('-');
}
