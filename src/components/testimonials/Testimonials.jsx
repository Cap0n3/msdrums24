import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "@mui/material/styles";
import { useInView } from "react-intersection-observer";
import useViewportSize from "../../hooks/useViewportSize";
import {
    Box,
    IconButton,
    Typography,
    Tooltip,
    Fade,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import TestimonialBox from "./subcomponents/TestimonialBox";
import { TestimonialsData } from "./TestimonialsData";


const Testimonials = ({
    transitionTime = 500,
    timerInterval = 12000,
    nbOfReviews = 3,
}) => {
    const theme = useTheme();
    const { width } = useViewportSize();
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [reviewSlides, setReviewSlides] = useState([]);
    const [isMouseInside, setIsMouseInside] = useState(false);
    const [nbOfCards, setNbOfCards] = useState(nbOfReviews);
    const [inViewRef, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
        delay: 200,
    });
    const [checked, setChecked] = useState(true); // For controlling the Fade effect
    const timerRef = useRef(null); // Using useRef to hold the timer
    const containerRef = useRef(null);

    useEffect(() => {
        if (width >= 900 && width <= 1280) {
            setNbOfCards(2);
        } else if (width < 900) {
            setNbOfCards(1);
        } else {
            setNbOfCards(nbOfReviews);
        }
    }, [width]);

    useEffect(() => {
        const chunks = [];
        for (let i = 0; i < TestimonialsData.length; i += nbOfCards) {
            chunks.push(TestimonialsData.slice(i, i + nbOfCards));
        }
        setReviewSlides(chunks);
        setCurrentSlideIndex(0); // Reset the current slide index (avoid crash on excessive resizing)
    }, [nbOfCards]);

    const changeSlide = (direction, slideIndex = null) => {
        // Get number of review slides for reference
        const lastSlideIndex = reviewSlides.length - 1;
        let newIndex;

        // Determine the new index based on the direction or specific slide index
        switch (direction) {
            case "forward":
                newIndex =
                    currentSlideIndex === lastSlideIndex
                        ? 0
                        : currentSlideIndex + 1;
                break;
            case "backward":
                newIndex =
                    currentSlideIndex === 0
                        ? lastSlideIndex
                        : currentSlideIndex - 1;
                break;
            case "toIndex":
                // Ensure slideIndex is valid; otherwise, default to current slide index
                newIndex = slideIndex != null ? slideIndex : currentSlideIndex;
                break;
            default:
                console.error("Invalid direction");
                return;
        }

        setChecked(false); // Make disappear slide
        setTimeout(() => {
            setCurrentSlideIndex(newIndex);
            setChecked(true); // Make appear slide
        }, transitionTime + 100); // Let the slide disappear before changing the slide (avoid flickering)
    };

    useEffect(() => {
        if (!isMouseInside && inView) {
            timerRef.current = setInterval(() => {
                changeSlide("forward");
            }, timerInterval);
        }
        return () => clearInterval(timerRef.current);
    }, [isMouseInside, inView, currentSlideIndex]);


    return (
        <Box
            ref={inViewRef}
            component="section"
            pt={4}
            pb={8}
            onMouseEnter={() => setIsMouseInside(true)}
            onMouseLeave={() => setIsMouseInside(false)}
            sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                height: "100%",
                width: "100%",
                overflow: "hidden",
                backgroundColor: theme.palette.background.default,
            }}
        >
            <Fade in={checked} timeout={200}>
                <Box
                    ref={containerRef}
                    sx={{
                        display: "flex",
                        flexDirection: { sm: "column", md: "row" },
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 4,
                        width: "100%",
                        minHeight: "305px",
                        overflow: "hidden",
                    }}>
                    {reviewSlides.length > 0 && inView &&
                        reviewSlides[currentSlideIndex].map((review, boxIndex) => (
                            <TestimonialBox key={boxIndex} wrapperRef={containerRef} review={review} active={checked} transitionTime={200 + boxIndex * 200} />
                        ))
                    }
                </Box>
            </Fade>
            <Box
                display="flex"
                justifyContent="space-between"
                position="absolute"
                width="100%"
                top="50%"
                px={2}
            >
                <Tooltip title="Previous">
                    <IconButton onClick={() => changeSlide("backward")}>
                        <ArrowBackIos />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Next">
                    <IconButton onClick={() => changeSlide("forward")}>
                        <ArrowForwardIos />
                    </IconButton>
                </Tooltip>
            </Box>
            <Box
                display="flex"
                justifyContent="center"
                position="absolute"
                bottom={15}
                width="100%"
            >
                {reviewSlides.map((_, index) => (
                    <Typography
                        key={index}
                        component="span"
                        color={
                            index === currentSlideIndex
                                ? "primary.main"
                                : "grey.500"
                        }
                        onClick={() => changeSlide("toIndex", index)}
                        style={{ cursor: "pointer" }}
                        sx={{
                            fontSize: "1.5rem",
                            margin: "0 3px",
                        }}
                    >
                        ●
                    </Typography>
                ))}
            </Box>
        </Box>
    );
};

export default Testimonials;
