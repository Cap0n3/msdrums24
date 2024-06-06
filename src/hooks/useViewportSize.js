import { useState, useEffect } from "react";

const useViewportSize = () => {
    const [viewportSize, setViewportSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        // const debounce = (fn, ms = 50) => {
        //     let timer;
        //     return (...args) => {
        //         clearTimeout(timer);
        //         timer = setTimeout(() => {
        //             fn.apply(this, args);
        //         }, ms);
        //     };
        // };

        // const handleResize = debounce(() => {
        //     setViewportSize({
        //         width: window.innerWidth,
        //         height: window.innerHeight,
        //     });
        // });
        const handleResize = () => {
            setViewportSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return viewportSize;
};

export default useViewportSize;
