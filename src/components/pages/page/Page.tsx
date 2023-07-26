import ScrollUp from "@/components/ScollUp";
import { PagePayload } from "@/lib/types";

export interface PageProps {
    data: PagePayload;
}

function HomePage({ data }: PageProps) {
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
