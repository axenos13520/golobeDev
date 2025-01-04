import SelectBox from "./SelectBox";
import iconFromTo from "/assets/icon-from-to.svg";
import iconArrow from "/assets/icon-arrow.svg";
import iconBed from "/assets/icon-bed-black.svg";
import iconCalendar from "/assets/icon-calendar.svg";
import iconPerson from "/assets/icon-person.svg";
import iconZalupa from "/assets/icon-zalupa.svg";
import NamedIcon from "./NamedIcon";
import { Icon, Theme } from "./features/icon";
import { useEffect, useState } from "react";
import SearchButton from "./SearchButton";

const names = [
    ["From - To", "Trip", "Depart - Return", "Passenger - Class"],
    ["Enter Destination", "Check In", "Check Out", "Rooms & Guests"],
];

const sizes = [
    [27, 13, 27, 27],
    [33, 21, 21, 21],
];

function SearchForm({
    className,
    tabs,
    tab,
    inline = false,
    onClick,
}: {
    className?: string;
    tabs: boolean;
    inline?: boolean;
    tab: number;
    onClick?: () => void;
}) {
    const [activeTab, setActiveTab] = useState(tab);

    useEffect(() => setActiveTab(tab), [tab]);

    return (
        <div className={className}>
            {inline ? (
                ""
            ) : tabs ? (
                <div className="mb-12 flex flex-row font-semibold">
                    <button
                        className={
                            "transition-colors duration-300 border-b-4 border-solid " +
                            (activeTab === 1
                                ? "border-transparent"
                                : "border-emerald-200/70")
                        }
                        onClick={() => setActiveTab(0)}
                    >
                        <NamedIcon
                            iconIndex={Icon.Plane}
                            text="Flights"
                            themeIndex={Theme.Black}
                            margin={8}
                        />
                    </button>
                    <div className="mx-8 min-h-12 w-[1px] bg-slate-200"></div>
                    <button
                        className={
                            "transition-colors duration-300 border-b-4 border-solid " +
                            (activeTab === 0
                                ? "border-transparent"
                                : "border-emerald-200/70")
                        }
                        onClick={() => setActiveTab(1)}
                    >
                        <NamedIcon
                            iconIndex={Icon.Bed}
                            text="Stays"
                            themeIndex={Theme.Black}
                            margin={8}
                        />
                    </button>
                </div>
            ) : (
                <h3 className="mb-8 font-semibold text-xl text-green-950">
                    Where are you flying?
                </h3>
            )}
            <div>
                <div className="flex flex-row">
                    <div className="w-full flex flex-row justify-between h-14">
                        <SelectBox
                            className="ease-out transition-all duration-300 h-full"
                            style={{ width: `${sizes[activeTab][0]}%` }}
                            name={names[activeTab][0]}
                            justify={activeTab === 0}
                        >
                            {
                                [
                                    [
                                        <p>Lahore - Karachi</p>,
                                        <img src={iconFromTo} alt="" />,
                                    ],
                                    [
                                        <img
                                            className="mr-3"
                                            src={iconBed}
                                            alt=""
                                        />,
                                        <p>Istanbul, Turkey</p>,
                                    ],
                                ][activeTab]
                            }
                        </SelectBox>
                        <SelectBox
                            className="ease-out transition-all duration-300 h-full"
                            style={{ width: `${sizes[activeTab][1]}%` }}
                            name={names[activeTab][1]}
                        >
                            {
                                [
                                    [
                                        <p>Return</p>,
                                        <img src={iconArrow} alt="" />,
                                    ],
                                    [
                                        <p>Fri 12/2</p>,
                                        <img src={iconCalendar} alt="" />,
                                    ],
                                ][activeTab]
                            }
                        </SelectBox>
                        <SelectBox
                            className="ease-out transition-all duration-300 h-full"
                            style={{ width: `${sizes[activeTab][2]}%` }}
                            name={names[activeTab][2]}
                        >
                            {
                                [
                                    <p>07 Nov 22 - 13 Nov 22</p>,
                                    [
                                        <p>Sun 12/4</p>,
                                        <img src={iconCalendar} alt="" />,
                                    ],
                                ][activeTab]
                            }
                        </SelectBox>
                        <SelectBox
                            className="ease-out transition-all duration-300 h-full"
                            style={{ width: `${sizes[activeTab][3]}%` }}
                            name={names[activeTab][3]}
                        >
                            {
                                [
                                    <p>1 Passenger, Economy</p>,
                                    [
                                        <div className="flex flex-row items-center">
                                            <img
                                                className="mr-3"
                                                src={iconPerson}
                                                alt=""
                                            />
                                            <p>1 room, 2 guests</p>
                                        </div>,
                                        <img src={iconArrow} alt="" />,
                                    ],
                                ][activeTab]
                            }
                        </SelectBox>
                    </div>

                    {inline ? (
                        <button className="ml-6 min-w-14 bg-[#8DD3BB] rounded-md">
                            <img className="m-auto" src={iconZalupa} alt="" />
                        </button>
                    ) : (
                        ""
                    )}
                </div>
                {inline ? (
                    ""
                ) : (
                    <div className="flex flex-row mt-8 ml-auto w-max">
                        <button className="flex flex-row items-center mr-6 px-4 transition-colors duration-300 hover:bg-slate-300/50 rounded-md">
                            <p className="mr-2 text-xl">+</p>
                            <p>Add Promo Code</p>
                        </button>
                        <SearchButton
                            type={activeTab}
                            name={["Show Flights", "Show Places"][activeTab]}
                            onClick={onClick}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default SearchForm;
