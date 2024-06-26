import React from "react";
import { useTheme } from "@mui/material";
import { Box, Avatar, Typography, Slide } from "@mui/material";
import QuoteIcon from "../../common/icons/QuoteIcon";

const TestimonialBox = ({ wrapperRef, review, active, transitionTime }) => {
    const theme = useTheme();

    return (
        <>
            <Slide
                direction="up"
                in={active}
                timeout={transitionTime}
                container={wrapperRef.current}
                mountOnEnter
                unmountOnExit
            >
                <Box
                    p={2}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        position: "relative",
                        justifyContent: "space-around",
                        borderRadius: theme.shape.borderRadius,
                        width: { xs: "280px", md: "350px" },
                        height: { xs: "440px", md: "420px" },
                        backgroundColor: theme.palette.background.paper,
                        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    {/* <Avatar
                        src={review.customerPic}
                        alt={review.picAlt}
                        sx={{ width: 100, height: 100 }}
                    /> */}
                    <QuoteIcon iconColor={theme.palette.primary.main} />
                    <Typography
                        component="p"
                        variant="body2"
                        textAlign={"center"}
                        gutterBottom
                    >
                        "{review.quote}"
                    </Typography>
                    <Typography component="p" variant="subtitle2">
                        {review.customerName}
                    </Typography>
                    <Typography variant="caption">{review.role}</Typography>
                </Box>
            </Slide>
        </>
    );
};

export default TestimonialBox;
