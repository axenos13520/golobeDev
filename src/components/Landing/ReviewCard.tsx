import iconStar from "/assets/icon-star.svg";
import iconGoogle from "/assets/icon-google.svg";
import { useState } from "react";

function ReviewCard({
    title,
    text,
    rating,
    name,
    additional,
    img,
    isLast = false,
}: {
    title: string;
    text: string;
    rating: number;
    name: string;
    additional: string;
    img: string;
    isLast?: boolean;
}) {
    const starArray = [];

    for (let i = 0; i < rating; ++i) starArray.push(i);

    const [textOpened, setTextOpened] = useState(false);

    return (
        <div
            className={`relative ${isLast ? "mr-6 " : "mr-12 "}p-6 min-w-[425px] min-h-[585px] w-[425px] h-[585px] bg-white shadow-lg shadow-slate-400/30 rounded-3xl`}
        >
            <div className="absolute min-w-full min-h-full bg-[#8DD3BB] opacity-40 rounded-3xl -z-10"></div>
            <h3 className="w-10/12 break-words font-gothic text-[24px] font-bold leading-7 scale-x-125 origin-left">
                {title}
            </h3>
            <div className="relative z-10">
                <p
                    className={
                        "overflow-hidden mt-6 break-words leading-5 text-green-950/50 bg-white rounded-lg shadow-md transition-all duration-300 " +
                        (textOpened
                            ? "shadow-slate-400/30"
                            : "h-11 shadow-transparent line-clamp-2")
                    }
                    style={
                        textOpened
                            ? { height: `${25 * (text.length / 55)}px` }
                            : {}
                    }
                >
                    {text}
                </p>
                <div className="mt-3 flex justify-end">
                    <button
                        className="font-bold text-sm"
                        onClick={() => setTextOpened(!textOpened)}
                    >
                        {textOpened ? "View less" : "View more"}
                    </button>
                </div>
            </div>
            <div className="absolute bottom-[264px]">
                <div className="flex flex-row">
                    {starArray.map((i) => (
                        <img
                            className="mt-4 mr-3"
                            src={iconStar}
                            alt=""
                            key={i}
                        />
                    ))}
                </div>
                <p className="mt-5 -ml-px font-gothic font-bold origin-left scale-x-125">
                    {name}
                </p>
                <p className="text-sm text-green-950 opacity-50">
                    {additional}
                </p>
                <div className="mt-3 flex flex-row items-center">
                    <img className="mr-2" src={iconGoogle} alt="" />
                    <p className="text-xs font-gothic text-green-950 opacity-40 font-bold origin-left scale-x-125">
                        Google
                    </p>
                </div>
            </div>
            <img
                className="absolute bottom-6 w-[377px] h-[200px] rounded-lg"
                src={img}
                alt=""
            />
        </div>
    );
}

export default ReviewCard;
