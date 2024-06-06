import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Box, Typography, Grid } from "@mui/material";
import RiseTitle from "../../common/riseTitle/RiseTitle";
import Socials from "../../common/socials/Socials";
import useEmailHandler from "../../../hooks/useEmailHandler";
import Alert from "@mui/material/Alert";

const ContactForm = () => {
    const serviceID = __EMAILJS_SERVICE_ID__;
    const templateID = __EMAILJS_TEMPLATE_ID__;
    const publicKey = __EMAILJS_PUBLIC_KEY__;

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

    return (
        <Box
            sx={{
                width: "90%",
                //maxWidth: "450px",
                //minWidth: "150px",
                //px: { xs: 4, md: 4 },
            }}
        >
            <RiseTitle title="Want to contact us ?" subTitle="Get in touch" />
            {/* <Typography component="p" variant="body2" gutterBottom>
                We would love to hear from you. Please fill out the form below
                and we will get back to you as soon as possible.
            </Typography> */}
            <form ref={formRef} onSubmit={handleSubmit(onSubmit)} noValidate>
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
                                    message: "Name is too short",
                                },
                            })}
                            error={!!errors.name}
                            helperText={errors.name ? errors.name.message : ""}
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
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Invalid email address",
                                },
                            })}
                            error={!!errors.email}
                            helperText={errors.email ? errors.email.message : ""}
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
                            rows={4}
                            {...register("message", {
                                required: "Message is required",
                            })}
                            error={!!errors.message}
                            helperText={errors.message ? errors.message.message : ""}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            {isWaitingServerResp ? "Sending..." : "Send"}
                        </Button>
                    </Grid>
                    {isSendSuccess === true && (
                        <Grid item xs={12}>
                            <Alert severity="success" sx={{ mt: 4 }}>
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
    );
};

export default ContactForm;
