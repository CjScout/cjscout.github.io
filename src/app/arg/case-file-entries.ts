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
// Writing rule: the escape-room element is already named in each caseName.
// Each field answers one rubric requirement in the game master's voice:
//   toolElement  -> Tool/Element: short paragraph describing the element and
//                   how it appears in this room
//   source       -> Example: a specific example that illustrates the element,
//                   and how it does (key is `source`; shown as "EXAMPLE")
//   significance -> Significance: why the element matters when designing
//                   escape rooms
//   disciplines  -> Discipline(s): academic disciplines (from the map of
//                   academic disciplines) it aligns with, and how
//   integration  -> Integration: control and surveillance, collaboration and
//                   trust, or both, with the reasoning
// Every Example points to one of two works, and no other outside examples
// are cited:
//   - Escape from Mr. Lemoncello's Library (Chris Grabenstein, 2013)
//   - The Conversation (dir. Francis Ford Coppola, 1974)
export type CaseFileTemplate = Omit<CaseFileEntry, 'unlockedAt'>;

export const CASE_FILE_TEMPLATES: Record<number, CaseFileTemplate> = {
  1: {
    id: 1,
    caseName: 'FILE 01 — SIGNAL DISCIPLINE (THEME)',
    toolElement:
      "A theme is the story world and visual identity that makes an escape room feel like one place instead of a set of puzzles. Here the whole site is dressed as a terminal: green text on black, monospace, no decoration, built from the equipment of my own field. You showed you had noticed it by answering the callsign prompt on the home page with GM-7, the name I gave myself in the briefing.",
    source:
      "Escape from Mr. Lemoncello's Library by Chris Grabenstein is a specific example of a theme carried all the way through. Mr. Lemoncello is a game designer, so his library is a game from top to bottom: it has trivia games, an IMAX movie and an animatronic presidential debate, and the escape clues are made from library things like the Dewey Decimal System, library cards and book covers. Because the theme decides what the clues are made of, everything the kids touch feels like part of the same world. I did the same with my own field and built the room out of terminals.",
    significance:
      "In escape room design the theme is what makes a room feel like a story instead of a pile of locks. It tells players what kind of place they are in, what counts as normal, and which objects are likely to be clues, so they spend their time solving instead of guessing what the room wants. A consistent theme is also what lets a break from it, like the red rooms later on, register as a signal.",
    disciplines:
      "Art and cultural studies: a theme is a designed aesthetic that gives a space a consistent identity, and this room takes its look from the culture of terminals and network operations centers, the way Mr. Lemoncello's library takes its identity from game design. Informatics: the look comes from the command-line and monitoring interfaces I use in my Computer Networking & Cybersecurity coursework, so the theme also shows how those interfaces present information.",
    integration:
      "Both. Control: the designer chooses the look and decides what counts as normal, so the theme quietly sets the rules of the world the players are in. Collaboration and trust: a shared, consistent world gives players a common frame to talk about and work in, and it signals that the designer built the room with care. Mr. Lemoncello's library shows both at once, since one designer's choices shape everything and the kids still team up inside it.",
  },
  2: {
    id: 2,
    caseName: 'FILE 02 — THE VOID (PLACE)',
    toolElement:
      "Place is the physical or virtual space a room is set in, and escape rooms are usually built from several distinct spaces with boundaries between them. The Void is a bare room at its own address, reached through the unlisted card on the Projects page. The green is gone, the walls are dark red, and the only thing in it is a link to play a recording.",
    source:
      "In The Conversation (1974, directed by Francis Ford Coppola), hotel room 773 is a specific place the whole story turns on. When surveillance expert Harry Caul breaks in, it looks spotless and empty until he flushes the toilet and finds blood. It illustrates place because the room itself carries the meaning: what matters is where you are standing and what the space is hiding. The Void works the same way, since it looks like nothing and holds the one thing that matters.",
    significance:
      "Place gives an escape room its structure. Moving from one space to the next is how designers pace a game, hide rewards behind a boundary and give players a feeling of progress, and a change in a room's look tells players right away that they have crossed into somewhere new.",
    disciplines:
      "Geography and urban planning: planners divide space into zones with boundaries and separate routes, and the Void is a zone of its own with its own look and its own way in. Informatics: cutting a room off from the main site is the same idea as network segmentation, where a VLAN or a firewall separates part of a network so what is inside can be treated differently.",
    integration:
      "Control and surveillance. A place is a boundary, and a boundary controls where players may go and what they can reach. The Void only appears after you have cleared two other files, so the designer decides when the door exists, and the site still logs your visit once you are inside. Room 773 works this way too: Harry watches the couple's room from the room next to it, so the spaces are defined by who is watching whom.",
  },
  3: {
    id: 3,
    caseName: 'FILE 03 — CONVERGENCE (MULTI-PIECE PUZZLE)',
    toolElement:
      "A multi-piece puzzle splits one answer into parts that are found in different places and only work when combined. Here the answer is three fragments: SIGNAL from the callsign prompt on the home page, ACQUIRED from the analyze button on the Projects page, and DELTA from flagging the recording. You enter all three, in any order, on the terminal page, which the TERMINAL button in the corner opens. The page hashes your input with SHA-256 and compares it with a stored hash, so the answer is never in the page as plain text.",
    source:
      "In Escape from Mr. Lemoncello's Library, no single clue gets the kids out. They collect rebus clues from the fake book covers in the Staff Picks case and from the backs of their library cards and put them together, and Kyle, Akimi and Sierra team up to do it. In The Conversation, Harry Caul records a couple in Union Square and ends up with three separate recordings, each incomplete, that he has to combine into one usable tape. In both, the answer only exists once the parts are combined, which is what my three-fragment passphrase does.",
    significance:
      "Multi-piece puzzles are how designers make a room feel larger than its lock. Because each part is found somewhere different, they force players to explore every space, share what they find and check each other's work, and a group can split up to search and then come back together. They also stop any single clue from solving the whole room.",
    disciplines:
      "Mathematics: the check uses SHA-256, a one-way hash function, so the site can verify your answer without storing it and the hash cannot simply be reversed to reveal the answer. Logic: the door only opens when fragment A and fragment B and fragment C are all present, so the puzzle is an AND condition and missing any one of them fails the check. Informatics: digital forensics uses the same kind of hash to show that evidence has not been altered.",
    integration:
      "Collaboration and trust. The parts are spread out so that nobody has all of them, which pushes players to work together and to trust what a teammate reports. Team Kyle in Escape from Mr. Lemoncello's Library solves the clues as a team, while Charles, who cheats instead, is caught and removed. A solo visitor here plays every role, but the design is the same: the puzzle rewards sharing pieces, not holding them back.",
  },
  4: {
    id: 4,
    caseName: "FILE 04 — THE RECORDING (CHEKOV'S GUN)",
    toolElement:
      "Chekhov's gun is a detail introduced early that looks like set dressing and pays off later. The recording in the Void is a short radio transcript that reads like leftover static and chatter. Two words in it matter later: 'Delta,' a fragment for File 03, and 'Nightshade,' the override code that stops the countdown in File 07. Pressing 'flag as relevant' logs the recording.",
    source:
      "In The Conversation, when Harry Caul first records the couple, 'He'd kill us if he got the chance' is one ordinary sentence in their talk. It becomes the center of the film when he replays the tape and hears the emphasis fall on 'us,' which changes what the line means. It illustrates the element because a detail that sounded like background turns out to be what everything depends on, and my transcript works the same way.",
    significance:
      "Setup and payoff is what makes an escape room feel fair. When the clue a player needs was in view earlier, solving it feels like their own discovery, and when it was not, it feels like the designer cheating. It also rewards attention, because players learn to note everything, including things that look unimportant.",
    disciplines:
      "Media studies: setup and payoff is a basic technique of film storytelling, and The Conversation builds its whole plot on one recorded line planted early. Linguistics: the line means something different when the stress falls on 'us,' so tone and emphasis, not just the words, decide what it says. My transcript asks you to listen the same way and treat every word as possible evidence.",
    integration:
      "Control and surveillance. The recording is captured audio, and the designer decides which words to plant, so the payoff is controlled by the person who knows what will matter later. The Conversation is the same: Harry recorded the couple without their knowledge, so he holds evidence they do not know exists, and he only finds that his reading was incomplete when he hears it again. The player, like Harry, is working from a record someone else controls.",
  },
  5: {
    id: 5,
    caseName: 'FILE 05 — SIGNAL NOISE (RED-HERRING)',
    toolElement:
      "A red herring is a clue that looks important but leads nowhere. With the room running, the first post on the Blog shows an 'Anomaly detected — investigate' warning link. It leads to a page that tells you that you were on the wrong track. There is no fragment and no door behind it.",
    source:
      "In The Conversation, Harry Caul hears the couple's line as a threat against them and acts on it, booking the hotel room next to 773 where the couple planned to meet. His reading is wrong: the couple were the ones justifying action against the Director. It illustrates the element because a convincing lead sends him the wrong way, and he only sees the mistake when the truth about the line comes out. My dead end is the same idea, except mine tells you honestly that it is one.",
    significance:
      "Red herrings test whether players think for themselves instead of only following the obvious path, and they make the real clues mean more because not everything in the room is one. They are risky, because a dead end that wastes too much time hurts the pacing, so a designer has to keep it short and clearly closed.",
    disciplines:
      "Psychology: a plausible first interpretation is hard to drop, which is why a red herring works, and in The Conversation, Harry's reading of the line is shaped by what he already expects to hear. Informatics: security analysts deal with false-positive alerts constantly, so investigating one and closing it out is a core skill in my cybersecurity coursework.",
    integration:
      "Both. Control: a red herring is the designer steering players' attention, so it is a deliberate use of control over what they think matters. Collaboration and trust: it is only a fair game if the designer can be trusted, and my page tells you the lead was a dead end, so the honest ending keeps that trust. Harry's mistake in The Conversation shows the alternative: isolated, he acts on his reading without anyone to check it against.",
  },
  6: {
    id: 6,
    caseName: 'FILE 06 — FALSE FRONT (DISGUISE)',
    toolElement:
      "A disguise is a puzzle piece hidden inside something that looks ordinary. On the Projects page, the card for this website looks like any other project. Once the room is running it has a small 'analyze' button, and clicking it changes the description to reveal the second fragment, ACQUIRED.",
    source:
      "In Escape from Mr. Lemoncello's Library, the Staff Picks display case holds fake book covers that look like ordinary books but carry rebus clues, and Charles becomes fixated on them. They illustrate the element because the clue is hidden by looking like something you would walk past. My project card is the same kind of thing: a portfolio entry that looks normal and hides a clue in plain sight.",
    significance:
      "Disguised clues reward observation. A room where every clue is obvious is solved quickly, so designers hide clues inside props that belong in the room, which also keeps the theme intact because nothing looks like a puzzle piece until someone inspects it. It teaches players to question the things they have been ignoring.",
    disciplines:
      "Informatics: in digital forensics, examiners inspect files that look ordinary for hidden or disguised content instead of trusting how they look. Psychology: people tend to trust what looks normal, and phishing and social engineering exploit exactly that, so an ordinary-looking project card that holds a clue is a small version of the same lesson.",
    integration:
      "Control and surveillance. Hiding a clue is control over information: the designer decides what the player can see and what stays concealed until they act. In the book, the Staff Picks case is that control in a small space, since the designer decides which covers are clues. The disguise also depends on the visitor trusting how the card looks, which is why it only works as a game the visitor has agreed to play.",
  },
  7: {
    id: 7,
    caseName: 'FILE 07 — THE CLOCK (TIME-BASED PRESSURE)',
    toolElement:
      "Time-based pressure is a limit on how long players have to solve the room, and it forces them to decide instead of browsing. When the Private Notes page opens, a 60-second countdown starts. You can wait for it to run out or type the override code before it does, and either way the notes open.",
    source:
      "In Escape from Mr. Lemoncello's Library, Mr. Lemoncello announces that the first kid to escape within twenty-four hours wins, so every clue after that is solved against a clock. It illustrates the element because the time limit is what turns a library into a race. I shortened the idea to 60 seconds and made it a lockout window: running out of time lets you through, and the override only skips the wait.",
    significance:
      "A clock is the standard way an escape room creates urgency and controls pacing. It keeps groups from stalling, makes players prioritize, and turns a puzzle into a performance where every choice has a cost. It also gives the designer a way to end a session on time whether or not the players finish.",
    disciplines:
      "Psychology: time pressure changes how people decide, pushing them to act faster and check less, which is what the countdown is meant to test. Informatics: a timed containment window, or an account lockout that ends after a wait, is the same tradeoff incident responders make between stopping a threat and keeping a system usable.",
    integration:
      "Control and surveillance. A countdown is control over the players' time: the designer decides how long they get and what happens at zero. The page also reacts to how you get through, showing a different message if you used the override than if you waited, so the room notices how you play. In the book, the same limit is what makes the kids competitors, because only the first to escape wins.",
  },
  8: {
    id: 8,
    caseName: 'FILE 08 — THE TRAIL (SURVEILLANCE)',
    toolElement:
      "Surveillance in an escape room is the game master watching the players so they can see progress and step in when needed. Here, once the room is running, a REC indicator in the corner logs each different page you visit. When you have visited five, it switches to 'trail logged' and this file unlocks. Nothing in the room asks you to do anything for it, and the log is stored only in your own browser.",
    source:
      "The Conversation is about a surveillance expert, Harry Caul, whose job is recording people who do not know it. It turns on him at the end, when Martin Stett phones with a tape of Harry playing his saxophone in his own apartment, proving Harry is being listened to. Harry tears the apartment apart looking for the bug and finds nothing. It illustrates the element because the watcher becomes the watched, and my REC indicator is the same kind of watching, except it is visible from the first page.",
    significance:
      "A game master who watches can tell when a team is stuck, give a hint at the right moment and keep the room safe, so watching is part of what makes a live escape room work. It also makes the room feel alive, because players know the designer is aware of what they do.",
    disciplines:
      "Informatics: audit logging and log analysis, the same kind of record a SIEM keeps of logins and access attempts, and a timestamped log is the basic evidence forensic examiners use to reconstruct events. Law: surveillance and privacy are governed by consent and by rules about who may watch whom, which is why the indicator is visible from the first page and the log stays in your own browser. Philosophy: The Conversation asks whether the watcher is responsible for what the watching leads to, through Harry Caul's guilt over an earlier job that ended in three deaths.",
    integration:
      "Control and surveillance. This is the plainest case: a log of what you visited, written in order without you asking, is surveillance, and the designer uses it to decide when the file unlocks. The Conversation shows the risk, since Harry spends his career watching others and is shaken when the tape of him is played back. My indicator tries to avoid that by being visible from the first page and keeping the log in your own browser, so the watching is disclosed.",
  },
  9: {
    id: 9,
    caseName: 'FILE 09 — PRIVATE NOTES (CONDITIONAL ACCESS)',
    toolElement:
      "Conditional access is a door that only opens when a condition is met, so the lock is enforced instead of only hidden. The Private Notes page cannot be reached until the passphrase check in File 03 has passed. Typing the address without solving it sends you back to the terminal, and once you have solved it, an untitled draft on the Blog page is the way in.",
    source:
      "In Escape from Mr. Lemoncello's Library, a library card is the key. Andrew Peckleman steals Sierra Russell's card to get into the private meeting room where Team Kyle's collected clues are displayed, and when he is caught he is ejected from the game. It illustrates the element as a credential, a restricted room, and a penalty for using someone else's. My lock is a route guard, a check the site runs before it lets the page load, though the state lives in your browser, so this is a demonstration rather than a security boundary.",
    significance:
      "A lock is the most basic escape room element, and a lock that can be bypassed breaks the game. Real conditional access makes the puzzle mean something: players cannot skip ahead, so the order the designer planned holds, and solving the puzzle feels like earning something.",
    disciplines:
      "Informatics: the route guard performs authorization, checking a condition before it serves a resource, the same feature real applications use to protect pages. Law: access rights come with rules and penalties, and in Escape from Mr. Lemoncello's Library, Andrew using Sierra's stolen library card to enter the private meeting room is a misuse of someone else's credential, for which he is ejected from the game.",
    integration:
      "Both. Control: the guard decides who gets in, and the library card in the book is the designer's way of limiting who reaches the clues. Trust: a credential is only useful if the system trusts whoever holds it, and Andrew's theft breaks trust between players as well as the rule. An access system needs both, a rule that controls the door and some trust in the people who carry the key.",
  },
  10: {
    id: 10,
    caseName: 'FILE 10 — THE BRIEFING (HOOK/INTRO)',
    toolElement:
      "A hook, or intro, is the briefing that begins the game: it explains the premise and the rules before anyone touches a clue. A short message from GM-7 appears a couple of seconds after the site loads and asks whether you want to start the room. Accepting turns everything on. If you say 'not yet,' the Undocumented Feature card on the Projects page has a 'Start the Room' button that shows the same briefing again.",
    source:
      "In Escape from Mr. Lemoncello's Library, the twelve kids first spend an overnight visit enjoying the library. Then Mr. Lemoncello announces the real challenge: the first to escape within twenty-four hours wins. That announcement turns a tour into a game, which is what an intro does. My briefing does the same and explains the premise: a cybersecurity and digital forensics student's practical exam that nobody assigned, built into my own website.",
    significance:
      "The intro is where a room earns the players' buy-in. It sets the story, the goal and the rules, so nobody spends the first minutes confused about what they are supposed to do, and it gives the game master a chance to set the tone.",
    disciplines:
      "Communication sciences: an opening message frames how a receiver reads everything after it, and the briefing sets the premise, the tone and the invitation before anything else happens. It is also opt-in, so nothing is logged until you accept. Pedagogy and educational studies: good instruction explains the goal and the rules before the activity starts, and the room as a whole shows what my program teaches by having a visitor work through it instead of reading a list.",
    integration:
      "Collaboration and trust. A briefing is the designer speaking openly to the players before the game starts and asking for their agreement, which is why mine is opt-in and nothing is logged until you accept. It has a control side, since the designer writes the rules, but the point of an intro is to build trust: players who understand what is happening are more willing to take part. Mr. Lemoncello's announcement does the same, explaining the challenge and the prize before anyone starts.",
  },
};
