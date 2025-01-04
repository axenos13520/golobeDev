import { ReactNode } from "react";

function SearchFilter({
    name,
    children,
}: {
    name: string;
    children?: ReactNode;
}) {
    return (
        <div>
            <p className="mb-5 min-w-full font-semibold text-green-950">
                {name}
            </p>
            {children}
        </div>
    );
}

export default SearchFilter;
