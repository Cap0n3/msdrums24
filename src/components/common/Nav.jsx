import { useState, useEffect } from 'react';
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
import { appbar_pages } from '../../routes/menu-urls';
import MGR_Logo from "../../assets/img/logos/MGR_logo.png"
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import Zoom from '@mui/material/Zoom';


function Nav() {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [loaded, setLoaded] = useState(false);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const Logo = styled('img')(
        ({theme}) => `
            color: ${theme.palette.text.secondary};
            width: 50px;
        ` 
    );

    useEffect(() => {
        setLoaded(true);
        return () => {
            setLoaded(false);
        }
    }, []);

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Zoom in={loaded} style={{ transitionDelay: loaded ? '250ms' : '0ms' }}>
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
                            <Logo src={MGR_Logo} alt="logo"  />
                        </Box>
                    </Zoom>
                    <Zoom in={loaded} style={{ transitionDelay: loaded ? '250ms' : '0ms' }}>
                        <Box>
                            <Typography
                                variant="h6"
                                noWrap
                                component={Link}
                                to="/"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                MGR
                            </Typography>
                        </Box>
                    </Zoom>    
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
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
                        <Logo src={MGR_Logo} alt="logo"  />
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component={Link}
                        to="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        MGR
                    </Typography>
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