import Image from "next/image";
import { Music2, Sparkles, Star } from "lucide-react";
import Container from "@/components/Container";

/**
 * Same treatment as the Home hero (Hero.tsx): the artwork is laid in along
 * the bottom at full width, with a blurred copy of itself extending the sky
 * above it so the landscape stays uncropped at any hero height. Unlike the
 * Home hero, the bottom edge is a plain gradient fade into `edenic-bg`
 * rather than the wave shape — no dividing line at all, curved or straight.
 */
export default function WatchHero() {
  return (
    <section className="relative isolate h-[56vh] max-h-[620px] min-h-[440px] w-full overflow-hidden">
      <Image
        src="/images/watch/watch-page.jpg"
        alt=""
        aria-hidden="true"
        fill
        loading="eager"
        sizes="100vw"
        className="scale-125 object-cover object-top blur-[80px]"
      />
      <Image
        src="/images/watch/watch-page.jpg"
        alt="Nova, Pinki and Bloo singing and dancing together"
        width={1752}
        height={608}
        priority
        sizes="100vw"
        className="absolute inset-x-0 bottom-0 w-full [mask-image:linear-gradient(to_bottom,transparent_0,#000_90px)]"
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-[46%] bg-gradient-to-b from-edenic-deep/95 via-edenic-deep/30 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-hero-glow opacity-35" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-edenic-bg/62 via-edenic-bg/12 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[38%] bg-gradient-to-b from-transparent to-edenic-bg" />

      {/* Decorative stars & notes, scattered across the top band above the characters. */}
      <Star
        className="drop-shadow-edenic-gold pointer-events-none absolute top-[12%] left-[34%] size-[18px] fill-edenic-gold text-edenic-gold opacity-80"
        aria-hidden="true"
      />
      <Music2
        className="drop-shadow-edenic-deep pointer-events-none absolute top-[22%] left-[48%] size-5 text-edenic-soft-pink opacity-75"
        aria-hidden="true"
      />
      <Star
        className="pointer-events-none absolute top-[15%] left-[63%] size-[14px] fill-white text-white opacity-70"
        aria-hidden="true"
      />
      <Sparkles
        className="pointer-events-none absolute top-[10%] right-[8%] size-5 text-edenic-cyan opacity-70"
        aria-hidden="true"
      />

      <Container className="relative z-20 flex h-full flex-col justify-center">
        <div className="max-w-[700px] xl:pl-[44px]">
          <h1 className="font-display drop-shadow-edenic-heading text-[clamp(36px,min(5vw,7.4vh),80px)] leading-[1.05] font-bold tracking-[-0.005em]">
            <span className="text-white">Watch </span>
            <span className="text-imagine-gradient">&amp; Enjoy</span>
          </h1>

          <p className="mt-[16px] text-[clamp(17px,min(1.6vw,2.4vh),26px)] leading-[1.35] font-medium text-white">
            <span className="block">Sing, dance and learn with</span>
            <span className="block">
              <span className="font-bold text-edenic-nova">Nova</span>,{" "}
              <span className="font-bold text-edenic-pinki">Pinki</span> &{" "}
              <span className="font-bold text-edenic-bloo">Bloo</span>!
            </span>
          </p>
        </div>
      </Container>
    </section>
  );
}
