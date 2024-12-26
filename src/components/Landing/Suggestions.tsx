import SuggestionCard from "./SuggestionCard";

const images = [
    "istanbul",
    "sydney",
    "baku",
    "male",
    "paris",
    "new-york",
    "london",
    "tokyo",
    "dubai",
];

const names = [
    "Istanbul, Turkey",
    "Sydney, Australia",
    "Baku, Azerbaijan",
    "Malé, Maldives",
    "Paris, France",
    "New York, US",
    "London, UK",
    "Tokyo, Japan",
    "Dubai, UAE",
];

for (let i = 0; i < images.length; ++i)
    images[i] = `./assets/placePreviews/${images[i]}.jpg`;

function Suggestions({ className }: { className?: string }) {
    return (
        <div className={"font-montserrat " + className}>
            <div className="flex flex-row justify-between items-center">
                <div>
                    <h3 className="mb-2 font-semibold text-[32px]">
                        Plan your perfect trip
                    </h3>
                    <p className="opacity-70">
                        {
                            "Search Flights & Places Hire to our most popular destinations"
                        }
                    </p>
                </div>
                <button className="px-4 py-2 border-2 border-solid border-emerald-200/70 rounded-md hover:bg-emerald-200 transition-colors duration-300">
                    See more places
                </button>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-8">
                {names.map((name, index) => (
                    <SuggestionCard
                        img={images[index]}
                        name={name}
                        key={index}
                    />
                ))}
            </div>
        </div>
    );
}

export default Suggestions;
