import iconPlane from "./assets/icon-plane.svg";
import iconBed from "./assets/icon-bed.svg";
import iconPlaneBlack from "./assets/icon-plane-black.svg";
import iconBedBlack from "./assets/icon-bed-black.svg";
import { Icon, Theme } from "./features/icon";

const icons = [iconPlane, iconBed, iconPlaneBlack, iconBedBlack];

function NamedIcon({
    iconIndex,
    text,
    themeIndex,
    margin = 4,
}: {
    iconIndex: Icon;
    text: string;
    themeIndex: Theme;
    margin?: number;
}) {
    return (
        <div className="flex flex-row items-center">
            <img
                className="w-[24px] h-[24px]"
                style={{ marginRight: `${margin}px` }}
                src={icons[iconIndex + themeIndex * 2]}
                alt=""
            />
            <p
                className={
                    themeIndex === Theme.White ? "text-white" : "text-black"
                }
            >
                {text}
            </p>
        </div>
    );
}

export default NamedIcon;
