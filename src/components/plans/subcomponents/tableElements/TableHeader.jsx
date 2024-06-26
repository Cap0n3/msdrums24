import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { cellHeight } from "../../PlansSection";

const Header = ({ title }) => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexGrow: 1,
                backgroundColor: theme.palette.background.lightBeige,
                height: `${1.5 * cellHeight}px`,
                p: "15px",
                //border: "1px solid pink",
            }}
        >
            <Typography variant="h4" textAlign="center" fontWeight="bold">
                {title}
            </Typography>
        </Box>
    );
};

export default Header;
