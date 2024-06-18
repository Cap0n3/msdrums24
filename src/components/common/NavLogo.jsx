import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Icon } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MSLogo from "../../assets/img/logos/logo_msdrums.png";

const NavLogo = ({ title = "" }) => {
    const theme = useTheme();
    const isXS = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box
            component={Link}
            to="/"
            reloadDocument={true}
            sx={{
                display: "flex",
                alignItems: "center",
                "&:hover": {
                    "& img": {
                        transform: "scale(1.1)",
                        transition: "transform 0.3s ease-in-out",
                    },
                },
                textDecoration: "none",
            }}
        >
            <img
                src={MSLogo}
                alt="logo"
                width={isXS ? "60px" : "80px"}
                height={isXS ? "50px" : "67px"}
                loading="lazy"
            />
            <Typography
                variant="h3"
                noWrap
                sx={{
                    ml: 2,
                    color: theme.palette.secondary.main,
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    textDecoration: "none",
                }}
            >
                {!isXS && title}
            </Typography>
        </Box>
    );
};

export default NavLogo;
