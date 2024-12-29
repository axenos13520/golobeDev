import mapImage from "/assets/feed-map.svg";

function Flights() {
    return (
        <>
            <div className="mb-6 w-[1440px] mx-auto">
                <div className="flex flex-row justify-between items-center w-[87%] mx-auto">
                    <div>
                        <h3 className="mb-2 font-semibold text-[32px]">
                            Let's go places together
                        </h3>
                        <p className="opacity-70">
                            {
                                "Discover the latest offers and news and start planning your next trip with us."
                            }
                        </p>
                    </div>
                    <button className="px-4 py-2 border-2 border-solid border-emerald-200/70 rounded-md hover:bg-emerald-200 transition-colors duration-300">
                        See All
                    </button>
                </div>
            </div>
            <div className="w-full h-[485px] bg-[#8DD3BB]">
                <img
                    draggable={false}
                    className="mx-auto"
                    src={mapImage}
                    alt=""
                />
            </div>
        </>
    );
}

export default Flights;
