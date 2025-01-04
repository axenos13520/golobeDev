function FilterRange({
    minValue,
    maxValue,
}: {
    minValue: string;
    maxValue: string;
}) {
    return (
        <div className="h-12 relative min-w-full text-green-950">
            <div className="flex items-center min-w-full h-6">
                <div className="min-w-full border-t-[2px] border-solid border-black bg-black"></div>
            </div>
            <div className="absolute top-0">
                <div className="mb-2 w-6 h-6 bg-[#8DD3BB] rounded-full"></div>
                <p className="font-medium text-xs">{minValue}</p>
            </div>
            <div className="absolute top-0 right-0">
                <div className="ml-auto mb-2 w-6 h-6 bg-[#8DD3BB] rounded-full"></div>
                <p className="font-medium text-xs">{maxValue}</p>
            </div>
        </div>
    );
}

export default FilterRange;
