import type { Activity, Game, Lesson, Topic } from "@/types/content";

/**
 * PLACEHOLDER CURRICULUM — the *structure* is real, the *content* is not.
 *
 * This seeds exactly one Topic so the content model is exercised end to end
 * (Topic → Lessons → Activities → Game) ahead of the real curriculum. Replace
 * the copy below with the approved lessons; nothing that consumes it needs to
 * change, because everything reads through `src/lib/content.ts`.
 *
 * Note none of the current videos carry a `topicId`: they are standalone
 * character videos, not Numbers lessons, so linking them here would be a lie.
 * Real topic videos get `topicId: "numbers"` in `src/data/videos.ts`.
 */

export const TOPICS: Topic[] = [
  {
    id: "numbers",
    slug: "numbers",
    title: "Numbers",
    description: "Count from 1 to 10 with Nova, Pinki and Bloo.",
    order: 1,
  },
];

export const LESSONS: Lesson[] = [
  {
    id: "numbers-1",
    topicId: "numbers",
    order: 1,
    title: "Meet the Numbers",
    description: "Say hello to 1, 2 and 3.",
  },
  {
    id: "numbers-2",
    topicId: "numbers",
    order: 2,
    title: "Count to Five",
    description: "Count along with Nova up to five.",
  },
  {
    id: "numbers-3",
    topicId: "numbers",
    order: 3,
    title: "All the Way to Ten",
    description: "Finish the path and reach ten.",
  },
];

export const ACTIVITIES: Activity[] = [
  {
    id: "numbers-count-the-stars",
    topicId: "numbers",
    lessonId: "numbers-2",
    title: "Count the Stars",
    description: "Tap every star you can see.",
  },
];

export const GAMES: Game[] = [
  {
    id: "numbers-counting-game",
    topicId: "numbers",
    title: "Counting Game",
    description: "Help Bloo collect the right number of stars!",
    href: "/play/counting",
  },
];
