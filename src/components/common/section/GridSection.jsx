import React from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useMediaQuery } from "@mui/material";

const GridSection = ({
    contents,
    backgroundColor,
    smScreen_cellSpacing,
    reverse,
}) => {
    // Check if the screen is medium or larger
    const isMdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));

    const ResponsiveCell = ({ children, xs, sm, md, p, sx }) => {
        return (
            <Grid xs={xs} sm={sm} md={md} p={p} sx={sx}>
                {children}
            </Grid>
        );
    };

    // Reverse the order of the contents if the screen is medium or larger and the reverse prop is true
    const orderedContents =
        isMdUp && reverse ? [...contents].reverse() : contents;

    return (
        <Box
            component="section"
            sx={{
                flexGrow: 1,
                padding: 8,
                backgroundColor: backgroundColor
                    ? backgroundColor
                    : "transparent",
            }}
        >
            <Grid container spacing={0}>
                {contents &&
                    orderedContents.map((content, index) => (
                        <ResponsiveCell
                            key={index}
                            {...content}
                            xs={12}
                            sm={12}
                            md={6}
                            sx={{
                                ...content.sx,
                                paddingTop:
                                    index === 0
                                        ? 0
                                        : {
                                              xs: smScreen_cellSpacing,
                                              sm: smScreen_cellSpacing,
                                              md: 0,
                                          },
                            }}
                        />
                    ))}
            </Grid>
        </Box>
    );
};

export default GridSection;
