import RecentCard from "./RecentCard";

const images = ["istanbul", "sydney", "baku", "male"];

const names = [
    "Istanbul, Turkey",
    "Sydney, Australia",
    "Baku, Azerbaijan",
    "Malé, Maldives",
];

for (let i = 0; i < images.length; ++i)
    images[i] = `./assets/placePreviews/${images[i]}.jpg`;

function Stays() {
    return (
        <div className="w-[1440px] mx-auto">
            <div className="w-[87%] mx-auto">
                <h3 className="mb-8 font-bold text-[32px]">
                    Your recent searches
                </h3>
                <div className="flex flex-row justify-between">
                    {names.map((name, i) => (
                        <RecentCard
                            name={name}
                            placeCount={325}
                            img={images[i]}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Stays;
