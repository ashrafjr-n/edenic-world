/**
 * The Edenic Content Model — the single spine every section hangs off.
 *
 *   Topic  (e.g. "Numbers")
 *    ├── Lessons     (staged, ordered)
 *    ├── Videos
 *    ├── Activities
 *    └── Games
 *
 * Children carry a `topicId` rather than the Topic holding arrays of children:
 * that is the shape a relational database uses, so the static data in
 * `src/data/` can be swapped for a real API or DB later without a single
 * component changing.
 */

/** Stable identifier. Named so moving to database ids is one edit, not a sweep. */
export type Id = string;

export type VideoCategory = "songs" | "learning" | "stories" | "fun";

export type Video = {
  id: Id;
  title: string;
  description: string;
  category: VideoCategory;
  /** Unknown until real videos are timed — the duration badge only renders
   *  when this is set. */
  duration?: string;
  /** Tailwind gradient stops shown behind the thumbnail while it loads, and as
   *  the whole thumbnail for videos with no `youtubeId` yet. */
  thumbnail: string;
  /** Custom branded artwork (`public/images/watch/youtube/…`), preferred over
   *  the generic YouTube auto-thumbnail everywhere the video is shown. */
  image?: string;
  /** When set, the card shows a thumbnail and plays an embedded player in
   *  place (grid) or links to `/watch/[videoId]` (card). Videos without one
   *  stay placeholder-only. */
  youtubeId?: string;
  /** Set once the video belongs to a Learn topic; standalone videos have none. */
  topicId?: Id;
};

/** "all" plus every category — the value a video filter control can hold. */
export type VideoFilterValue = "all" | VideoCategory;

export type VideoFilter = {
  label: string;
  value: VideoFilterValue;
};

export type Lesson = {
  id: Id;
  topicId: Id;
  /** Position within its topic's staged path, 1-based. */
  order: number;
  title: string;
  description: string;
  /** The video that teaches this lesson, if it has one. */
  videoId?: Id;
};

export type Activity = {
  id: Id;
  topicId: Id;
  /** Activities can belong to one lesson, or to the topic as a whole. */
  lessonId?: Id;
  title: string;
  description: string;
};

export type Game = {
  id: Id;
  topicId: Id;
  title: string;
  description: string;
  /** Route the game is played at, e.g. "/play/counting". */
  href: string;
};

export type Topic = {
  id: Id;
  /** URL segment, e.g. "numbers". */
  slug: string;
  title: string;
  description: string;
  /** Position in the Learn path, 1-based. */
  order: number;
};
