export type VideoCategory = "songs" | "learning" | "stories" | "fun";

export type Video = {
  id: string;
  title: string;
  description: string;
  category: VideoCategory;
  /** Unknown until real videos are timed/synced from YouTube — the duration
   *  badge only renders when this is set. */
  duration?: string;
  /** Tailwind gradient stops shown behind the thumbnail while it loads, and
   *  as the whole thumbnail for videos with no `youtubeId` yet. */
  thumbnail: string;
  /** YouTube video ID. When set, the thumbnail is the real YouTube thumbnail
   *  and the card plays an embedded player in place on click. Videos without
   *  one stay placeholder-only. */
  youtubeId?: string;
};

export const FEATURED_VIDEO: Video = {
  id: "guess-what-the-story-is",
  title: "Guess What the Story Is?",
  description: "Follow us to enjoy every new adventure. Our children deserve the best.",
  category: "stories",
  thumbnail: "from-edenic-bright-purple via-edenic-pink to-edenic-coral",
  youtubeId: "yDeZDCC4lEU",
};

export const VIDEOS: Video[] = [
  {
    id: "nova-i-can-build-it",
    title: "NOVA I Can Build It!",
    description: "Building & creativity",
    category: "learning",
    thumbnail: "from-edenic-bright-blue via-edenic-purple to-edenic-bright-purple",
    youtubeId: "ZLRxvTSUZCw",
  },
  {
    id: "bloo-i-make-a-mess-then-i-clean",
    title: "BLOO I Make a Mess, Then I Clean!",
    description: "Tidying up with Bloo",
    category: "learning",
    thumbnail: "from-edenic-coral via-edenic-pink to-edenic-bright-pink",
    youtubeId: "ssSUXfHqA5E",
  },
  {
    id: "pinki-is-here",
    title: "PINKI IS HERE",
    description: "Say hello to Pinki",
    category: "fun",
    thumbnail: "from-edenic-lavender via-edenic-bright-purple to-edenic-blue",
    youtubeId: "uZCooswKCB4",
  },
  {
    id: "nova-smile",
    title: "NOVA SMILE",
    description: "A happy moment with Nova",
    category: "fun",
    thumbnail: "from-edenic-gold via-edenic-coral to-edenic-bright-pink",
    youtubeId: "zLNNx-fgd-Y",
  },
  {
    id: "shapes-adventure",
    title: "Shapes Adventure",
    description: "Learn shapes",
    category: "learning",
    duration: "02:50",
    thumbnail: "from-edenic-cyan via-edenic-bright-blue to-edenic-purple",
  },
  {
    id: "dance-with-friends",
    title: "Dance with Friends",
    description: "Fun songs",
    category: "fun",
    duration: "03:10",
    thumbnail: "from-edenic-bright-pink via-edenic-lavender to-edenic-bright-purple",
  },
];

export const VIDEO_FILTERS: { label: string; value: "all" | VideoCategory }[] = [
  { label: "All", value: "all" },
  { label: "Songs", value: "songs" },
  { label: "Learning", value: "learning" },
  { label: "Stories", value: "stories" },
  { label: "Fun Time", value: "fun" },
];
