function SuggestionCard({ img, name }: { img: string; name: string }) {
    return (
        <div className="p-3 flex flex-row items-center shadow-lg shadow-slate-400/30 rounded-lg">
            <img
                className="mr-4 w-[90px] h-[90px] rounded-lg"
                src={img}
                alt=""
            />
            <div>
                <p className="mb-2 text-green-950 font-semibold opacity-70">
                    {name}
                </p>
                <p className="font-medium whitespace-pre">
                    {"Flights  •  Hotels  •  Resorts"}
                </p>
            </div>
        </div>
    );
}

export default SuggestionCard;
