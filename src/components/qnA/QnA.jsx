import React, { useState } from "react";
import { useTheme, styled } from "@mui/material";
import RiseTitle from "../common/riseTitle/RiseTitle";
import Image from "../common/imgComponent/Image";
import { Container, Box, Typography } from "@mui/material";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { darken } from "polished";

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    "&:not(:last-child)": {
        borderBottom: 0,
    },
    "&::before": {
        display: "none",
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === "dark"
            ? "rgba(255, 255, 255, .05)"
            : "rgba(0, 0, 0, .03)",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
        transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const QnA = ({ questions, contrast = false }) => {
    const theme = useTheme();
    const [expanded, setExpanded] = useState("panel1");

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <>
            <Box
                component="section"
                py={4}
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    justifyContent: "center",
                    alignItems: { xs: "center", md: "flex-start" },
                    minHeight: "400px",
                    backgroundColor: contrast
                        ? darken(0.008, theme.palette.background.default)
                        : theme.palette.background.default,
                }}
            >
                <Container
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        p: 4,
                        border: "1px solid blue",
                    }}
                >
                    {/* <img
                        src="https://picsum.photos/600/600"
                        alt="FAQ"
                        width={600}
                        height={600}
                    /> */}
                    <Box sx={{ width: "90%" }}>
                        <Image
                            image="https://picsum.photos/600/600"
                            alt="FAQ"
                        />
                    </Box>
                </Container>
                <Container
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        p: 4,
                    }}
                >
                    <RiseTitle
                        title="Frequently Asked Questions"
                        subTitle="Here are some of the most common questions we get asked"
                    />
                    <Box
                        component={"div"}
                        sx={{
                            width: "100%",
                            px: { md: 0, lg: 4 },
                        }}
                    >
                        {questions.map((question, index) => (
                            <Accordion
                                key={index}
                                expanded={expanded === `panel${index + 1}`}
                                onChange={handleChange(`panel${index + 1}`)}
                            >
                                <AccordionSummary
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            color: theme.palette.text.primary,
                                            fontWeight: 600,
                                            fontSize: "1rem",
                                        }}
                                    >
                                        {question.question}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant="body1">
                                        {question.answer}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default QnA;
