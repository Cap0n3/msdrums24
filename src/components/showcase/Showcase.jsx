import React from 'react';
import { useTheme } from "@mui/material";
import GridSection from "../common/section/GridSection";
import ShowcaseText from "./subcomponents/ShowcaseText";
import RespImage from '../common/respImage/RespImage';
import { useMediaQuery } from "@mui/material";

const Showcase = ({data}) => {
    const theme = useTheme();
    const sleekPaddingY = 8; // Padding top and bottom for middle sections
    const isSm = useMediaQuery((theme) => theme.breakpoints.down("sm"));

    return (
        <>
            {data && data.map((item, index) => (
                <GridSection
                    key={index}
                    contents={[
                        {
                            children: <RespImage image={item.image} alt={item.title} percentageWidth={isSm ? 100 : 90} />,
                            sx: {
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            },
                        },
                        {
                            children: <ShowcaseText title={item.title} description={item.description} />,
                            sx: {
                                display: "flex",
                                justifyContent: "center",
                                alignItems: { xs: "flex-start", sm: "center"},
                                px: isSm ? 0 : 4,
                            },
                        },
                    ]}
                    smScreen_cellSpacing={sleekPaddingY} // Space between columns for small screens
                    backgroundColor={theme.palette.background.default}
                    // Avoid big padding for middle sections (gap)
                    paddingTop={(index === 0) ? sleekPaddingY : (sleekPaddingY / 2)}
                    paddingBottom={(index === data.length - 1) ? sleekPaddingY : (sleekPaddingY / 2)}
                    reverse={index % 2 !== 0}
                />
            ))}
        </>
    );
};

export default Showcase;