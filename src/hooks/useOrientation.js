import { useState, useEffect } from "react";

const useOrientation = () => {
    const getOrientation = () =>
        window.matchMedia("(orientation: portrait)").matches
            ? "portrait"
            : "landscape";

    const [orientation, setOrientation] = useState(getOrientation);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(orientation: portrait)");

        const handleOrientationChange = (e) => {
            setOrientation(e.matches ? "portrait" : "landscape");
        };

        mediaQuery.addEventListener("change", handleOrientationChange);

        // Clean up event listener on unmount
        return () => {
            mediaQuery.removeEventListener("change", handleOrientationChange);
        };
    }, []);

    return orientation;
};

export default useOrientation;
