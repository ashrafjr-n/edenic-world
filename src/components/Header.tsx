import Image from "next/image";
import Link from "next/link";
import { Search, UserRound } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Watch", href: "/watch" },
  { label: "Learn", href: "/learn" },
  { label: "Play", href: "/play" },
  { label: "Characters", href: "/characters" },
  { label: "About", href: "/about" },
] as const;

type HeaderProps = {
  /** href of the nav link rendered in the active (white pill) state. */
  activeHref?: string;
};

/**
 * Site header. Sits transparently on top of the hero art — it never paints its
 * own background, so the artwork behind it stays uninterrupted.
 */
export default function Header({ activeHref = "/" }: HeaderProps) {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="flex items-center gap-6 px-6 py-[clamp(8px,1.1vh,14px)] sm:px-10 lg:px-[clamp(28px,3.5vw,64px)]">
        <Link href="/" className="shrink-0" aria-label="Edenic World — home">
          <Image
            src="/images/edenic-logo.png"
            alt="Edenic World"
            width={168}
            height={108}
            priority
            className="h-[clamp(52px,8.7vh,108px)] w-auto"
          />
        </Link>

        {/* Sits slightly left of dead centre so it reads as balanced against
            the heavier action group on the right. */}
        <nav className="hidden flex-1 justify-center lg:flex xl:-translate-x-[22px]">
          <ul className="flex items-center gap-4">
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = href === activeHref;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={isActive ? "page" : undefined}
                    className={`block rounded-full px-[18px] py-[8px] text-[18px] leading-[20px] font-semibold transition-colors ${
                      isActive
                        ? "bg-white text-edenic-deep"
                        : "text-edenic-white hover:text-white"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-[22px] lg:ml-0">
          <button
            type="button"
            aria-label="Search"
            className="grid size-[44px] place-items-center rounded-full border border-white/40 text-edenic-white transition-colors hover:bg-white/10 lg:size-[54px]"
          >
            <Search className="size-5" strokeWidth={2.25} aria-hidden="true" />
          </button>

          <Link
            href="/parents"
            className="flex h-[44px] items-center gap-[10px] rounded-full border border-white/40 px-5 text-[18px] font-semibold text-edenic-white transition-colors hover:bg-white/10 lg:h-[54px] lg:px-[30px]"
          >
            <UserRound className="size-5" strokeWidth={2.25} aria-hidden="true" />
            Parents
          </Link>
        </div>
      </div>
    </header>
  );
}
