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
      <div className="flex items-center gap-6 px-6 py-5 sm:px-10 lg:px-[72px] lg:py-[22px]">
        <Link href="/" className="shrink-0" aria-label="Edenic World — home">
          <Image
            src="/images/edenic-logo.png"
            alt="Edenic World"
            width={216}
            height={139}
            priority
            className="h-[92px] w-auto lg:h-[139px]"
          />
        </Link>

        {/* Sits slightly left of dead centre so it reads as balanced against
            the heavier action group on the right. */}
        <nav className="hidden flex-1 justify-center lg:flex xl:-translate-x-[40px]">
          <ul className="flex items-center gap-4">
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = href === activeHref;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={isActive ? "page" : undefined}
                    className={`block rounded-full px-[22px] py-[9px] text-[19.5px] leading-[21px] font-semibold transition-colors ${
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

        <div className="ml-auto flex shrink-0 items-center gap-[27px] lg:ml-0">
          <button
            type="button"
            aria-label="Search"
            className="grid size-[52px] place-items-center rounded-full border border-white/40 text-edenic-white transition-colors hover:bg-white/10 lg:size-[66px]"
          >
            <Search className="size-6" strokeWidth={2.25} aria-hidden="true" />
          </button>

          <Link
            href="/parents"
            className="flex h-[52px] items-center gap-3 rounded-full border border-white/40 px-6 text-[20px] font-semibold text-edenic-white transition-colors hover:bg-white/10 lg:h-[66px] lg:px-[44px]"
          >
            <UserRound className="size-6" strokeWidth={2.25} aria-hidden="true" />
            Parents
          </Link>
        </div>
      </div>
    </header>
  );
}
