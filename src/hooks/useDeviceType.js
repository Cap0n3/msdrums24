import { useState, useEffect } from "react";

const getDeviceType = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile =
        /iphone|ipad|ipod|android|mobile|blackberry|windows phone/g.test(
            userAgent,
        );
    const isTablet = /(ipad|tablet|playbook|silk)|(android(?!.*mobile))/g.test(
        userAgent,
    );

    console.log("userAgent:", userAgent);

    if (isMobile) {
        console.log("Mobile");
        return "Mobile";
    } else if (isTablet) {
        console.log("Tablet");
        return "Tablet";
    } else {
        console.log("Desktop");
        return "Desktop";
    }
};

/**
 * Custom hook to detect the device type (Mobile, Tablet, Desktop).
 *
 * @returns {string} The device type (string value: 'Mobile', 'Tablet', 'Desktop').
 */
const useDeviceType = () => {
    const [device, setDevice] = useState(getDeviceType());

    useEffect(() => {
        const handleDeviceDetection = () => {
            setDevice(getDeviceType());
        };

        window.addEventListener("resize", handleDeviceDetection);

        return () => {
            window.removeEventListener("resize", handleDeviceDetection);
        };
    }, []);

    return device;
};

export default useDeviceType;
