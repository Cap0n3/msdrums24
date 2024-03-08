import { forwardRef } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MGR_Logo from "../../assets/img/logos/MGR_logo.png"
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const NavLogo = forwardRef((props, ref) => {
    const theme = useTheme();
    const isXS = useMediaQuery(theme.breakpoints.down('md'));

    const Logo = styled('img')(
        ({theme}) => `
            color: ${theme.palette.text.secondary};
            width: 50px;
        ` 
    );

    return (
        <Box ref={ref} {...props} sx={{ 
            display: 'flex',
            alignItems: 'center' 
        }}>   
            <Logo src={MGR_Logo} alt="logo"  />
            <Typography
                variant={isXS ? 'h5' : 'h6'}
                color="secondary"
                noWrap
                component={Link}
                to="/"
                sx={{
                    mr: 2,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    textDecoration: 'none',
                }}
            >
                MGR
            </Typography>
        </Box>
    );
});

export default NavLogo;