import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import "./globals.css";

/* Display face — chunky, rounded, used for headlines and card titles. */
const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

/* UI face — nav, body copy and buttons. */
const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Edenic World",
  description:
    "Step into a magical world with Nova, Pinki & Bloo, where learning is an adventure!",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
