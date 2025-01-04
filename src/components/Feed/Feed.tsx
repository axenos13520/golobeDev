import { Theme } from "../features/icon";
import MainHeader from "../MainHeader";
import Flights from "./Flights";
import SearchForm from "../SearchForm";
import flightsBackground from "/assets/feed-flights-background.jpg";
import staysBackground from "/assets/feed-stays-background.jpg";
import Stays from "./Stays";
import Footer from "../Footer";
import BookCard, { Card } from "./BookCard";
import cardMelbourne from "/assets/feed/melbourne.jpg";
import cardParis from "/assets/feed/paris.jpg";
import cardLondon from "/assets/feed/london.jpg";
import cardColumbia from "/assets/feed/columbia.jpg";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setFeedTab } from "../../app/feedSlice";
import { useState } from "react";
import SearchTab from "./SearchTab";

const cards: Card[] = [
    {
        name: "Melbourne",
        description: "An amazing journey",
        price: 700,
        img: cardMelbourne,
    },
    {
        name: "Paris",
        description: "A Paris Adventure",
        price: 600,
        img: cardParis,
    },
    {
        name: "London",
        description: "London eye adventure",
        price: 350,
        img: cardLondon,
    },
    {
        name: "Columbia",
        description: "Amazing streets",
        price: 700,
        img: cardColumbia,
    },
];

function Feed() {
    const tab = useAppSelector((state) => state.feed.tab);
    const dispatch = useAppDispatch();

    const [searching, setSearching] = useState(false);

    return (
        <>
            <div className="w-[1440px] mx-auto">
                <div className="w-[87%] mx-auto">
                    <MainHeader
                        className="h-[90px]"
                        theme={Theme.Black}
                        activeTab={tab}
                        setActiveTab={(i) => {
                            setSearching(false);
                            dispatch(setFeedTab(i));
                        }}
                    />
                </div>
            </div>
            {searching ? (
                <SearchTab tab={tab} />
            ) : (
                <>
                    <div className="w-[1440px] mx-auto">
                        <div
                            className="mb-[275px] relative min-w-full min-h-[537px] bg-cover rounded-xl"
                            style={{
                                backgroundImage: `url(${tab === 0 ? flightsBackground : staysBackground})`,
                                backgroundSize: `${tab === 0 ? "115%" : "100%"}`,
                                backgroundPosition: `${tab === 0 ? "40% 5%" : "0% 55%"}`,
                            }}
                        >
                            <div className="absolute w-full h-full bg-gradient-to-r from-[#00234D] opacity-60 rounded-xl"></div>
                            <div className="relative pt-20 pl-32 z-10">
                                <div className="text-white">
                                    <h2 className="w-[440px] leading-[57px] font-gothic font-bold text-[45px] origin-left scale-x-125">
                                        Make your travel whishlist, we’ll do the
                                        rest
                                    </h2>
                                    <p className="font-medium text-xl">
                                        Special offers to suit your plan
                                    </p>
                                </div>
                            </div>
                            <SearchForm
                                className="pt-8 pb-12 px-6 absolute left-0 right-0 top-[85%] w-[87%] bg-white mx-auto rounded-xl shadow-lg shadow-slate-400/30"
                                tabs={false}
                                tab={tab}
                                onClick={() => {
                                    window.scrollTo(0, 0);
                                    setSearching(true);
                                }}
                            />
                        </div>
                    </div>
                    {[<Flights />, <Stays />][tab]}
                    <div className="mt-20 w-[1440px] mx-auto">
                        <div className="mb-10 flex flex-row justify-between items-center w-[87%] mx-auto">
                            <div>
                                <h3 className="mb-2 font-semibold text-[32px]">
                                    Fall into travel
                                </h3>
                                <p className="w-[760px] opacity-70">
                                    {
                                        "Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination."
                                    }
                                </p>
                            </div>
                            <button className="px-4 py-2 border-2 border-solid border-emerald-200/70 rounded-md hover:bg-emerald-200 transition-colors duration-300">
                                See All
                            </button>
                        </div>
                        <div className="flex flex-row justify-between w-[87%] mx-auto h-[420px]">
                            {cards.map((card) => (
                                <BookCard {...card} />
                            ))}
                        </div>
                        <div className="mt-20 mb-6 flex flex-row justify-between items-center w-[87%] mx-auto">
                            <div>
                                <h3 className="mb-2 font-semibold text-[32px]">
                                    Fall into travel
                                </h3>
                                <p className="opacity-70">
                                    Going somewhere to celebrate this season?
                                    Whether you’re going home or somewhere to
                                    roam, we’ve got the travel tools to get you
                                    to your <br />
                                    destination.
                                </p>
                            </div>
                            <button className="px-4 py-2 border-2 border-solid border-emerald-200/70 rounded-md hover:bg-emerald-200 transition-colors duration-300">
                                See All
                            </button>
                        </div>
                        <div
                            className="w-[87%] mx-auto h-[425px] grid gap-6"
                            style={{ gridTemplateColumns: "2fr 1fr 1fr" }}
                        >
                            <div className="relative p-6 bg-[#8DD3BB] rounded-3xl row-start-1 row-end-3">
                                <div className="mb-6 flex flex-row justify-between">
                                    <h2 className="font-bold text-[40px] font-gothic origin-left scale-x-125 text-green-950 leadning-[50px]">
                                        Backpacking
                                        <br />
                                        Sri Lanka
                                    </h2>
                                    <div className="bg-white w-[68px] h-[62px] text-center rounded-lg">
                                        <p className="mt-1 text-green-950">
                                            From
                                        </p>
                                        <p className="font-semibold text-xl text-green-950">
                                            $700
                                        </p>
                                    </div>
                                </div>
                                <p className="text-green-950">
                                    Traveling is a unique experience as it's the
                                    best way to unplug from the pushes and pulls
                                    of daily life. It helps us to forget about
                                    our problems, frustrations, and fears at
                                    home. During our journey, we experience life
                                    in different ways. We explore new places,
                                    cultures, cuisines, traditions, and ways of
                                    living.
                                </p>
                                <button className="absolute left-6 right-6 bottom-6 h-12 bg-white rounded-sm">
                                    Book Flight
                                </button>
                            </div>
                            {[1, 2, 3, 4].map((i) => (
                                <img
                                    className="w-full h-[200px] border-solid border-2 border-[#8DD3BB] rounded-xl"
                                    src={`./assets/feed/${i}.jpg`}
                                    alt=""
                                    style={{ backgroundSize: "100% 100%" }}
                                />
                            ))}
                        </div>
                    </div>
                </>
            )}
            <Footer />
        </>
    );
}

export default Feed;
