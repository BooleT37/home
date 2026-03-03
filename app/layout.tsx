import type { Metadata } from "next";
import { Raleway, Patrick_Hand_SC } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const patrickHandSC = Patrick_Hand_SC({
  variable: "--font-patrick-hand-sc",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Alexey Levin",
  description: "Alexey Levin — CV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${patrickHandSC.variable} antialiased`}
        style={{ fontFamily: "var(--font-raleway)" }}
      >
        {children}
      </body>
    </html>
  );
}
