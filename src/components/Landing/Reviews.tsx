import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

const images: string[] = [];

for (let i = 1; i <= 3; ++i) images.push(`./assets/reviews/${i}.jpg`);

const cardsInfo = [
    {
        title: "“A real sense of community, nurtured”",
        text: "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.",
        rating: 5,
        name: "Olga",
        additional: "Weave Studios – Kai Tak",
        img: images[0],
    },
    {
        title: "“The facilities are superb. Clean, slick, bright.”",
        text: "“A real sense of community, nurtured”Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.",
        rating: 5,
        name: "Thomas",
        additional: "Weave Studios – Olympic",
        img: images[1],
    },
    {
        title: "“A real sense of community, nurtured”",
        text: "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.",
        rating: 5,
        name: "Eliot",
        additional: "Weave Studios – Kai Tak",
        img: images[2],
    },
    {
        title: "“The facilities are superb. Clean, slick, bright.”",
        text: "“A real sense of community, nurtured”Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.",
        rating: 5,
        name: "Thomas",
        additional: "Weave Studios – Olympic",
        img: images[1],
    },
    {
        title: "“A real sense of community, nurtured”",
        text: "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.",
        rating: 5,
        name: "Olga",
        additional: "Weave Studios – Kai Tak",
        img: images[0],
    },
];

let focusedGlobal = false;
let autoScrollActive = true;
let hovered = false;

function Reviews({ className }: { className?: string }) {
    const [focused, setFocused] = useState(false);
    const [currentX, setCurrentX] = useState(0);

    function unfocusScrolling() {
        setFocused(false);
        focusedGlobal = false;
        autoScrollActive = true;
    }

    function focusScrolling() {
        setFocused(true);
        focusedGlobal = true;
    }

    useEffect(() => {
        const minX = 1232 - 474 * cardsInfo.length + 48;
        let x = 0;

        const updateX = () => {
            if (x > 0) x = 0;
            if (x < minX) x = minX;

            setCurrentX(x);
        };

        window.addEventListener(
            "wheel",
            (e) => {
                if (!focusedGlobal) return;

                e.preventDefault();

                x += e.deltaY;

                updateX();
            },
            {
                passive: false,
            },
        );

        let delta = -1;

        const interval = setInterval(async () => {
            if (!autoScrollActive) return;

            x += 5 * delta;

            if (x < minX || x > 0) {
                autoScrollActive = false;
                await new Promise((res) => setTimeout(res, 2000));
                delta *= -1;

                if (!hovered) autoScrollActive = true;
            }

            updateX();
        }, 100);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className={className}>
            <div className="flex flex-row justify-between items-center">
                <div>
                    <h3 className="mb-2 font-semibold text-[32px]">Reviews</h3>
                    <p className="opacity-70">
                        {"What people says about Golobe facilities"}
                    </p>
                </div>
                <button className="px-4 py-2 border-2 border-solid border-emerald-200/70 rounded-md hover:bg-emerald-200 transition-colors duration-300">
                    See All
                </button>
            </div>
            <div
                className="relative mt-10 w-max pb-6 -pr-6 flex flex-row transition-all duration-150 ease-linear rounded-3xl z-30"
                style={{
                    transform: `translateX(${currentX}px)`,
                    boxShadow: `0 0 15px 5px ${focused ? "rgba(0, 0, 0, 0.1)" : "transparent"}`,
                    cursor: `${focused ? "unset" : "pointer"}`,
                }}
                onClick={focusScrolling}
                onMouseOver={() => {
                    hovered = true;
                    autoScrollActive = false;
                }}
                onMouseOut={() => {
                    hovered = false;
                    if (!focused) autoScrollActive = true;
                }}
            >
                {cardsInfo.map((cardInfo, index) => (
                    <ReviewCard
                        {...(index === cardsInfo.length - 1
                            ? { ...cardInfo, isLast: true }
                            : cardInfo)}
                    />
                ))}
            </div>
            {focused ? (
                <div
                    className="fixed top-0 left-0 min-w-full min-h-full z-20"
                    onClick={() => unfocusScrolling()}
                ></div>
            ) : (
                ""
            )}
        </div>
    );
}

export default Reviews;
