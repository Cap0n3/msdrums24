import React from "react";
import { Box } from "@mui/material";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <Box>{text}</Box>;

const Map = () => {
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627,
        },
        zoom: 11,
    };

    return (
        <Box sx={{ width: "100%", height: "400px" }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                />
            </GoogleMapReact>
        </Box>
    );
};

export default Map;
