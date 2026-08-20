import Image from "next/image";
import Link from "next/link";
import { Search, UserRound } from "lucide-react";

/** `ready: false` renders the item as a dimmed, non-clickable label instead of
 *  a link — the page doesn't exist yet, so a real `href` would just 404. Flip
 *  it to `true` the moment that page ships. */
const NAV_LINKS = [
  { label: "Home", href: "/", ready: true },
  { label: "Watch", href: "/watch", ready: true },
  { label: "Learn", href: "/learn", ready: false },
  { label: "Play", href: "/play", ready: false },
  { label: "Characters", href: "/characters", ready: false },
  { label: "About", href: "/about", ready: false },
] as const;

const PARENTS_READY = false;

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
            {NAV_LINKS.map(({ label, href, ready }) => {
              const isActive = href === activeHref;

              if (!ready) {
                return (
                  <li key={href}>
                    <span
                      aria-disabled="true"
                      title="Coming soon"
                      className="block cursor-not-allowed rounded-full px-[18px] py-[8px] text-[18px] leading-[20px] font-semibold text-edenic-white/35"
                    >
                      {label}
                    </span>
                  </li>
                );
              }

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

          {PARENTS_READY ? (
            <Link
              href="/parents"
              className="flex h-[44px] items-center gap-[10px] rounded-full border border-white/40 px-5 text-[18px] font-semibold text-edenic-white transition-colors hover:bg-white/10 lg:h-[54px] lg:px-[30px]"
            >
              <UserRound className="size-5" strokeWidth={2.25} aria-hidden="true" />
              Parents
            </Link>
          ) : (
            <span
              aria-disabled="true"
              title="Coming soon"
              className="flex h-[44px] cursor-not-allowed items-center gap-[10px] rounded-full border border-white/15 px-5 text-[18px] font-semibold text-edenic-white/35 lg:h-[54px] lg:px-[30px]"
            >
              <UserRound className="size-5" strokeWidth={2.25} aria-hidden="true" />
              Parents
            </span>
          )}
        </div>
      </div>
    </header>
  );
}
