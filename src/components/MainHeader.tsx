import logoImage from "/assets/logo.svg";
import { Icon, Theme } from "./features/icon";
import NamedIcon from "./NamedIcon";

const buttonTransition = "transition-colors duration-300 hover:bg-slate-100/30";

function MainHeader() {
    return (
        <header className="relative grid grid-cols-3 px-8 pt-6 w-full z-10 font-semibold text-[14px]">
            <div className="flex flex-row items-center">
                <button className={"p-1 rounded-lg " + buttonTransition}>
                    <NamedIcon
                        {...{
                            iconIndex: Icon.Plane,
                            text: "Find Flight",
                            themeIndex: Theme.White,
                        }}
                    />
                </button>
                <button className={"ml-8 p-1 rounded-lg " + buttonTransition}>
                    <NamedIcon
                        {...{
                            iconIndex: Icon.Bed,
                            text: "Find Stays",
                            themeIndex: Theme.White,
                        }}
                    />
                </button>
            </div>
            <img className="m-auto" src={logoImage} alt="logo" />
            <div className="ml-auto">
                <button
                    className={
                        "p-1 mr-8 rounded-md overflow-hidden" + buttonTransition
                    }
                >
                    Login
                </button>
                <button
                    className={"w-[6rem] h-12 bg-white rounded-lg text-black"}
                >
                    Sign up
                </button>
            </div>
        </header>
    );
}

export default MainHeader;
