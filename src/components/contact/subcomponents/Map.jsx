import React from "react";
import { Box } from "@mui/material";
import GoogleMapReact from "google-map-react";
import { useTheme } from "@mui/material/styles";
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Marker = ({ text }) => {
    return (
        <Box>
            <LocationOnIcon sx={{ color: "red", fontSize: "3rem", transform: "translate(-50%, -100%)" }} />
        </Box>
    );
}

const Map = ({ percentageWidth = 100 }) => {
    const theme = useTheme();
    const defaultProps = {
        center: {
            lat: 46.18085861206055,
            lng: 6.080923080444336,
        },
        zoom: 14,
    };

    return (
        <Box sx={{ width: `${percentageWidth}%`, paddingTop: `${percentageWidth}%`, position: "relative", }}>
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    overflow: "hidden",
                    borderRadius: theme.shape.borderRadius,
                }}
            >
                <Box sx={{ height: "100%", width: "100%" }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: __GOOGLE_MAPS_KEY__ }}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                    >
                        <Marker
                            lat={46.18085861206055}
                            lng={6.080923080444336}
                            text="My Marker"
                        />
                    </GoogleMapReact>
                </Box>
            </Box>
        </Box>
    );
};

export default Map;
