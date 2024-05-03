import React from "react";
import { useTheme } from "@emotion/react";
import { Box, Avatar, Typography, Slide } from "@mui/material";

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
                        borderRadius: "10px",
                        width: "350px",
                        height: "300px",
                        backgroundColor: theme.palette.background.paper,
                        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    <Avatar
                        src={review.customerPic}
                        alt={review.picAlt}
                        sx={{ width: 100, height: 100 }}
                    />
                    <Typography
                        variant="body2"
                        textAlign={"center"}
                        gutterBottom
                    >
                        "{review.quote}"
                    </Typography>
                    <Typography variant="subtitle2">
                        {review.customerName}
                    </Typography>
                    <Typography variant="caption">{review.role}</Typography>
                </Box>
            </Slide>
        </>
    );
};

export default TestimonialBox;
