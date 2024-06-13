import React, { useState, useEffect } from "react";
import { Box, Fade, Slide } from "@mui/material";
import GoogleMapReact from "google-map-react";
import { useTheme } from "@mui/material/styles";
import { useInView } from "react-intersection-observer";
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

/**
 * Main map component, displays a Google Map with a marker at the location of the company.
 *
 * @param {*} percentageWidth - Percentage width of the map (default: 100)
 */
const Map = ({ percentageWidth = 100 }) => {
    const theme = useTheme();
    const [isVisible, setIsVisible] = useState(false);

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
        delay: 200,
    });

    const defaultProps = {
        center: {
            lat: 46.18085861206055,
            lng: 6.080923080444336,
        },
        zoom: 14,
    };

    useEffect(() => {
        if (inView) {
            setIsVisible(true);
        }
    }, [inView]);

    return (
        <Fade in={inView} timeout={2000}>
            <Box
                ref={ref}
                sx={{
                    width: `${percentageWidth}%`,
                    paddingTop: `${percentageWidth}%`,
                    position: "relative",
                }}
            >
                <Slide direction="up" in={isVisible} timeout={500}>
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
                </Slide>
            </Box>
        </Fade>
    );
};

export default Map;
