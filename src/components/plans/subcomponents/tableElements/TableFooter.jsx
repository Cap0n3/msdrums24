import React from "react";
import { Box, Typography } from "@mui/material";
import { innerBorders, cellHeight } from "../../PlansSection";

const Footer = ({ content }) => {
    
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: `${cellHeight}px`,
                width: "100%",
                p: "15px",
                borderTop: innerBorders,
                //border: "1px solid blue",
            }}
        >
            <Typography variant="body2" textAlign="center">
                {content}
            </Typography>
        </Box>
    );
};

export default Footer;