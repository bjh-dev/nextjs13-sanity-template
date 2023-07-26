import ScrollUp from "@/components/ScollUp";
import { HomePagePayload } from "@/lib/types";

export interface HomePageProps {
    data: HomePagePayload;
}

function HomePage({ data }: HomePageProps) {
    const { title } = data;

    return (
        <>
            <h1 className="text-3xl">{title}</h1>
            {/* Workaround: scroll to top on route change */}
            <ScrollUp />
        </>
    );
}

export default HomePage;
