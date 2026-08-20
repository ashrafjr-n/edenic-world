export type VideoCategory = "songs" | "learning" | "stories" | "fun";

export type Video = {
  id: string;
  title: string;
  description: string;
  category: VideoCategory;
  duration: string;
  /** Tailwind gradient stops for the placeholder thumbnail, until real
   *  thumbnails/YouTube data replace it. */
  thumbnail: string;
};

export const FEATURED_VIDEO: Video = {
  id: "lets-count-with-friends",
  title: "Let's Count with Friends!",
  description: "Learn numbers in the most fun way!",
  category: "learning",
  duration: "03:15",
  thumbnail: "from-edenic-bright-purple via-edenic-pink to-edenic-coral",
};

export const VIDEOS: Video[] = [
  {
    id: "counting-is-fun",
    title: "Counting is Fun!",
    description: "Learn numbers",
    category: "songs",
    duration: "02:45",
    thumbnail: "from-edenic-bright-blue via-edenic-purple to-edenic-bright-purple",
  },
  {
    id: "lets-learn-abc",
    title: "Let's Learn ABC",
    description: "Phonics & letters",
    category: "learning",
    duration: "02:30",
    thumbnail: "from-edenic-coral via-edenic-pink to-edenic-bright-pink",
  },
  {
    id: "twinkle-twinkle",
    title: "Twinkle Twinkle",
    description: "Nursery Rhymes",
    category: "songs",
    duration: "03:02",
    thumbnail: "from-edenic-lavender via-edenic-bright-purple to-edenic-blue",
  },
  {
    id: "colors-everywhere",
    title: "Colors Everywhere",
    description: "Learn colors",
    category: "songs",
    duration: "02:20",
    thumbnail: "from-edenic-gold via-edenic-coral to-edenic-bright-pink",
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
