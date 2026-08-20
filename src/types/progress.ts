import type { Id } from "@/types/content";

export type LessonStatus = "not-started" | "in-progress" | "completed";

export type LessonProgress = {
  lessonId: Id;
  status: LessonStatus;
  /** ISO 8601 — strings, not `Date`, so a record survives JSON round-tripping
   *  through localStorage and an API response identically. */
  updatedAt: string;
  completedAt?: string;
};

export type LearnerProgress = {
  /**
   * Anonymous and device-local today. When Parent Accounts land this becomes
   * the account's child id and the very same records move to the database
   * unchanged — that is why progress is keyed by learner from day one, even
   * though there is only ever one local learner right now.
   */
  learnerId: Id;
  lessons: Record<Id, LessonProgress>;
  updatedAt: string;
};

/**
 * How the app reads and writes progress.
 *
 * Every method is async **on purpose**. The localStorage implementation
 * resolves immediately and gains nothing from it — but Learn gets written
 * against promises from the start, so swapping in a database/API store later
 * is a one-line change in `src/lib/progress/index.ts` and Learn is not
 * rewritten. A synchronous interface today would force exactly the rebuild
 * we are trying to avoid.
 */
export type ProgressStore = {
  getProgress(): Promise<LearnerProgress>;
  getLessonProgress(lessonId: Id): Promise<LessonProgress | undefined>;
  setLessonStatus(lessonId: Id, status: LessonStatus): Promise<LearnerProgress>;
  reset(): Promise<void>;
};
