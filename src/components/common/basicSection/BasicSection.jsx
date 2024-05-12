import React from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material";
import { darken } from "polished";

const BasicSection = ({
    children,
    contrast = false,
    paddingTop = 8,
    paddingBottom = 8,
    paddingX = 8,
    backgroundColor = "transparent",
}) => {
    const theme = useTheme();
    return (
        <Box
            component="section"
            sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                pt: paddingTop,
                pb: paddingBottom,
                px: paddingX,
                backgroundColor: contrast
                    ? darken(0.008, theme.palette.background.default)
                    : theme.palette.background.default,
                minHeight: "500px",
                overflow: "hidden",
            }}
        >
            {children}
        </Box>
    );
};

export default BasicSection;
