import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scroll to top on component mount. Modern browsers often try to restore the previous scroll position on refresh.
 * This can interfere with script-based scroll positioning.
 *
 * Material-UI Slide transitions can cause the page to not scroll to the top. This hook can be used to force the page to scroll to the top.
 */
const useScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
        if ("scrollRestoration" in window.history) {
            // Back off, browser, I got this...
            window.history.scrollRestoration = "manual";
        }

        window.scrollTo(0, 0);
    }, [location.pathname]);
};

export default useScrollToTop;
