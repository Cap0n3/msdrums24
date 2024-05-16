import { useState, useEffect } from "react";
import { Fab } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const ScrollTop = () => {
    const [showScrollBtn, setShowScrollBtn] = useState(false);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setShowScrollBtn(scrollPosition > 600);
    };

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Fab
            color="primary"
            aria-label="scroll back to top"
            onClick={handleClick}
            size="small"
            style={{
                position: "fixed",
                bottom: 16,
                right: 16,
                display: showScrollBtn ? 'flex' : 'none',                
            }}
        >
            <ArrowUpwardIcon />
        </Fab>
    );
};

export default ScrollTop;
