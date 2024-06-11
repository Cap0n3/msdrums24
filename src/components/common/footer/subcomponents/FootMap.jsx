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

const FootMap = () => {
    const defaultProps = {
        center: {
            lat: 46.18085861206055,
            lng: 6.080923080444336,
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
                    lat={46.18085861206055}
                    lng={6.080923080444336}
                    text="My Marker"
                />
            </GoogleMapReact>
        </Box>
    );
};

export default FootMap;
