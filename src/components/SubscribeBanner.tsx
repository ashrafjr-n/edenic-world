import Link from "next/link";
import { Bell, Tv2 } from "lucide-react";

export default function SubscribeBanner() {
  return (
    <div className="shadow-edenic relative overflow-hidden rounded-[28px] bg-gradient-to-r from-edenic-deep-purple via-edenic-purple to-edenic-bright-purple px-[clamp(24px,4vw,48px)] py-[clamp(24px,3.6vh,38px)]">
      <div className="pointer-events-none absolute inset-0 bg-hero-glow opacity-25" />

      <div className="relative flex flex-col items-center gap-[22px] text-center sm:flex-row sm:text-left">
        <span className="grid size-[64px] shrink-0 place-items-center rounded-[20px] bg-white/12 text-edenic-peach ring-1 ring-white/20">
          <Tv2 className="size-8" aria-hidden="true" />
        </span>

        <div className="flex-1">
          <h2 className="font-display text-[22px] font-bold text-white sm:text-[26px]">
            New videos every week!
          </h2>
          <p className="mt-[4px] text-[15px] font-medium text-white/80">
            Don&apos;t miss the fun, subscribe and stay tuned.
          </p>
        </div>

        <Link
          href="#"
          className="shadow-edenic-cta inline-flex h-[54px] shrink-0 items-center gap-[10px] rounded-full border-2 border-[#d9a9f6] bg-gradient-to-b from-[#a067ec] to-[#8449da] px-[30px] text-[16px] font-bold text-white transition-transform hover:scale-[1.03]"
        >
          <Bell className="size-[18px] fill-white text-white" aria-hidden="true" />
          Subscribe
        </Link>
      </div>
    </div>
  );
}
