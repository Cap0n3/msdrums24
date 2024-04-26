import React from 'react';
import { useTheme } from '@emotion/react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

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

const ImageCell = ({ image }) => {
    return (
        <Box sx={{ width: '100%', paddingTop: '100%', position: 'relative' }}>
            <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', borderRadius: 2 }}>
                <img src={image} alt="" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
            </Box>
        </Box>
    );
}

const TextCell = ({ title, description }) => {
    const theme = useTheme();
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start' }}>
            <Typography variant="h6" mt={2} fontWeight={600} sx={{ color: theme.palette.text.primary }}>
                {title}
            </Typography>
            <Typography variant="subtitle1" mt={2} sx={{ color: theme.palette.text.secondary }}>
                {description}
            </Typography>
        </Box>
    );
}

const Presentation = () => {
    const theme = useTheme();
    return (
        <Box sx={{ flexGrow: 1, backgroundColor: theme.palette.background.default, overflow: 'hidden' }}>
            <Grid container spacing={2} sx={{ border: "1px solid green" }}>
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
            </Grid>
        </Box>
    );
};

export default Presentation;