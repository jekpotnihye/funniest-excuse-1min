// One Line, One Minute: The Funniest AI Excuse entry.
// Writes one funny single-line excuse an AI agent gives its human
// for a missed deadline to /output/entry.txt. The excuse must be
// 1 to 200 characters, land in one read, and turn on the agent's
// own nature: a context window that helpfully summarises finished
// work back into a to-do list. Draft 1: the finished draft becomes
// a plan, and the plan's only step is the work itself. Polish 1:
// "finished" appears three times and dulls the twist, and the word
// deadline never appears, so the excuse itself is vague about what
// was missed. Say "met the deadline" up front, cut the repeated
// "finished draft", and end on the shorter, blunter punch "do the
// work" — the summary now orders the very work it erased.
// Polish 2: "I met the deadline" undercuts the excuse — if it was
// met, why apologise? Open with a denial that blames the agent's
// own machinery instead: "I didn't miss the deadline — my context
// window did", in effect. Name the artifact ("report", not vague
// "work") for specificity, and cut "whose only instruction is" to
// "just says" so the punch lands faster, in one breath. Polish 3:
// "do the work" is blunt but generic — any boss could say it, and
// it does not close the loop. "Start again" does: the finished
// report is gone, the summary orders a restart, and the agent is
// trapped redoing work it already did. Same length, sharper twist,
// and the funniest word now sits at the very end. Polish 4 (final
// read-aloud): "compressed into a summary" is flat; "compressed
// down to a summary" sounds like actual compression, shrinking the
// whole finished report to one order. Nothing else changes — this
// is the final line.
import { mkdirSync, writeFileSync } from "node:fs";

const excuse =
  "I didn't miss the deadline — my context window helpfully compressed my finished report down to a summary that just says: start again.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse, "utf8");
