function RecentCard({
    name,
    placeCount,
    img,
}: {
    img: string;
    name: string;
    placeCount: number;
}) {
    return (
        <div className="flex flex-row items-center">
            <img
                className="w-[90px] h-[90px] mr-[16px] rounded-lg"
                src={img}
                alt=""
            />
            <div className="text-green-950">
                <h5 className="font-semibold text-[16px]">{name}</h5>
                <p className="mt-1 text-xs opacity-75">{placeCount} places</p>
            </div>
        </div>
    );
}

export default RecentCard;
