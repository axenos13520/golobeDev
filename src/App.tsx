import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { openPage, Page, pageFromUrl, setPage } from "./app/pageSlice";
import Landing from "./components/Landing/Landing";
import Feed from "./components/Feed/Feed";

function App() {
    const currentPage = useAppSelector((state) => state.page.current);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(openPage(pageFromUrl()));

        window.addEventListener("popstate", () => {
            dispatch(setPage(pageFromUrl()));
        });
        //eslint-disable-next-line
    }, []);

    return currentPage === Page.Landing ? <Landing /> : <Feed />;
}

export default App;
