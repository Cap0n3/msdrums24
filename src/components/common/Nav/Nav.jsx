import { useState, useEffect, forwardRef } from 'react';
import { useTheme } from '@mui/material/styles';
import { lighten } from 'polished';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import NavLogo from '../NavLogo';
import { appbar_pages } from '../../../routes/menu-urls';
import { Link } from 'react-router-dom';
import Zoom from '@mui/material/Zoom';
import website_layout from '../../../theme/layout';


function Nav() {
    const theme = useTheme();
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [loaded, setLoaded] = useState(false);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    useEffect(() => {
        setLoaded(true);
        return () => {
            setLoaded(false);
        }
    }, []);

    return (
        <AppBar 
            position="fixed"
            sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                height: `${website_layout.navHeight}px`,
                backgroundColor: lighten(0.05, theme.palette.background.default),
                backgroundImage: "none",
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* Logo */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Zoom in={loaded} style={{ transitionDelay: loaded ? '500ms' : '0ms' }}>
                            <NavLogo />
                        </Zoom>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon sx={{ color: theme.palette.text.primary }} />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {appbar_pages.map((page) => (
                                <MenuItem 
                                    key={page.id} 
                                    component={Link}
                                    to={page.link}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography textAlign="center" sx={{ color: theme.palette.text.primary }}>
                                        {page.name}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    {/* Logo small screen */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <Zoom in={loaded} style={{ transitionDelay: loaded ? '250ms' : '0ms' }}>
                            <NavLogo />
                        </Zoom>
                    </Box>
                    <Box sx={{ 
                        flexGrow: 1, 
                        display: { xs: 'none', md: 'flex' },
                        justifyContent: 'flex-end',
                        gap: 2     
                    }}>
                        {appbar_pages.map((page) => (
                            <Button
                                key={page.id}
                                component={Link}
                                to={page.link}
                                onClick={handleCloseNavMenu}
                                sx={{ 
                                    my: 2, 
                                    color: theme.palette.text.primary,
                                    display: 'block',
                                    fontWeight: 400,
                                    '&:hover': {
                                        transform: 'scale(1.1)',
                                        transition: 'transform 0.3s ease-in-out',
                                    }
                                }}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Nav;