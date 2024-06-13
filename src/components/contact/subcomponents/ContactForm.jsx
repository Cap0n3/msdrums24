import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
    TextField,
    Button,
    Box,
    Typography,
    Grid,
    Fade,
    Slide,
} from "@mui/material";
import RiseTitle from "../../common/riseTitle/RiseTitle";
import Socials from "../../common/socials/Socials";
import useEmailHandler from "../../../hooks/useEmailHandler";
import Alert from "@mui/material/Alert";
import { useInView } from "react-intersection-observer";
import { FORM_REGEX } from "../../../utils/FormRegex";

const ContactForm = () => {
    const serviceID = __EMAILJS_SERVICE_ID__;
    const templateID = __EMAILJS_TEMPLATE_ID__;
    const publicKey = __EMAILJS_PUBLIC_KEY__;
    const [isVisible, setIsVisible] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    const {
        formRef,
        isWaitingServerResp,
        isSendSuccess,
        serverResponse,
        setIsSendSuccess,
        sendEmail,
    } = useEmailHandler(serviceID, templateID, publicKey);

    const onSubmit = async (data, event) => {
        await sendEmail(event);
        reset(); // Reset the form fields
    };

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
        delay: 200,
    });

    useEffect(() => {
        if (inView) {
            setIsVisible(true);
        }
    }, [inView]);

    return (
        <Box
            sx={{
                width: "90%",
            }}
        >
            <RiseTitle title="Want to contact us ?" subTitle="Get in touch" />
            {/* <Typography component="p" variant="body2" gutterBottom>
                We would love to hear from you. Please fill out the form below
                and we will get back to you as soon as possible.
            </Typography> */}
            <Fade in={inView} timeout={2000}>
                <Box ref={ref}>
                    <Slide direction="up" in={isVisible} timeout={500}>
                        <Box>
                            <form
                                ref={formRef}
                                onSubmit={handleSubmit(onSubmit)}
                                noValidate
                            >
                                <Grid container spacing={4}>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="name"
                                            label="Name"
                                            name="name"
                                            autoComplete="name"
                                            //autoFocus
                                            {...register("name", {
                                                required: "Name is required",
                                                minLength: {
                                                    value: 2,
                                                    message:
                                                        "Name is too short",
                                                },
                                                maxLength: {
                                                    value: 50,
                                                    message: "Name is too long",
                                                },
                                                pattern: {
                                                    value: FORM_REGEX.nameRgx,
                                                    message:
                                                        "Invalid name, use only letters",
                                                },
                                            })}
                                            error={!!errors.name}
                                            helperText={
                                                errors.name
                                                    ? errors.name.message
                                                    : ""
                                            }
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            autoComplete="email"
                                            {...register("email", {
                                                required: "Email is required",
                                                minLength: {
                                                    value: 2,
                                                    message:
                                                        "Email is too short",
                                                },
                                                maxLength: {
                                                    value: 50,
                                                    message:
                                                        "Email is too long",
                                                },
                                                pattern: {
                                                    value: FORM_REGEX.emailRgx,
                                                    message:
                                                        "Invalid email address",
                                                },
                                            })}
                                            error={!!errors.email}
                                            helperText={
                                                errors.email
                                                    ? errors.email.message
                                                    : ""
                                            }
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            name="message"
                                            label="Message"
                                            id="message"
                                            multiline
                                            rows={6}
                                            {...register("message", {
                                                required: "Message is required",
                                                minLength: {
                                                    value: 2,
                                                    message:
                                                        "Message is too short",
                                                },
                                                maxLength: {
                                                    value: 10000,
                                                    message:
                                                        "Message is too long",
                                                },
                                                pattern: {
                                                    value: FORM_REGEX.messageRgx,
                                                    message:
                                                        "Invalid message, use only letters/numbers and common punctuation",
                                                },
                                            })}
                                            error={!!errors.message}
                                            helperText={
                                                errors.message
                                                    ? errors.message.message
                                                    : ""
                                            }
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            color="primary"
                                        >
                                            {isWaitingServerResp
                                                ? "Sending..."
                                                : "Send"}
                                        </Button>
                                    </Grid>
                                    {isSendSuccess === true && (
                                        <Grid item xs={12}>
                                            <Alert
                                                severity="success"
                                                sx={{ mt: 4 }}
                                            >
                                                Email sent successfully!
                                            </Alert>
                                        </Grid>
                                    )}
                                    {isSendSuccess === false && (
                                        <Grid item xs={12}>
                                            <Alert
                                                severity="error"
                                                onClose={() => {
                                                    setIsSendSuccess(null);
                                                }}
                                                sx={{ mt: 4 }}
                                            >
                                                Failed to send email.
                                            </Alert>
                                        </Grid>
                                    )}
                                </Grid>
                            </form>
                            <Socials />
                        </Box>
                    </Slide>
                </Box>
            </Fade>
        </Box>
    );
};

export default ContactForm;
