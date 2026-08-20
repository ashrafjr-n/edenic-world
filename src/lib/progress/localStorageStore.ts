import type { Id } from "@/types/content";
import type {
  LearnerProgress,
  LessonProgress,
  LessonStatus,
  ProgressStore,
} from "@/types/progress";

/** Versioned so a future shape change can migrate rather than silently break. */
const STORAGE_KEY = "edenic:progress:v1";

/** The one anonymous learner on this device, until Parent Accounts exist. */
const LOCAL_LEARNER_ID = "local-learner";

function emptyProgress(): LearnerProgress {
  return {
    learnerId: LOCAL_LEARNER_ID,
    lessons: {},
    updatedAt: new Date().toISOString(),
  };
}

/**
 * Reads and revives stored progress. Returns empty progress rather than
 * throwing when storage is unavailable (server render, private mode) or the
 * stored value is corrupt — losing progress is bad, but crashing Learn on a
 * child mid-lesson is worse.
 */
function read(): LearnerProgress {
  if (typeof window === "undefined") return emptyProgress();

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyProgress();

    const parsed: unknown = JSON.parse(raw);
    if (
      typeof parsed !== "object" ||
      parsed === null ||
      typeof (parsed as LearnerProgress).lessons !== "object" ||
      (parsed as LearnerProgress).lessons === null
    ) {
      return emptyProgress();
    }

    return parsed as LearnerProgress;
  } catch {
    return emptyProgress();
  }
}

function write(progress: LearnerProgress): LearnerProgress {
  if (typeof window === "undefined") return progress;

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // Quota exceeded or storage blocked — keep the in-memory value so the
    // current session still behaves correctly.
  }

  return progress;
}

export const localStorageProgressStore: ProgressStore = {
  async getProgress(): Promise<LearnerProgress> {
    return read();
  },

  async getLessonProgress(lessonId: Id): Promise<LessonProgress | undefined> {
    return read().lessons[lessonId];
  },

  async setLessonStatus(lessonId: Id, status: LessonStatus): Promise<LearnerProgress> {
    const now = new Date().toISOString();
    const current = read();
    const existing = current.lessons[lessonId];

    const updated: LessonProgress = {
      lessonId,
      status,
      updatedAt: now,
      // Keep the original completion time if it was already completed once.
      completedAt:
        status === "completed" ? (existing?.completedAt ?? now) : existing?.completedAt,
    };

    return write({
      ...current,
      lessons: { ...current.lessons, [lessonId]: updated },
      updatedAt: now,
    });
  },

  async reset(): Promise<void> {
    if (typeof window === "undefined") return;

    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Nothing useful to do — the next read falls back to empty progress.
    }
  },
};
