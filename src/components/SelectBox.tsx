import { ReactNode } from "react";

function SelectBox({
    children,
    className,
    style = {},
    name,
    justify = true,
}: {
    children?: ReactNode;
    className?: string;
    style?: object;
    name: string;
    justify?: boolean;
}) {
    return (
        <div
            className={
                `relative flex flex-row ${justify ? "justify-between " : ""}items-center px-3 border-2 border-solid border-gray-400 rounded-sm text-gray-800 ` +
                className
            }
            style={style}
        >
            <p className="absolute -top-3 left-2 px-1 bg-white text-sm font-normal">
                {name}
            </p>
            {children}
        </div>
    );
}

export default SelectBox;
