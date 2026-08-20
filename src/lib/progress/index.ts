import { localStorageProgressStore } from "@/lib/progress/localStorageStore";
import type { ProgressStore } from "@/types/progress";

/**
 * The one place the app resolves its progress store — Learn imports
 * `progressStore`, never a concrete implementation.
 *
 * Migration path, by design:
 *   localStorage  →  database
 * Adding Parent Accounts later means writing an API-backed `ProgressStore`
 * and changing the single assignment below. Because `ProgressStore` is already
 * async, no Learn component is rewritten — which is the whole point of routing
 * every read and write through this module from day one.
 */
export const progressStore: ProgressStore = localStorageProgressStore;

export type { LearnerProgress, LessonProgress, LessonStatus, ProgressStore } from "@/types/progress";
