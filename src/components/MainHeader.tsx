import logoImage from "/assets/logo.svg";
import logoDarkImage from "/assets/logo-feed.svg";
import { Icon, Theme } from "./features/icon";
import NamedIcon from "./NamedIcon";

const buttonTransition = "transition-colors duration-300 hover:bg-slate-100/30";

function MainHeader({
    className,
    theme,
    activeTab,
    setActiveTab = () => {},
}: {
    className?: string;
    theme: Theme;
    activeTab?: number;
    setActiveTab?: (i: number) => void;
}) {
    return (
        <header
            className={
                "relative grid grid-cols-3 px-8 w-full z-10 font-semibold text-[14px] " +
                className
            }
        >
            <div className="flex flex-row items-center">
                <button
                    className={
                        "p-1 h-full border-b-[5px] border-solid " +
                        (activeTab !== undefined
                            ? [
                                  "rounded-none border-[#8DD3BB] ",
                                  "border-transparent ",
                              ][activeTab]
                            : "rounded-lg border-transparent ") +
                        buttonTransition
                    }
                    onClick={() => setActiveTab(0)}
                >
                    <NamedIcon
                        className="h-full"
                        iconIndex={Icon.Plane}
                        text="Find Flight"
                        themeIndex={theme}
                    />
                </button>
                <button
                    className={
                        "ml-8 p-1 border-b-[5px] border-solid h-full " +
                        (activeTab !== undefined
                            ? [
                                  "border-transparent ",
                                  "rounded-none border-[#8DD3BB] ",
                              ][activeTab]
                            : "rounded-lg border-transparent ") +
                        buttonTransition
                    }
                    onClick={() => setActiveTab(1)}
                >
                    <NamedIcon
                        className="h-full"
                        iconIndex={Icon.Bed}
                        text="Find Stays"
                        themeIndex={theme}
                    />
                </button>
            </div>
            <img
                className="m-auto"
                src={[logoImage, logoDarkImage][theme]}
                alt="logo"
            />
            <div className="ml-auto my-auto">
                <button
                    className={
                        "p-1 mr-8 rounded-md overflow-hidden " +
                        [buttonTransition, ""][theme]
                    }
                >
                    Login
                </button>
                <button
                    className={
                        "w-[6rem] h-12 rounded-lg " +
                        ["bg-white text-black", "bg-green-950 text-white"][
                            theme
                        ]
                    }
                >
                    Sign up
                </button>
            </div>
        </header>
    );
}

export default MainHeader;
