import { FeedTab } from "../../app/feedSlice";
import SearchForm from "../SearchForm";
import FilterRange from "./FilterRange";
import SearchFilter from "./SearchFilter";

const filterSeparator = (
    <div className="my-8 min-w-full h-px bg-green-950 opacity-25"></div>
);

function SearchTab({ tab }: { tab: FeedTab }) {
    return (
        <div className="w-[1440px] mx-auto">
            <div className="w-[87%] mx-auto">
                <SearchForm
                    className="mt-12 py-8 px-6 bg-white mx-auto rounded-xl shadow-lg shadow-slate-400/30"
                    tabs={false}
                    inline={true}
                    tab={tab}
                    onClick={() => {}}
                />
                <div className="mt-8 flex flex-row">
                    <div className="min-w-[345px]">
                        <h4 className="mb-8 font-semibold text-xl text-green-950">
                            Filters
                        </h4>
                        <SearchFilter name="Price">
                            <FilterRange minValue="$50" maxValue="$1200" />
                        </SearchFilter>
                        {filterSeparator}
                        <SearchFilter name="Departure Time">
                            <FilterRange
                                minValue="12:01 Am"
                                maxValue="11:56 Pm"
                            />
                        </SearchFilter>
                        {filterSeparator}
                        <SearchFilter name="Rating"></SearchFilter>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchTab;
