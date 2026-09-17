import { CaseFileEntry } from './case-file-entry.model';

// Static copy for each of the 10 case-file entries, voiced by the in-fiction
// game master (GM-7) running this hidden escape room. ArgStateService stamps
// `unlockedAt` onto a copy of one of these the instant the matching room's
// mechanic is verified solved — nothing here is displayed until that happens.
//
// The premise: this site has an escape room built into it, themed around a
// cybersecurity / computer networking / digital forensics background —
// designed and run by GM-7, in-fiction stand-in for the site's author. Each
// entry documents one real escape-room design element while staying in that
// game master's voice.
//
// Each of the five fields below satisfies one rubric requirement while
// staying in the game master's voice:
//   toolElement  -> Tool/Element
//   source       -> Source
//   significance -> Significance
//   disciplines  -> Discipline(s)
//   integration  -> Integration
export type CaseFileTemplate = Omit<CaseFileEntry, 'unlockedAt'>;

export const CASE_FILE_TEMPLATES: Record<number, CaseFileTemplate> = {
  1: {
    id: 1,
    caseName: 'FILE 01 — SIGNAL DISCIPLINE (THEME)',
    toolElement:
      "The whole site runs green-on-black, monospace, no decoration — the exact look of every terminal and NOC display I've actually worked on. That's not a portfolio color scheme. It's a room built out of the equipment I use, the same way a physical escape room dresses its set out of whatever the story needs. You confirmed you'd clocked it the moment you fed the prompt the right callsign.",
    source:
      "Straight out of escape-room theming practice — Nicholson's 2015 survey of commercial escape rooms found consistent environmental design does more for a room's satisfaction than puzzle difficulty does. I just built the environment out of a subject I actually know: terminal gear.",
    significance:
      "Every other room in this exercise only reads as 'off' because this file establishes what 'normal' looks like first. Pull the aesthetic and the restricted room down the hall is just a page with red text. Keep it, and a visitor's eye tells them something's different before they've read a single word.",
    disciplines:
      'Environmental design and theming — the discipline every physical escape room is built on. A little networking-hardware nostalgia, since that\'s the actual reference material.',
    integration:
      "Every file after this inherits the shell you just confirmed. The contrast at the isolated segment, the red ink in the restricted room — none of it lands without the baseline set here.",
  },
  2: {
    id: 2,
    caseName: 'FILE 02 — THE VOID (PLACE)',
    toolElement:
      "You left the lit hallway and walked into a room with nothing in it. Same site, same router, but the terminal green drains out and the walls go dark red — like stepping off the monitored network onto an isolated, unmonitored segment. There's nothing to interact with except what I left on the floor.",
    source:
      "This is a room transition, the same trick a physical escape room uses when you crawl through a gap in the wall into 'the room they didn't tell you about.' I built the boundary out of a route and a stylesheet instead of a sheet of plywood.",
    significance:
      "A visitor could read this whole site and still believe it's a resume. They can't unlearn standing in a room that doesn't match the rest of the house. Once they've felt that boundary, they know there's more floor plan than the nav bar shows.",
    disciplines:
      'Spatial and environmental design, borrowed directly from physical escape-room construction. A network-segmentation metaphor — isolating a room from the main path is the same idea as isolating a VLAN.',
    integration:
      "The recording you found in that room is File 04. The same contrast is waiting behind the lock in the restricted room, File 09, if you get that far.",
  },
  3: {
    id: 3,
    caseName: 'FILE 03 — CONVERGENCE (MULTI-PIECE PUZZLE)',
    toolElement:
      "Three fragments, three rooms, none of them worth anything alone. You had to actually earn each one — decrypt a project entry, sit through a recording, talk the front page into giving up a callsign — before the combination meant anything. I hashed your answer the second you submitted it. No partial credit, no working backward from a guess.",
    source:
      "This is a puzzle dependency chart — the tool most escape-room designers actually use to plan which clues gate which doors — made literal: nothing here opens until three independent branches converge on one lock. The check itself is a straight checksum, SHA-256, run client-side, the same kind of integrity check that confirms a forensic image hasn't been altered.",
    significance:
      "This is the checkpoint that proves you didn't skip a room. You can't reach this hash by luck; the fragments are worded so only someone who sat through the other three files could reconstruct the answer.",
    disciplines: 'Puzzle-dependency design, straight out of escape-room planning. Applied cryptography — a checksum is a checksum whether it\'s guarding a file or a door.',
    integration: 'Passing this check is the literal key to the literal lock at File 09. Nothing past this point opens without it.',
  },
  4: {
    id: 4,
    caseName: "FILE 04 — THE RECORDING (CHEKOV'S GUN)",
    toolElement:
      "The recording in the isolated room sounded like set dressing the first time through — a voice, some static, nothing you were told to remember. It wasn't set dressing. One phrase in that transcript does actual work later, and you didn't know which one until you needed it.",
    source:
      "Every physical escape room has at least one prop that looks decorative and isn't — a picture frame that's really a switch, a book that's really a lever. Chekhov's version of the same rule: if it's on the wall in an early room, it fires before the room closes. I planted the payoff in scene and let time do the hiding.",
    significance:
      "This is the difference between a prop and a plant. A prop decorates a room. A plant waits. The value of this file isn't the recording — it's the later moment you realize the thing that sounded incidental was the thing worth writing down.",
    disciplines: 'Narrative setup-and-payoff, the same discipline behind every load-bearing escape-room prop. Some restraint, which is its own skill.',
    integration:
      "One of your three fragments for File 03 lives in this transcript. So does the override that skips File 07's clock, if you were listening the first time.",
  },
  5: {
    id: 5,
    caseName: 'FILE 05 — SIGNAL NOISE (RED-HERRING)',
    toolElement:
      "I flagged an anomaly on the front page, loud enough that ignoring it felt like the wrong call. You followed it. It went nowhere — deliberately, cleanly nowhere — and told you as much on arrival.",
    source:
      "Red herrings are one of the more argued-over tools in escape-room design — some designers refuse them outright because a wasted lead can sour a room's pacing, others treat one clean dead end as proof the world is bigger than the solution path. I sided with the second camp. It's also just an honest SOC habit: most alerts are false positives, and knowing how to write one off without panicking is half the job.",
    significance:
      "The dead end isn't wasted effort on your part — it's data on mine. Now I know you'll chase an anomaly without waiting for permission. In an actual SOC that instinct gets trained, not punished.",
    disciplines: 'Misdirection design, straight out of the escape-room genre. Alert triage — the unglamorous, constant skill in security operations.',
    integration:
      "Your visit here logged to the same trail as every other room you've touched — see File 08. A false positive still counts as a data point once someone's watching the log.",
  },
  6: {
    id: 6,
    caseName: 'FILE 06 — FALSE FRONT (DISGUISE)',
    toolElement:
      "One entry on the project list read exactly like the others — until you found the trigger that made it decrypt in front of you. What looked like a bullet point about a class project turned out to be a payload wearing that project's description as cover.",
    source:
      "Physical escape rooms hide keys inside books, false-bottomed drawers, locked boxes disguised as decoration — the reveal is the mechanic. I built the digital version: a project entry that decrypts on demand instead of a drawer that slides open.",
    significance:
      "This is the moment 'real portfolio content' and 'the room built underneath it' stop being separate things. You can't fully trust the rest of this page anymore, and that uncertainty is the point, not a defect in the reading experience.",
    disciplines: 'Hidden-compartment design, straight out of physical escape-room prop-building. A little file-analysis instinct — decrypting something suspicious instead of taking it at face value.',
    integration:
      "The second of your three fragments for File 03 was sitting behind this decryption. You needed to trigger this one specifically before the checksum at File 03 would take your full answer.",
  },
  7: {
    id: 7,
    caseName: 'FILE 07 — THE CLOCK (TIME-BASED PRESSURE)',
    toolElement:
      "Getting through the lock at File 09 only bought you a room with a clock running in it. Sixty seconds, counting down whether you read fast or not, with exactly one way to stop it early — and it wasn't patience.",
    source:
      "The countdown timer is the signature device of the entire escape-room genre — most commercial rooms are built around a sixty-minute version of exactly this pressure. I compressed it to sixty seconds and swapped 'time's up, you lose' for something closer to an account-lockout window: the room lets you through either way, but only one path skips the wait.",
    significance:
      "Reading is passive. A clock converts it into a performance with a visible cost. Whichever way you got through, the way you handled those sixty seconds is now part of the record, not just the outcome.",
    disciplines: 'Tension-pacing design, the core skill behind every escape-room countdown. A containment-window metaphor, borrowed from actual incident response.',
    integration:
      "The override that skips this clock was sitting in File 04's transcript the entire time you had it. If you found it there, you already knew how this room would end before it started.",
  },
  8: {
    id: 8,
    caseName: 'FILE 08 — THE TRAIL (SURVEILLANCE)',
    toolElement:
      'That indicator in the corner is not decoration. It has been logging every room you have entered since you started this exercise — home, the isolated segment, the dead end, all of it, timestamped, in order. You are as much a subject of this file as anything else on the site.',
    source:
      "This is a game master's camera feed, function for function — every staffed escape room has someone watching a monitor and a log of which door opened when, ready to nudge a stuck team. I built the digital version out of a router event and called it what it actually is: an audit trail, the same artifact a SIEM keeps on every login and access attempt.",
    significance:
      'A resume tells you where someone has been in their career. This log tells me where you have actually been, in real time, without you self-reporting a word of it. That gap between the two is most of what security monitoring is.',
    disciplines: 'Game-master operations, straight out of live escape-room practice. Log analysis and audit-trail design, straight out of a SOC.',
    integration:
      "This file completed itself the moment your trail crossed five distinct rooms. You didn't trigger it on purpose — that is exactly the point. Monitoring doesn't wait for consent, staffed or automated.",
  },
  9: {
    id: 9,
    caseName: 'FILE 09 — PRIVATE NOTES (CONDITIONAL ACCESS)',
    toolElement:
      "This door didn't open because you asked. It's wired to check whether File 03's checksum actually cleared before the route resolves at all — no key, no room, no matter how directly you typed the address.",
    source:
      "This is a locked door built the honest way: access control, not a padlock prop that was never really locked. Physical escape rooms fake this with a combination lock and a hidden clue; I wrote the combination check into the route itself, the same way you'd gate a restricted system behind a real credential instead of security through obscurity.",
    significance:
      "Everything up to this point could be argued as flavor text if the site let you cheat past it. It doesn't. The restriction is real, which is the only thing that makes 'restricted' mean anything instead of just looking like it.",
    disciplines: 'Access control, straight out of actual systems security. Lock-and-key design — the defining mechanic of the entire escape-room genre, enforced here in code instead of a padlock.',
    integration: 'File 03 is the key. This is the lock it fits. What is waiting on the other side is File 07, running the moment the door opens.',
  },
  10: {
    id: 10,
    caseName: 'FILE 10 — THE BRIEFING (HOOK/INTRO)',
    toolElement:
      "Before any of this had a name, a window opened over the page you thought you'd come here for, and I introduced myself as the person running the room. You didn't have to click start. You did.",
    source:
      "Every escape room opens with a briefing — a host walks you through the premise, the rules, and the stakes before you're allowed to touch anything. I wrote mine to double as the fiction: a cybersecurity and digital forensics student's practical exam that nobody actually assigned, staged as a room inside his own site.",
    significance:
      "That click is the only consent this exercise ever asked for, and it's the reason every file after it feels earned instead of intrusive. You opted into a room before you'd seen a single wall of it — which, on reflection, is exactly how every good escape room starts.",
    disciplines: 'Frame-narrative and briefing design, the opening move of every staffed escape room. Portfolio design, since the whole exercise is also just a way to show, not tell, what a cybersecurity and forensics program actually teaches you to build.',
    integration: 'Everything in this cabinet, File 01 through File 09, only exists because this file resolved first. Starting the room is what turned every other mechanic on.',
  },
};
