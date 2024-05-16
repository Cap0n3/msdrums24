import { useState, useEffect } from "react";
import { Fab } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useTheme } from "@mui/material/styles";

const ScrollTop = () => {
    const theme = useTheme();
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
            aria-label="scroll back to top"
            onClick={handleClick}
            size="small"
            sx={{
                position: "fixed",
                bottom: 16,
                right: 16,
                display: showScrollBtn ? "flex" : "none",
                backgroundColor: theme.palette.button.main,
            }}
        >
            <ArrowUpwardIcon />
        </Fab>
    );
};

export default ScrollTop;
