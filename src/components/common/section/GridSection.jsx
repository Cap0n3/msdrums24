import React from 'react';


const ResponsiveCell = ({ children, xs, sm, md, p, sx }) => (
    <Grid xs={xs} sm={sm} md={md} p={p} sx={sx}>
        {children}
    </Grid>
);

const GridSection = ({contents, spacing}) => {
    return (
        <Box component="section" py={4}>
            <Grid container spacing={spacing}>
                {contents.map((content, index) => (
                    <ResponsiveCell key={index} {...content} sm={12} md={6} p={4} />
                ))}
            </Grid>
        </Box>
    );
};

export default GridSection;