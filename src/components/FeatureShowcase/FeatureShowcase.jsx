import React, { useEffect } from 'react';
import { useTheme } from '@emotion/react';
import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import ImageCell from './subcomponents/ImageCell';
import TextCell from './subcomponents/TextCell';
import useViewportSize from '../../hooks/useViewportSize';

const PresentationData = [
    {
        image: "https://picsum.photos/id/4/800/800",
        title: "Some description of my awesome product",
        description: "My product is so cool that you will love it, I think you really need to know more about it. I am sure you will love it.",
    },
    {
        image: "https://picsum.photos/id/20/800/800",
        title: "Maybe you want to know more about this",
        description: "Your life will change after you know more about this product, it is a game changer. Let me tell you more about it.",
    },
    {
        image: "https://picsum.photos/id/352/800/800",
        title: "No way! This is mind blowing",
        description: "I can't believe how amazing this product is, I am sure you will be amazed too. Let me show you more about it.",
    },
];

const ResponsiveGrid = ({ children, xs, sm, md, p, sx }) => (
    <Grid xs={xs} sm={sm} md={md} p={p} sx={sx}>
        {children}
    </Grid>
);

const Content = ({ item, index, alternate }) => {
    const isImageFirst = index % 2 === 0;
    const imageFirst = alternate ? isImageFirst : true;
    
    return (
        <>
            <ResponsiveGrid xs={12} sm={12} md={6} p={8} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {imageFirst ? <ImageCell image={item.image} /> : <TextCell title={item.title} description={item.description} />}
            </ResponsiveGrid>
            <ResponsiveGrid xs={12} sm={12} md={6} p={8} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                {imageFirst ? <TextCell title={item.title} description={item.description} /> : <ImageCell image={item.image} />}
            </ResponsiveGrid>
        </>
    );
};

const FeatureShowcase = () => {
    const theme = useTheme();
    const { width } = useViewportSize();

    return (
        <Box sx={{ flexGrow: 1, backgroundColor: theme.palette.background.default, overflow: 'hidden' }}>
            <Grid container spacing={2} sx={{ border: "1px solid green" }}>
                {PresentationData.map((item, index) => (
                    <Content key={index} item={item} index={index} alternate={width >= 900} />
                ))}
            </Grid>
        </Box>
    );
};

export default FeatureShowcase;
