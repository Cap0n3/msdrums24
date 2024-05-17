import React from "react";
import { useTheme } from "@mui/material";
import { Container, Stack, Typography } from "@mui/material";
import IconLink from "./subcomponents/IconLink";
import data from "../../../data/socials.data.json";

const Socials = ({ marginTop = 4 }) => {
    const theme = useTheme();

    return (
        <Container
            maxWidth="300px"
            sx={{
                mt: marginTop,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
            }}
        >
            <Typography component="h2" variant="h3">
                Follow us
            </Typography>
            <Stack direction="row" spacing={2}>
                {data.socials.map((social, index) => (
                    <IconLink
                        key={index}
                        platform={social.platform}
                        url={social.url}
                    />
                ))}
            </Stack>
        </Container>
    );
};

export default Socials;
