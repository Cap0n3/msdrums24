import React, { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Typography, Menu, MenuItem } from "@mui/material";
import { LangContext } from "../../../context/LangContext";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const LangMenu = ({ dots = false }) => {
    const { language, setLanguage } = useContext(LangContext);
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMenuItemClick = (lang) => {
        setLanguage(lang);
        handleClose();
    };

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    // border: "1px solid red",
                }}
                onClick={handleClick}
            >
                <Typography
                    variant="caption"
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        // px: 1,
                        // py: 0.5,
                        color: theme.palette.text.secondary,
                        // border: "1px solid orange"
                    }}
                >
                    {dots ? (
                        <MoreVertIcon fontSize="small" />
                    ) : (
                        <>
                            {language.toUpperCase()}
                            <ArrowDropDownIcon fontSize="small" />
                        </>
                    )}
                </Typography>
            </Box>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
            >
                <MenuItem onClick={() => handleMenuItemClick("fr")}>
                    FR
                </MenuItem>
                <MenuItem onClick={() => handleMenuItemClick("en")}>
                    EN
                </MenuItem>
            </Menu>
        </>
    );
};

export default LangMenu;
