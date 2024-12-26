import iconFlights from "/assets/icon-flights.svg";
import icomPlaces from "/assets/icon-places.svg";
import { SearchType } from "./features/search";

function SearchButton({
    className,
    type,
    name,
}: {
    className?: string;
    type: SearchType;
    name: string;
}) {
    return (
        <button
            className={
                "flex flex-row items-center h-12 px-4 bg-[#8DD3BB] rounded-md " +
                className
            }
        >
            {
                [
                    [
                        <img className="mr-1" src={iconFlights} alt="" />,
                        <p>{name}</p>,
                    ],
                    [
                        <img className="mr-1" src={icomPlaces} alt="" />,
                        <p>{name}</p>,
                    ],
                ][type]
            }
        </button>
    );
}

export default SearchButton;
