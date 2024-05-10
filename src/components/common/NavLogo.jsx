import { forwardRef } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import PlaceholderLogo from "../../assets/img/logos/PlaceholderLogo";

const NavLogo = forwardRef((props, ref) => {
    const theme = useTheme();
    const isXS = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box
            ref={ref}
            {...props}
            sx={{
                display: "flex",
                alignItems: "center",
                "&:hover": {
                    "& img": {
                        transform: "scale(1.1)",
                        transition: "transform 0.3s ease-in-out",
                    },
                },
            }}
        >
            <PlaceholderLogo
                heigth={isXS ? "30px" : "50px"}
                width={isXS ? "30px" : "50px"}
                color={theme.palette.secondary.main}
            />
            <Typography
                variant="h3"
                noWrap
                component={Link}
                to="/"
                sx={{
                    ml: 2,
                    color: theme.palette.secondary.main,
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    textDecoration: "none",
                }}
            >
                LOGO
            </Typography>
        </Box>
    );
});

export default NavLogo;
