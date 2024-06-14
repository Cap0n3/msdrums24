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
import RiseTitle from "../../riseTitle/RiseTitle";
import Socials from "../../socials/Socials";
import useEmailHandler from "../../../../hooks/useEmailHandler";
import Alert from "@mui/material/Alert";
import { useInView } from "react-intersection-observer";
import { defaultValues, formFields } from "./contactFormDefinitions";
import { TextInput } from "../formInputs/FormInputs";

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
    } = useForm({ defaultValues });

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
                                    <Grid item xs={12} md={6}>
                                        <TextInput
                                            field={formFields.firstNameField}
                                            register={register}
                                            errors={errors}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextInput
                                            field={formFields.lastNameField}
                                            register={register}
                                            errors={errors}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextInput
                                            field={formFields.emailField}
                                            register={register}
                                            errors={errors}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextInput
                                            field={formFields.phoneField}
                                            register={register}
                                            errors={errors}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextInput
                                            field={formFields.messageField}
                                            register={register}
                                            errors={errors}
                                            textarea
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
