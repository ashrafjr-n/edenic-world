import Image from "next/image";
import Link from "next/link";
import { Bell } from "lucide-react";

export default function SubscribeBanner() {
  return (
    <div className="bg-card-watch shadow-edenic relative overflow-hidden rounded-[28px] px-[clamp(24px,4vw,48px)] py-[clamp(24px,3.6vh,38px)]">
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent from-35% to-edenic-bg/30" />

      {/* Art bleeds off the right edge and dissolves into the surface — same
          treatment as the Home page's Watch card. */}
      <Image
        src="/images/home-CTA/watch.jpg"
        alt=""
        aria-hidden="true"
        width={600}
        height={490}
        className="card-art-mask pointer-events-none absolute right-0 bottom-0 h-[clamp(110px,20vh,170px)] w-auto max-w-none object-cover"
      />

      <div className="relative flex flex-col items-start gap-[16px] sm:flex-row sm:items-center sm:gap-[28px]">
        <div>
          <h2 className="font-display text-[22px] font-bold text-white sm:text-[26px]">
            New videos every week!
          </h2>
          <p className="mt-[4px] text-[15px] font-medium text-white/80">
            Don&apos;t miss the fun, subscribe and stay tuned.
          </p>
        </div>

        <Link
          href="#"
          className="shadow-edenic-cta group inline-flex h-[54px] shrink-0 items-center gap-[10px] rounded-full border-2 border-[#d9a9f6] bg-gradient-to-b from-[#a067ec] to-[#8449da] px-[30px] text-[16px] font-bold text-white transition-transform hover:scale-[1.03]"
        >
          <Bell
            className="size-[18px] fill-white text-white group-hover:animate-icon-wiggle"
            aria-hidden="true"
          />
          Subscribe
        </Link>
      </div>
    </div>
  );
}
