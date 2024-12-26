import { useState } from "react";
import { Theme } from "../features/icon";
import MainHeader from "../MainHeader";

function Feed() {
    const [activeTab, setActiveTab] = useState(1);
    return (
        <>
            <div className="w-[1440px] mx-auto">
                <div className="w-[87%] mx-auto">
                    <MainHeader
                        className="h-[90px]"
                        theme={Theme.Black}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                    />
                </div>
            </div>
        </>
    );
}

export default Feed;
