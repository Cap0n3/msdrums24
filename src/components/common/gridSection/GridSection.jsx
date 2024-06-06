import React from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { darken } from "polished";

/**
 * Website standard section that contains a grid of cells. Only two cells are supported.
 *
 * @param {Object} props
 * @param {string} props.identifier - The id of the section
 * @param {Array} props.contents - An array of objects that contain the content of each cell
 * @param {boolean} props.contrast - The contrast of the section (default is false)
 * @param {number} props.paddingTop - The padding top of the section (default is 8)
 * @param {number} props.paddingBottom - The padding bottom of the section (default is 8)
 * @param {number} props.paddingX - The padding left and right of the section (default is 8)
 * @param {number} props.minHeight - The minimum height of the section (default is 500)
 * @param {string} props.backgroundColor - The background color of the section
 * @param {number} props.smScreen_cellSpacing - The space between cells for small screens
 * @param {number} props.spacing - The space between cells for all screens (default is 0)
 * @param {boolean} props.reverse - Reverse the order of the contents
 * @returns {JSX.Element}
 * @constructor
 * @alias GridSection
 * @example
 * <GridSection
 *  contents={[
 *       {
 *          children: <Image image="https://picsum.photos/id/4/800/800" width={300} />,
 *          sx: {
 *              display: "flex",
 *              justifyContent: "center",
 *              alignItems: "center",
 *          },
 *      },
 *      {
 *          children: <QnaPanel questions={questions} />,
 *          sx: {
 *              display: "flex",
 *              justifyContent: "center",
 *              alignItems: "flex-start",
 *          },
 *    },
 *  ]}
 *  smScreen_cellSpacing={8} // Space between columns for small screens
 *  backgroundColor="#f0f0f0"
 *  reverse={false}
 * />
 *
 */
const GridSection = ({
    identifier = "",
    contents,
    contrast = false,
    paddingTop = 8,
    paddingBottom = 8,
    paddingX = 8,
    minHeight = 500,
    smScreen_cellSpacing,
    spacing = 0,
    reverse,
}) => {
    // Check if the screen is medium or larger
    const isMdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));
    const theme = useTheme();

    const ResponsiveCell = ({ children, xs, sm, md, sx }) => {
        return (
            <Grid xs={xs} sm={sm} md={md} sx={sx}>
                {children}
            </Grid>
        );
    };

    // Reverse the order of the contents if the screen is medium or larger and the reverse prop is true
    const orderedContents =
        isMdUp && reverse ? [...contents].reverse() : contents;

    return (
        <Box
            id={identifier}
            component="section"
            sx={{
                flexGrow: 1,
                pt: paddingTop,
                pb: paddingBottom,
                px: paddingX,
                backgroundColor: contrast
                    ? darken(0.008, theme.palette.background.default)
                    : theme.palette.background.default,
                minHeight: minHeight,
                overflow: "hidden", // Prevents bottom page gap during excessive resizing (due to FX)
            }}
        >
            <Grid container spacing={spacing}>
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
