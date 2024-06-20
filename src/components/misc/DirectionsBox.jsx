import React from "react";
import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Paper,
} from "@mui/material";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import TramIcon from "@mui/icons-material/Tram";
import { useTheme } from "@mui/material/styles";

const DirectionsBox = () => {
    const theme = useTheme();
    return (
        <Paper
            elevation={3}
            sx={{
                padding: 2,
                width: "100%",
                mt: 4,
                borderRadius: theme.shape.borderRadius,
                backgroundColor: theme.palette.background.default,
            }}
        >
            {/* <Typography variant="h4" component="h4" sx={{ color: theme.palette.text.primary }} textAlign={"center"} gutterBottom>
                Comment venir ?
            </Typography> */}
            <List>
                <ListItem>
                    <ListItemIcon>
                        <DirectionsBusIcon />
                    </ListItemIcon>
                    <ListItemText
                        primaryTypographyProps={{
                            variant: "body2",
                            color: theme.palette.text.secondary,
                        }}
                        primary="Bus 11 et 80, arrêt Queue d’Arve + 2 min de marche"
                    />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <TramIcon />
                    </ListItemIcon>
                    <ListItemText
                        primaryTypographyProps={{
                            variant: "body2",
                            color: theme.palette.text.secondary,
                        }}
                        primary="Tram 14 arrêt Jonction + 8 min de marche"
                    />
                </ListItem>
            </List>
        </Paper>
    );
};

export default DirectionsBox;
