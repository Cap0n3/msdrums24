import React from 'react';
import { Typography, TextField, Button, Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Stack from '@mui/material/Stack';
import MGR_Logo from "../../assets/img/logos/MGR_logo.png"
import styled from '@emotion/styled';
import NavLink from "../common/NavLink";
import { footer_pages_col1, footer_pages_col2 } from '../../routes/menu-urls';

const Footer = () => {
    
    const Logo = styled('img')(
        ({theme}) => `
            color: ${theme.palette.text.secondary};
            width: 50px;
        ` 
    );

    return (
        <Box component="footer" sx={{ 
            flexGrow: 1,
            bgcolor: 'transparent', 
            color: 'white', 
            padding: '2rem' 
        }}>
            <Grid container spacing={5} sx={{ paddingTop: '1rem',  paddingBottom: '1rem' }}>
                <Grid xs={12} md={4} sx={{ 
                        display: 'flex', 
                        flexDirection: 'column',
                        gap: '2rem',  
                    }}
                >
                    <Box sx={{ 
                            display: 'flex', 
                            gap: '0.2rem',
                            alignItems: 'center'
                        }}
                    >
                        <Box>
                            <Logo src={MGR_Logo} alt="logo"  />
                        </Box> 
                        <Typography variant="h5" sx={{ 
                                fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none', 
                            }}
                        >
                            MGR
                        </Typography>
                    </Box>
                    <Typography variant="body2" fontWeight="fontWeightLight">
                        MGR is a music school that offers guitar and piano lessons. We are a team of professional musicians who are passionate about teaching music.
                    </Typography> 
                </Grid>
                <Grid xs={6} md={2}>
                    <Typography variant="h6" gutterBottom>À propos</Typography>
                    <Stack spacing={.5}>
                        {footer_pages_col1.map((page) => (
                            <NavLink key={page.id} url={page.link} name={page.name} />
                        ))}
                    </Stack>
                </Grid>
                <Grid xs={6} md={2}>
                    <Typography variant="h6" gutterBottom>Support</Typography>
                    <Stack spacing={.5}>
                        {footer_pages_col2.map((page) => (
                            <NavLink key={page.id} url={page.link} name={page.name} />
                        ))}
                    </Stack>
                </Grid>
                <Grid xs={12} md={4}>
                    <Typography variant="h6" gutterBottom>Newsletter</Typography>
                    <Typography variant="body2" fontWeight="fontWeightLight">Sign up our newsletter to get news, information update or insight about guitar & piano.</Typography>
                    <Box component="form" sx={{ mt: 2 }}>
                        <TextField 
                            fullWidth 
                            id="newsletter-input" 
                            label="Entrer votre email" 
                            variant="outlined" 
                        />
                        <Button variant="contained" color="secondary" size="large" sx={{ mt: 1, width: '100%' }}>
                            Sign up
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;
