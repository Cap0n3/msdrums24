import React from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material";
import { darken } from "polished";

/**
 * Basic section is a section that contains a single element. It can be used as a container for other elements.
 *
 * @param {JSX.Element} props.children - The content of the section
 * @param {string} props.identifier - The id of the section
 * @param {boolean} props.contrast - The contrast of the section (default is false)
 * @param {number} props.paddingTop - The padding top of the section (default is 8)
 * @param {number} props.paddingBottom - The padding bottom of the section (default is 8)
 * @param {number} props.paddingX - The padding left and right of the section (default is 8)
 * @param {string} props.direction - The direction of the section (default is "row")
 * @returns
 */
const BasicSection = ({
    children,
    identifier = "",
    contrast = false,
    paddingTop = 8,
    paddingBottom = 8,
    paddingX = 8,
    direction = "row",
}) => {
    const theme = useTheme();
    return (
        <Box
            id={identifier}
            component="section"
            sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: direction,
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
