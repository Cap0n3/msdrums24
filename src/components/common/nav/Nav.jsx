import { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import { lighten } from "polished";
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Container,
    Button,
    MenuItem,
    Menu,
    Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import NavLogo from "../NavLogo";
import LangMenu from "../languageChangers/LangMenu";
import website_layout from "../../../theme/layout";

/**
 * Nav component (Desktop and Mobile)
 */
const NavLink = ({ page, onClose }) => {
    const theme = useTheme();
    return (
        <MenuItem
            key={page.id}
            component={Link}
            to={page.link}
            onClick={onClose}
            sx={{
                "&:hover": {
                    backgroundColor: theme.palette.action.hover,
                },
                "& .MuiTypography-root": {
                    transition: "color 0.3s ease",
                    "&:hover": {
                        color: theme.palette.primary.main,
                    },
                },
            }}
        >
            <Typography
                component="span"
                variant="body1"
                textAlign="center"
                sx={{
                    color: theme.palette.text.primary,
                    padding: theme.spacing(1, 2),
                }}
            >
                {page.name}
            </Typography>
        </MenuItem>
    );
};

/**
 * Mobile Menu component
 */
const MobileMenu = ({
    anchorElNav,
    handleOpenNavMenu,
    handleCloseNavMenu,
    page_links,
}) => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                flexGrow: 0.33,
                display: { xs: "flex", md: "none" },
                //border: "1px solid red",
            }}
        >
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
                    vertical: "bottom",
                    horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: "block", md: "none" },
                    "& .MuiPaper-root": {
                        borderRadius: 2,
                        boxShadow: theme.shadows[5],
                        minWidth: 200,
                    },
                }}
            >
                {page_links.map((page) => (
                    <NavLink
                        key={page.id}
                        page={page}
                        onClose={handleCloseNavMenu}
                    />
                ))}
            </Menu>
        </Box>
    );
};

/**
 * Desktop Menu component
 */
const DesktopMenu = ({ page_links, handleCloseNavMenu }) => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
                gap: 2,
            }}
        >
            {page_links.map((page) => (
                <Button
                    key={page.id}
                    component={Link}
                    to={page.link}
                    onClick={handleCloseNavMenu}
                    sx={{
                        my: 2,
                        padding: "0.4rem .9rem",
                        textAlign: "center",
                        color: theme.palette.text.primary,
                        display: "block",
                        fontWeight: 400,
                        "&:hover": {
                            transform: "scale(1.1)",
                            transition: "transform 0.3s ease-in-out",
                        },
                    }}
                >
                    {page.name}
                </Button>
            ))}
            <LangMenu />
        </Box>
    );
};

/**
 * Main Nav component
 */
const Nav = ({ page_links }) => {
    const theme = useTheme();
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [isTransparent, setIsTransparent] = useState(true);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleScroll = () => {
        const threshold = 20;
        if (window.scrollY > threshold) {
            setIsTransparent(false);
        } else {
            setIsTransparent(true);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <AppBar
            position="fixed"
            sx={{
                display: "flex",
                justifyContent: "center",
                height: {
                    xs: `${website_layout.mobileNavHeight}px`,
                    md: `${website_layout.navHeight}px`,
                },
                backgroundColor: {
                    xs: isTransparent
                        ? "transparent"
                        : lighten(0.05, theme.palette.background.default),
                    md: theme.palette.background.default,
                },
                backgroundImage: "none",
                boxShadow: isTransparent ? "none" : theme.shadows[4],
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* === Logo medium screen and up === */}
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                        }}
                    >
                        <NavLogo title="" />
                    </Box>

                    <MobileMenu
                        anchorElNav={anchorElNav}
                        handleOpenNavMenu={handleOpenNavMenu}
                        handleCloseNavMenu={handleCloseNavMenu}
                        page_links={page_links}
                    />

                    {/* === Logo small screen === */}
                    <Box
                        sx={{
                            flexGrow: 0.33,
                            display: { xs: "flex", md: "none" },
                            justifyContent: "center",
                            //border: "1px solid blue",
                        }}
                    >
                        {!isTransparent && <NavLogo />}
                    </Box>
                    {/* === Box after Logo === */}
                    <Box
                        sx={{
                            display: { xs: "flex", md: "none" },
                            flexGrow: 0.33,
                            justifyContent: "flex-end",
                            //border: "1px solid green",
                        }}
                    >
                        <LangMenu dots />
                    </Box>
                    {/* === Desktop Menu === */}
                    <DesktopMenu
                        page_links={page_links}
                        handleCloseNavMenu={handleCloseNavMenu}
                    />
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Nav;
