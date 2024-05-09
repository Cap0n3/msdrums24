import React, { useEffect, useState } from "react";
import { Box, Fade, Slide, Typography } from "@mui/material";
import { useInView } from "react-intersection-observer";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import RiseTitle from "../../common/riseTitle/RiseTitle";
import { useTheme, styled } from "@mui/material";

// =========================== //
// === Accordion component === //
// =========================== //

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

// =========================== //
// === QnA Panel component === //
// =========================== //

const QnaPanel = ({ questions }) => {
    const theme = useTheme();
    const [expanded, setExpanded] = useState("panel1");
    const [isVisible, setIsVisible] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    useEffect(() => {
        if (inView) {
            setIsVisible(true);
        }
    }
    , [inView]);

    return (
        <Fade in={inView} timeout={1000}>
            <Box ref={ref} component={"section"}>
                <RiseTitle
                    title="Frequently Asked Questions"
                    subTitle="Here are some of the most common questions we get asked"
                />
                <Slide in={isVisible} direction="up" timeout={1000}>
                    <Box
                        component={"div"}
                        sx={{
                            width: "100%",
                            p: 4,
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
                </Slide>
            </Box>
        </Fade>
    );
};

export default QnaPanel;
