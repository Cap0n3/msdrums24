import React from "react";
import { Box } from "@mui/material";
import GoogleMapReact from "google-map-react";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Marker = ({ text }) => {
    return (
        <Box>
            <LocationOnIcon
                sx={{
                    color: "red",
                    fontSize: "3rem",
                    transform: "translate(-50%, -100%)",
                }}
            />
        </Box>
    );
};

const FootMap = ({ latitude, longitude }) => {
    const defaultProps = {
        center: {
            lat: latitude,
            lng: longitude,
        },
        zoom: 14,
    };

    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
            }}
        >
            <GoogleMapReact
                bootstrapURLKeys={{ key: __GOOGLE_MAPS_KEY__ }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <Marker
                    lat={latitude}
                    lng={longitude}
                    text="My Marker"
                />
            </GoogleMapReact>
        </Box>
    );
};

export default FootMap;
