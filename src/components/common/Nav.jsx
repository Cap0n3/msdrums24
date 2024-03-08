import { useState, useEffect, forwardRef } from 'react';
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
import NavLogo from './NavLogo';
import { appbar_pages } from '../../routes/menu-urls';
import { Link } from 'react-router-dom';
import Zoom from '@mui/material/Zoom';
import mgr_layout from '../../theme/layout';


function Nav() {
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
        <AppBar position="fixed" sx={{ display: 'flex', justifyContent: 'center', height: `${mgr_layout.navHeight}px` }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* Logo */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Zoom in={loaded} style={{ transitionDelay: loaded ? '250ms' : '0ms' }}>
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
                            <MenuIcon />
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
                                    <Typography textAlign="center">{page.name}</Typography>
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
                                    color: 'white', 
                                    display: 'block',
                                    fontWeight: 300, 
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