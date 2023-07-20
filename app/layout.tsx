import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";

import { Providers } from "@/providers";

const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
    title: "Github profiles",
    description: "Search profile vis GitHub API",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={`spaceMono.className bg-midGray dark:bg-background`}>
            <Providers>
                {children}
            </Providers>
        </body>
        </html>
    );
}
