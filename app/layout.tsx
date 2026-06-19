import localFont from "next/font/local";

import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";

import { cn } from "@/lib/utils";

import { SessionProvider } from "next-auth/react";

import { auth } from "@/auth";

const inter = localFont({
  src: "./fonts/InterVF.ttf",
  variable: "--font-inter",
  weight: "100 200 300 400 500 600 700 800 900",
});

const spaceGrotesk = localFont({
  src: "./fonts/SpaceGroteskVF.ttf",
  variable: "--font-space-grotesk",
  weight: "300 400 500 600 700",
});

export const metadata: Metadata = {
  title: "DevFlow",
  description:
    "A community-driven platform for asking and answering programming questions",
  icons: {
    icon: "/images/site-logo.svg",
  },
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const session = await auth();

  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        inter.className,
        spaceGrotesk.variable,
        "font-sans",
        inter.variable
      )}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <SessionProvider session={session}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <Toaster />
        </SessionProvider>
      </body>
    </html>
  );
};
export default RootLayout;
