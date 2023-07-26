import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import React from "react";

if (process.env.NODE_ENV === "production") {
    // eslint-disable-next-line no-console, func-names, @typescript-eslint/no-empty-function
    console.log = function () {};
}

export const metadata: Metadata = {
    generator: "Next.js",
    metadataBase: new URL(
        process.env.NODE_ENV === "production"
            ? "https://www.lemondigital.com.au"
            : "http://localhost:3000"
    ),
    applicationName: "Lemon Digital",
    keywords: [
        "church website design",
        "church website builder",
        "church website templates",
        "church website hosting",
        "church website design company",
        "church website design inspiration",
        "church website",
        "christian web developer",
        "church communications",
        "church branding",
        "church marketing",
        "church web design",
        "Church digital solutions",
        "Faith-based web design",
        "Christian organization branding",
        "Church marketing strategies",
        "Religious website development",
        "Outreach and engagement tools",
        "Ministry social media management",
        "Online donation platforms",
        "Sermon podcasting services",
        "Inspirational content creation",
        "Church event promotion",
        "Congregation app development",
        "Custom church website designs",
        "Faith community SEO services",
        "Religious e-commerce solutions",
        "Church graphic design services",
        "Virtual worship experiences",
        "Faith-based email marketing",
        "Christian video production",
        "Online prayer request systems",
    ],
    authors: [{ name: "Bryan Hickey", url: "https://www.bryanjhickey.com/" }],
    creator: "Bryan Hickey",
    publisher: "Lemon Digital",
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
        <html lang="en">
            <body>
                {children}
                <Analytics />
            </body>
        </html>
    );
}
