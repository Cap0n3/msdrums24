import { useEffect } from "react";

/**
 * Scroll to top on component mount. Modern browsers often try to restore the previous scroll position on refresh.
 * This can interfere with script-based scroll positioning.
 *
 * Material-UI Slide transitions can cause the page to not scroll to the top. This hook can be used to force the page to scroll to the top.
 */
const useScrollToTop = () => {
    useEffect(() => {
        if ("scrollRestoration" in window.history) {
            // Back off, browser, I got this...
            window.history.scrollRestoration = "manual";
        }

        window.scrollTo(0, 0);
    }, []);
};

export default useScrollToTop;
