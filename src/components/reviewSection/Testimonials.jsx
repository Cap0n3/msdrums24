import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '@mui/material/styles';
import useViewportSize from '../../hooks/useViewportSize';
import { Box, IconButton, Typography, Tooltip, Avatar, Fade } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { TestimonialsData } from './TestimonialsData';

const Testimonials = ({ transitionTime = 500, timerInterval=3000 ,nbOfReviews = 3 }) => {
    const theme = useTheme();
    const { width } = useViewportSize();
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [reviewSlides, setReviewSlides] = useState([]);
    const [isMouseInside, setIsMouseInside] = useState(false);
    const [nbOfCards, setNbOfCards] = useState(nbOfReviews);
    const [checked, setChecked] = useState(true);  // For controlling the Fade effect
    const timerRef = useRef(null); // Using useRef to hold the timer

    useEffect(() => {
        if (width >= 900 && width <= 1280) {
            setNbOfCards(2);
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
    }, [nbOfCards]);

    const changeSlide = (direction, slideIndex = null) => {
        // Get number of review slides for reference
        const lastSlideIndex = reviewSlides.length - 1;
        let newIndex;
    
        // Determine the new index based on the direction or specific slide index
        switch (direction) {
            case "forward":
                newIndex = currentSlideIndex === lastSlideIndex ? 0 : currentSlideIndex + 1;
                break;
            case "backward":
                newIndex = currentSlideIndex === 0 ? lastSlideIndex : currentSlideIndex - 1;
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
        }, transitionTime);
    }

    useEffect(() => {
        if (!isMouseInside) {
            timerRef.current = setInterval(() => {
                changeSlide("forward");
            }, timerInterval);
        }
        return () => clearInterval(timerRef.current);
    }, [isMouseInside, currentSlideIndex]);

    return (
        <Box py={5} onMouseEnter={() => setIsMouseInside(true)} onMouseLeave={() => setIsMouseInside(false)} sx={{
            position: 'relative',
            flexDirection: { sm: 'column', md: 'row'},
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '50px',
            height: '100%',
            width: '100%',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.default,
        }}>
            {reviewSlides.length > 0 && reviewSlides[currentSlideIndex].map((review, index) => (
                <Fade in={checked} key={index} timeout={500}>
                    <Box p={2} sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        borderRadius: '10px',
                        width: '350px',
                        height: '300px',
                        backgroundColor: theme.palette.background.paper,
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                    }}>
                        <Avatar src={review.studentPic} alt={review.picAlt} sx={{ width: 100, height: 100 }} />
                        <Typography variant="body2" textAlign={'center'} gutterBottom>"{review.quote}"</Typography>
                        <Typography variant="subtitle2">{review.studentName}</Typography>
                        <Typography variant="caption">{review.roleFR}</Typography>
                    </Box>
                </Fade>
            ))}
            <Box display="flex" justifyContent="space-between" position="absolute" width="100%" top="50%" px={2}>
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
            <Box display="flex" justifyContent="center" position="absolute" bottom={0} width="100%">
                {reviewSlides.map((_, index) => (
                    <Typography key={index} component="span" color={index === currentSlideIndex ? 'primary.main' : 'grey.500'} onClick={() => changeSlide("toIndex", index)} style={{ cursor: 'pointer' }} sx={{
                        fontSize: '1.5rem',
                        margin: '0 3px',
                    }}>
                        ●
                    </Typography>
                ))}
            </Box>
        </Box>
    );
};

export default Testimonials;
