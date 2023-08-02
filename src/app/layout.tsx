import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
// eslint-disable-next-line camelcase
import { Inter, Roboto_Mono } from "next/font/google";
import React from "react";

if (process.env.NODE_ENV === "production") {
    // eslint-disable-next-line no-console, func-names, @typescript-eslint/no-empty-function
    console.log = function () {};
}

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const robotoMono = Roboto_Mono({
    subsets: ["latin"],
    variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
    generator: "Next.js",
    metadataBase: new URL(
        process.env.NODE_ENV === "production"
            ? "https://www.example.com"
            : "http://localhost:3000"
    ),
    applicationName: "",
    keywords: ["foo", "bar"],
    authors: [{ name: "Bryan Hickey", url: "https://www.bryanjhickey.com/" }],
    creator: "",
    publisher: "",
    themeColor: "#ffffff",
    manifest: "/manifest.json",
    icons: {
        icon: "/favicon-32x32.png",
        shortcut: "/favicon-32x32.png",
        apple: "/apple-touch-icon.png",
    },
    viewport: {
        width: "device-width",
        initialScale: 1,
        maximumScale: 1,
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`${inter.variable} ${robotoMono.variable} font-sans`}
        >
            <body>
                {children}
                <Analytics />
            </body>
        </html>
    );
}
