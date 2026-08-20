import { ACTIVITIES, GAMES, LESSONS, TOPICS } from "@/data/content";
import { FEATURED_VIDEO, VIDEOS, VIDEO_FILTERS } from "@/data/videos";
import type {
  Activity,
  Game,
  Id,
  Lesson,
  Topic,
  Video,
  VideoFilter,
} from "@/types/content";

/**
 * The single way the app reads content. Pages call these; components never
 * import a data module themselves.
 *
 * Everything is synchronous today because the content is static. When it moves
 * to a CMS or an API, only this file changes — and the selectors keep their
 * names, so pages keep working.
 */

const byOrder = (a: { order: number }, b: { order: number }) => a.order - b.order;

/* --- Topics ------------------------------------------------------------- */

export function getTopics(): Topic[] {
  return [...TOPICS].sort(byOrder);
}

export function getTopicById(topicId: Id): Topic | undefined {
  return TOPICS.find((topic) => topic.id === topicId);
}

export function getTopicBySlug(slug: string): Topic | undefined {
  return TOPICS.find((topic) => topic.slug === slug);
}

/* --- A topic's children ------------------------------------------------- */

export function getLessonsForTopic(topicId: Id): Lesson[] {
  return LESSONS.filter((lesson) => lesson.topicId === topicId).sort(byOrder);
}

export function getActivitiesForTopic(topicId: Id): Activity[] {
  return ACTIVITIES.filter((activity) => activity.topicId === topicId);
}

export function getGamesForTopic(topicId: Id): Game[] {
  return GAMES.filter((game) => game.topicId === topicId);
}

export function getVideosForTopic(topicId: Id): Video[] {
  return VIDEOS.filter((video) => video.topicId === topicId);
}

/* --- Lessons ------------------------------------------------------------ */

export function getLessonById(lessonId: Id): Lesson | undefined {
  return LESSONS.find((lesson) => lesson.id === lessonId);
}

/* --- Videos ------------------------------------------------------------- */

export function getVideos(): Video[] {
  return VIDEOS;
}

export function getVideoById(videoId: Id): Video | undefined {
  return VIDEOS.find((video) => video.id === videoId);
}

export function getFeaturedVideo(): Video {
  return FEATURED_VIDEO;
}

export function getVideoFilters(): VideoFilter[] {
  return VIDEO_FILTERS;
}
