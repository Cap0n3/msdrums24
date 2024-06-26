import React from "react";
import { Box, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

const InfoText = ({ text }) => (
    <Typography
        variant="caption"
        component="p"
        sx={{ mt: 1 }}
        fontWeight="bold"
    >
        <InfoIcon sx={{ verticalAlign: "middle", fontSize: "1rem", mr: 0.5 }} />
        {text}
    </Typography>
);

const AdditionalInfoComponent = ({ additionalInfos }) => {
    return (
        <Box sx={{ width: "100%", mt: 4 }}>
            <InfoText text={additionalInfos.free_trial} />
            <InfoText text={additionalInfos.all_year_round} />
            {Object.entries(additionalInfos.more_info).map(
                ([key, values], index) => (
                    <Box key={index} sx={{ mt: 1 }}>
                        <InfoText text={key} />
                        {values.map((value, idx) => (
                            <Typography
                                variant="caption"
                                component="p"
                                key={idx}
                                sx={{ ml: 2, mt: 0.5 }}
                            >
                                - {value}
                            </Typography>
                        ))}
                    </Box>
                ),
            )}
        </Box>
    );
};

export default AdditionalInfoComponent;
