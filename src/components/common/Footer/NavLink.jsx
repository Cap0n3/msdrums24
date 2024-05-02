import { Link } from "react-router-dom";
import styled from "styled-components";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const NavLink = ({ url, name }) => {
    const theme = useTheme();

    return (
        <Link
            to={url}
            style={{
                textDecoration: "none",
            }}
        >
            <Typography
                variant="body2"
                fontWeight="fontWeightLight"
                sx={{ color: theme.palette.text.primary }}
            >
                {name}
            </Typography>
        </Link>
    );
};

export default NavLink;
