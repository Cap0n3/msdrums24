import React from "react";
import {
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Paper,
} from "@mui/material";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import TramIcon from "@mui/icons-material/Tram";
import { useTheme } from "@mui/material/styles";

const DirectionsBox = ({itineraries}) => {
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
                        primary={itineraries[0]}
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
                        primary={itineraries[1]}
                    />
                </ListItem>
            </List>
        </Paper>
    );
};

export default DirectionsBox;
