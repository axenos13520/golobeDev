import landingBackground from "/assets/landing-background.jpg";
import flightsBackground from "/assets/flights-background.jpg";
import hotelsBackground from "/assets/hotels-background.jpg";
import MainHeader from "../MainHeader";
import SearchForm from "../SearchForm";
import Suggestions from "./Suggestions";
import SearchButton from "../SearchButton";
import { SearchType } from "../features/search";
import Reviews from "./Reviews";
import Footer from "./Footer";
import { useAppDispatch } from "../../app/hooks";
import { openPage, Page } from "../../app/pageSlice";
import { Theme } from "../features/icon";

function Landing() {
    const dispatch = useAppDispatch();

    return (
        <>
            <div className="max-w-[1440px] mx-auto">
                <div
                    className="relative mt-7 mx-auto w-[95%] h-[600px] rounded-xl text-white"
                    style={{
                        backgroundImage: `url(${landingBackground})`,
                        backgroundSize: "110%",
                        backgroundPosition: "65% 40%",
                    }}
                >
                    <div className="absolute top-0 left-0 bottom-0 right-0 bg-gradient-to-b from-black opacity-50 rounded-xl"></div>
                    <MainHeader className="pt-6" theme={Theme.White} />
                    <div className="relative mt-20 mx-auto w-1/2 z-10 font-gothic font-extrabold text-center scale-x-125 leading-none">
                        <h3 className="text-[45px]">Helping Others</h3>
                        <h1 className="text-[80px] mt-5">{"LIVE & TRAVEL"}</h1>
                        <p className="text-[20px] mt-4 tracking-tighter">
                            Special offers to suit your plan
                        </p>
                    </div>
                    <SearchForm />
                </div>
                <Suggestions className="w-[87%] mt-60 mx-auto" />
                <div className="mt-20 w-[87%] mx-auto flex flex-row justify-between text-white">
                    <div
                        className="overflow-hidden relative w-[604px] h-[559px] bg-cover rounded-3xl"
                        style={{ backgroundImage: `url(${flightsBackground})` }}
                    >
                        <div className="absolute min-w-full min-h-full bg-gradient-to-t from-black/80 from-10% to-50%"></div>
                        <div className="absolute left-0 right-0 bottom-6 mx-auto w-4/6 text-center z-10">
                            <h3 className="font-gothic font-bold text-[40px] scale-x-125">
                                Flights
                            </h3>
                            <p>
                                {
                                    "Search Flights & Places Hire to our most popular destinations"
                                }
                            </p>
                            <SearchButton
                                className="mt-4 mx-auto text-black"
                                type={SearchType.Flights}
                                name="Show Flights"
                                onClick={() => {
                                    dispatch(openPage(Page.Main));
                                }}
                            />
                        </div>
                    </div>
                    <div
                        className="overflow-hidden relative w-[604px] h-[559px] bg-cover bg-center rounded-3xl"
                        style={{ backgroundImage: `url(${hotelsBackground})` }}
                    >
                        <div className="absolute min-w-full min-h-full bg-gradient-to-t from-black/60 from-30% to-50%"></div>
                        <div className="absolute left-0 right-0 bottom-6 mx-auto w-4/6 text-center z-10">
                            <h3 className="font-gothic font-bold text-[40px] scale-x-125">
                                Hotels
                            </h3>
                            <p>
                                {
                                    "Search hotels & Places Hire to our most popular destinations"
                                }
                            </p>
                            <SearchButton
                                className="mt-4 mx-auto text-black"
                                type={SearchType.Stays}
                                name="Show Hotels"
                                onClick={() => {
                                    dispatch(openPage(Page.Main));
                                }}
                            />
                        </div>
                    </div>
                </div>
                <Reviews className="w-[87%] mt-[70px] mx-auto" />
            </div>
            <Footer />
        </>
    );
}

export default Landing;
