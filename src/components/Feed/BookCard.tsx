import { useState } from "react";

export interface Card {
    name: string;
    description: string;
    price: number;
    img: string;
}

function BookCard({ name, description, price, img }: Card) {
    const initSize = name === "London" ? "100% 100%" : "auto 105%";

    const [backgroundSize, setBackgroundSize] = useState(initSize);

    return (
        <div
            className="relative w-[295px] h-full bg-cover bg-center rounded-xl transition-all duration-300"
            style={{
                backgroundImage: `url(${img})`,
                backgroundSize: backgroundSize,
            }}
            onMouseOver={() => {
                setBackgroundSize(
                    name === "London" ? "105% 105%" : "auto 110%",
                );
            }}
            onMouseOut={() => setBackgroundSize(initSize)}
        >
            <div className="px-6 absolute left-0 right-0 bottom-6 w-full">
                <div className="mb-[16px] w-full flex flex-row justify-between items-center text-white">
                    <div>
                        <h4 className="font-semibold text-2xl leading-7">
                            {name}
                        </h4>
                        <p className="text-sm">{description}</p>
                    </div>
                    <h4 className="font-semibold text-2xl">{`$ ${price}`}</h4>
                </div>
                <button className="w-full h-12 bg-[#8DD3BB] text-green-950 rounded-md">
                    Book Flight
                </button>
            </div>
        </div>
    );
}

export default BookCard;
