import { Link } from 'react-router-dom';
import styled from "styled-components";
import dark_palette from '../../theme/palette';
import { Typography } from '@mui/material';
import { darktheme } from '../../theme/themes';

const linkStyle = {
    textDecoration: "none",
    color: darktheme.palette.secondary.main,
};

const NavLink = ({url, name}) => {
    return (
        <Link to={url} style={linkStyle}>
            <Typography variant="body2" fontWeight="fontWeightLight">
                {name}
            </Typography>
        </Link>
    );
}

export default NavLink;