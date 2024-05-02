import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '@mui/material/styles';
import useViewportSize from '../../hooks/useViewportSize';
import { Box, IconButton, Typography, Tooltip, Avatar } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { ReviewData } from './ReviewData';

const ReviewSection = ({ transitionTime = 500, nbOfReviews = 3 }) => {
    const theme = useTheme();
    const { width } = useViewportSize();
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [reviewSlides, setReviewSlides] = useState([]);
    const [nbOfCards, setNbOfCards] = useState(nbOfReviews);
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
        for (let i = 0; i < ReviewData.length; i += nbOfCards) {
            chunks.push(ReviewData.slice(i, i + nbOfCards));
        }
        setReviewSlides(chunks);
    }, [nbOfCards]);

    const changeSlide = (newIndex) => {
        setCurrentSlideIndex(() =>
            newIndex < 0 ? reviewSlides.length - 1 : newIndex % reviewSlides.length
        );
    };

    useEffect(() => {
        timerRef.current = setInterval(() => {
            changeSlide(currentSlideIndex + 1);
        }, 12000);
        return () => clearInterval(timerRef.current);
    }, [currentSlideIndex, reviewSlides.length]);

    const handleMouseEnter = () => {
        clearInterval(timerRef.current);
    };

    const handleMouseLeave = () => {
        timerRef.current = setInterval(() => {
            changeSlide(currentSlideIndex + 1);
        }, 10000);
    };

    return (
        <Box py={5} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} sx={{
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
                <Box key={index} p={2} sx={{
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
            ))}
            <Box display="flex" justifyContent="space-between" position="absolute" width="100%" top="50%" px={2}>
                <Tooltip title="Previous">
                    <IconButton onClick={() => changeSlide(currentSlideIndex - 1)}>
                        <ArrowBackIos />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Next">
                    <IconButton onClick={() => changeSlide(currentSlideIndex + 1)}>
                        <ArrowForwardIos />
                    </IconButton>
                </Tooltip>
            </Box>
            <Box display="flex" justifyContent="center" position="absolute" bottom={0} width="100%">
                {reviewSlides.map((_, index) => (
                    <Typography key={index} component="span" color={index === currentSlideIndex ? 'primary.main' : 'grey.500'} onClick={() => changeSlide(index)} style={{ cursor: 'pointer' }} sx={{
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

export default ReviewSection;
