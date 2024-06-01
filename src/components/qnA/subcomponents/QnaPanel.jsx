import React, { useEffect, useState } from "react";
import { Box, Fade, Slide, Typography } from "@mui/material";
import { useInView } from "react-intersection-observer";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import RiseTitle from "../../common/riseTitle/RiseTitle";
import { useTheme, styled } from "@mui/material";
import { border, borderRadius } from "polished";

// =========================== //
// === Accordion component === //
// =========================== //

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    // "&:not(:last-child)": {
    //     borderBottom: 0,
    // },
    "&::before": {
        display: "none",
    },
    "&.Mui-expanded": {
        borderRadius: theme.shape.borderRadius,
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
    "&.Mui-expanded": {
        borderRadius: `${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0 0`,
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

// =========================== //
// === QnA Panel component === //
// =========================== //

const QnaPanel = ({ title, subtitle, questions }) => {
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
    }, [inView]);

    return (
        <Fade in={inView} timeout={2000}>
            <Box ref={ref} component={"section"}>
                <RiseTitle
                    title={title}
                    subTitle={subtitle}
                />
                <Slide in={isVisible} direction="up" timeout={1000}>
                    <Box
                        component={"div"}
                        sx={{
                            width: "100%",
                        }}
                    >
                        {questions.map((question, index) => (
                            <Accordion
                                key={index}
                                expanded={expanded === `panel${index + 1}`}
                                onChange={handleChange(`panel${index + 1}`)}
                                sx={{
                                    boxShadow: "0 0 10px rgba(0, 0, 0, .1)",
                                    my: 2,
                                }}
                            >
                                <AccordionSummary
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            color: theme.palette.text.primary,
                                        }}
                                    >
                                        {question.question}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography component="p" variant="body2">
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
