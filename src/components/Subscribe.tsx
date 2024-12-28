import picture from "/assets/picture-subscribe.png";

function Subscribe({ className }: { className?: string }) {
    return (
        <div
            className={
                "flex flex-row justify-between min-h-[305px] bg-[#CDEAE1] rounded-3xl shadow-xl shadow-green-950/5 " +
                className
            }
        >
            <div className="mt-6 ml-6">
                <h2 className="-m-0.5 font-gothic text-[44px] font-bold text-green-950 leading-[54px] origin-left scale-x-125">
                    Subscribe
                    <br />
                    Newsletter
                </h2>
                <div className="w-max">
                    <p className="mt-6 text-xl text-green-950/80 font-gothic font-bold origin-left scale-x-125">
                        The Travel
                    </p>
                    <p className="mt-1 text-green-950/70 font-medium">
                        Get inspired! Receive travel discounts, tips and behind
                        the scenes stories.
                    </p>
                    <div className="mt-4 flex flex-row h-14 justify-between">
                        <input
                            className="mr-4 p-4 w-full text-[#1C1B1F] rounded-md outline-none"
                            placeholder="Your email address"
                        />
                        <button className="p-4 min-w-[104px] bg-green-950 text-white text-sm font-semibold rounded-md">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
            <img className="mr-6" src={picture} alt="" />
        </div>
    );
}

export default Subscribe;
