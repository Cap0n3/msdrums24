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


const Presentation = () => {
    const theme = useTheme();
    const { width } = useViewportSize();

    const AlternateContent = () => {
        return (
            <>
                {PresentationData.map((item, index) => (
                    <React.Fragment key={index}>
                        <Grid xs={12} sm={12} md={6} p={{ xs: 2, sm: 8 }} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            {(index % 2 === 0) ? <ImageCell image={item.image} /> : <TextCell title={item.title} description={item.description} />}
                        </Grid>
                        <Grid xs={12} sm={12} md={6} p={8} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            {(index % 2 === 0) ? <TextCell title={item.title} description={item.description} /> : <ImageCell image={item.image} />}
                        </Grid>
                    </React.Fragment>
                ))}
            </>
        );
    }

    const NotAlternateContent = () => {
        return (
            <>
                {PresentationData.map((item, index) => (
                    <React.Fragment key={index}>
                        <Grid xs={12} sm={12} md={6} p={8} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <ImageCell image={item.image} />
                        </Grid>
                        <Grid xs={12} sm={12} md={6} p={8} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <TextCell title={item.title} description={item.description} />
                        </Grid>
                    </React.Fragment>
                ))}
            </>
        );
    }
 
    return (
        <Box sx={{ flexGrow: 1, backgroundColor: theme.palette.background.default, overflow: 'hidden' }}>
            <Grid container spacing={2} sx={{ border: "1px solid green" }}>
                {width >= 900 ? <AlternateContent /> : <NotAlternateContent />}
            </Grid>
        </Box>
    );
};

export default Presentation;
