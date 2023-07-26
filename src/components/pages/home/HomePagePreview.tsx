"use client";

import { useLiveQuery } from "next-sanity/preview";

import HomePage, { type HomePageProps } from "@/components/pages/home/HomePage";
import { homePageQuery } from "@/lib/queries";
import { HomePagePayload } from "@/lib/types";

function HomePagePreview({ data: initialData }: HomePageProps) {
    const [data] = useLiveQuery<HomePagePayload | null>(
        initialData,
        homePageQuery
    );

    if (!data) {
        return (
            <div>
                Please start editing your Home document to see the preview!
            </div>
        );
    }

    return <HomePage data={data} />;
}

export default HomePagePreview;
