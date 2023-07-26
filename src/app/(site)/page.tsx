import { Metadata } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

import HomePage from "@/components/pages/home/HomePage";
import HomePagePreview from "@/components/pages/home/HomePagePreview";
import { homePageQuery, settingsQuery } from "@/lib/queries";
import { HomePagePayload, SettingsPayload } from "@/lib/types";
import { readToken } from "@/sanity/lib/api";
import { getClient } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
    const preview = draftMode().isEnabled
        ? { token: readToken as string }
        : undefined;
    const client = getClient(preview);

    const [settings, home] = await Promise.all([
        client.fetch<SettingsPayload>(settingsQuery),
        client.fetch<HomePagePayload>(homePageQuery),
    ]);

    const openGraphImages = home.seo.image
        ? [
              {
                  url: urlForImage(home.seo.image).width(800).height(600).url(),
                  width: 800,
                  height: 600,
              },
              {
                  // Facebook recommended size
                  url: urlForImage(home.seo.image)
                      .width(1200)
                      .height(630)
                      .url(),
                  width: 1200,
                  height: 630,
              },
              {
                  // Square 1:1
                  url: urlForImage(home.seo.image).width(600).height(600).url(),
                  width: 600,
                  height: 600,
              },
          ]
        : [];

    return {
        title: home.seo.title || home.title || "",
        description: home.seo.description || "",
        openGraph: {
            title: home.seo.title || home.title || "",
            description: home.seo.description || "",
            url:
                process.env.NODE_ENV === "production"
                    ? `${settings?.siteUrl}`
                    : `http://localhost:3000/`,
            siteName: settings.siteTitle || "",
            images: openGraphImages || [],
            locale: "en-AU",
            type: "website",
        },
    };
}
const HomeIndexRoute = async () => {
    const preview = draftMode().isEnabled
        ? { token: readToken as string }
        : undefined;
    const client = getClient(preview);
    const [home] = await Promise.all([
        client.fetch<HomePagePayload>(homePageQuery),
    ]);

    if (!home && !preview) {
        notFound();
    }

    return preview ? <HomePagePreview data={home} /> : <HomePage data={home} />;
};

export default HomeIndexRoute;
