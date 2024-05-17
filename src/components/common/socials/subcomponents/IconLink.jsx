import React from 'react';
import { useTheme } from "@mui/material";
import { Box } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from '@mui/icons-material/Instagram';


const IconLink = ({ platform, url }) => {
    const theme = useTheme();

    const socials = [
        {
            name: "Facebook",
            icon: <FacebookIcon fontSize="large" htmlColor={theme.palette.secondary.main} />,
        },
        {
            name: "Twitter",
            icon: <XIcon fontSize="large" htmlColor={theme.palette.secondary.main} />,
        },
        {
            name: "LinkedIn",
            icon: <LinkedInIcon fontSize="large" htmlColor={theme.palette.secondary.main} />,
        },
        {
            name: "Instagram",
            icon: <InstagramIcon fontSize="large" htmlColor={theme.palette.secondary.main} />,
        },
    ];

    const findIcon = (platform) => {
        switch (platform) {
            case "Facebook":
                return socials[0].icon;
            case "Twitter":
                return socials[1].icon;
            case "LinkedIn":
                return socials[2].icon;
            case "Instagram":
                return socials[3].icon;
            default:
                return null;
        }
    }

    return (

        <Box sx={{
            "&:hover": {
                transform: "scale(1.1)",
                transition: "transform 0.5s",
            },
        }}>
            <a href={url} target="_blank" rel="noreferrer">
                {findIcon(platform)}
            </a>
        </Box>
    );
};

export default IconLink;