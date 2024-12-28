import { useState } from "react";
import { Theme } from "../features/icon";
import MainHeader from "../MainHeader";
import Flights from "./Flights";
import SearchForm from "../SearchForm";
import flightsBackground from "/assets/feed-flights-background.jpg";
import staysBackground from "/assets/feed-stays-background.jpg";
import Stays from "./Stays";

function Feed() {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <>
            <div className="w-[1440px] mx-auto">
                <div className="w-[87%] mx-auto">
                    <MainHeader
                        className="h-[90px]"
                        theme={Theme.Black}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                    />
                </div>
                <div
                    className="mb-[275px] relative min-w-full min-h-[537px] bg-cover rounded-xl"
                    style={{
                        backgroundImage: `url(${activeTab === 0 ? flightsBackground : staysBackground})`,
                        backgroundSize: `${activeTab === 0 ? "115%" : "100%"}`,
                        backgroundPosition: `${activeTab === 0 ? "40% 5%" : "0% 55%"}`,
                    }}
                >
                    <div className="absolute w-full h-full bg-gradient-to-r from-[#00234D] opacity-60 rounded-xl"></div>
                    <div className="relative pt-20 pl-32 z-10">
                        <div className="text-white">
                            <h2 className="w-[440px] leading-[57px] font-gothic font-bold text-[45px] origin-left scale-x-125">
                                Make your travel whishlist, we’ll do the rest
                            </h2>
                            <p className="font-medium text-xl">
                                Special offers to suit your plan
                            </p>
                        </div>
                    </div>
                    <SearchForm
                        className="pt-8 pb-12 px-6 absolute left-0 right-0 top-[85%] w-[87%] bg-white mx-auto rounded-xl shadow-lg shadow-slate-400/30"
                        tabs={false}
                        tab={activeTab}
                    />
                </div>
            </div>
            {[<Flights />, <Stays />][activeTab]}
        </>
    );
}

export default Feed;
