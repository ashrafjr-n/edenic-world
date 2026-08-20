import Image from "next/image";
import { Music2, Sparkles, Star } from "lucide-react";
import Container from "@/components/Container";
import HeroCurve from "@/components/HeroCurve";

/**
 * Same treatment as the Home hero (Hero.tsx): the artwork is laid in along
 * the bottom at full width, with a blurred copy of itself extending the sky
 * above it so the landscape stays uncropped at any hero height.
 */
export default function WatchHero() {
  return (
    <section className="relative isolate h-[56vh] max-h-[620px] min-h-[440px] w-full overflow-hidden">
      <Image
        src="/images/watch/watch-page.jpg"
        alt=""
        aria-hidden="true"
        fill
        priority
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
        className="absolute inset-x-0 bottom-[70px] w-full [mask-image:linear-gradient(to_bottom,transparent_0,#000_90px)]"
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-[46%] bg-gradient-to-b from-edenic-deep/95 via-edenic-deep/30 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-hero-glow opacity-35" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-edenic-bg/62 via-edenic-bg/12 to-transparent" />

      {/* Decorative stars & notes, scattered across the top band above the characters. */}
      <Star
        className="pointer-events-none absolute top-[12%] left-[34%] size-[18px] fill-edenic-gold text-edenic-gold opacity-80 drop-shadow-[0_2px_10px_rgba(206,146,79,0.5)]"
        aria-hidden="true"
      />
      <Music2
        className="pointer-events-none absolute top-[22%] left-[48%] size-5 text-edenic-soft-pink opacity-75 drop-shadow-[0_2px_10px_rgba(38,29,82,0.4)]"
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
        <div className="max-w-[620px] xl:pl-[44px]">
          <h1 className="font-display font-bold tracking-[-0.005em] drop-shadow-[0_6px_24px_rgba(38,29,82,0.45)]">
            <span className="block text-[clamp(38px,min(4.6vw,6.9vh),74px)] leading-[1.0] text-white">
              Watch
            </span>
            <span className="text-imagine-gradient -mt-[0.06em] block w-fit text-[clamp(38px,min(4.6vw,6.9vh),74px)] leading-[1.0]">
              &amp; Enjoy
            </span>
          </h1>

          <p className="mt-[14px] max-w-[16.5em] text-[clamp(15px,min(1.32vw,1.98vh),22px)] leading-[1.3] font-medium text-white">
            Sing, dance and learn with{" "}
            <span className="font-bold text-edenic-nova">Nova</span>,{" "}
            <span className="font-bold text-edenic-pinki">Pinki</span> &{" "}
            <span className="font-bold text-edenic-bloo">Bloo</span>!
          </p>
        </div>
      </Container>

      <HeroCurve />
    </section>
  );
}
