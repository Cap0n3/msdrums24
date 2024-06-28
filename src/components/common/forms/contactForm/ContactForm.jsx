import React, { useState, useEffect, useContext, useCallback, useRef } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button, Box, Grid, Fade, Slide } from "@mui/material";
import RiseTitle from "../../riseTitle/RiseTitle";
import WarningBox from "../../../common/warningBox/WarningBox";
import useEmailHandler from "../../../../hooks/useEmailHandler";
import Alert from "@mui/material/Alert";
import { useInView } from "react-intersection-observer";
import { defaultValues, formFields } from "../../../../data/contact.data";
import { LangContext } from "../../../../context/LangContext";
import { TextInput } from "../formInputs/FormInputs";
import ReCAPTCHA from "react-google-recaptcha";


const ContactForm = ({
    title = "Want to contact us ?",
    subTitle = "Get in touch",
    warning,
    formMessages,
}) => {
    const serviceID = __EMAILJS_SERVICE_ID__;
    const templateID = __EMAILJS_TEMPLATE_ID__;
    const publicKey = __EMAILJS_PUBLIC_KEY__;
    const [isVisible, setIsVisible] = useState(false);
    const { language } = useContext(LangContext);
    const captchaRef = useRef(null);
    const [recaptcha, setRecaptcha] = useState(null);
    const [isCaptchaVerified, setIsCaptchaVerified] = useState(null);

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

    // ReCAPTCHA callback
    const onChange = useCallback((value) => {
        setRecaptcha(value);
    }, []);

    const onSubmit = async (data, event) => {
        if (!recaptcha) {
            console.log("No captcha token");
            setIsCaptchaVerified(false);
            return;
        }
        setIsCaptchaVerified(true);
        await sendEmail(event); // Token is sent with the event
        reset(); // Reset the form fields
        captchaRef.current.reset(); // Reset the reCAPTCHA
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
            <RiseTitle title={title} subTitle={subTitle} />

            <WarningBox>
                {warning.message}{" "}
                <Link to={warning.link_url}>{warning.link_text}</Link>
            </WarningBox>

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
                                            field={
                                                formFields.firstNameField[
                                                language
                                                ]
                                            }
                                            register={register}
                                            errors={errors}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextInput
                                            field={
                                                formFields.lastNameField[
                                                language
                                                ]
                                            }
                                            register={register}
                                            errors={errors}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextInput
                                            field={
                                                formFields.emailField[language]
                                            }
                                            register={register}
                                            errors={errors}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextInput
                                            field={
                                                formFields.phoneField[language]
                                            }
                                            register={register}
                                            errors={errors}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextInput
                                            field={
                                                formFields.messageField[
                                                language
                                                ]
                                            }
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
                                                ? formMessages.sending
                                                : formMessages.send}
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                                        <ReCAPTCHA
                                            ref={captchaRef}
                                            sitekey="6Ld6swMqAAAAANsH8f5rrxzyJW_Cym8YboLNL3ab"
                                            onChange={onChange}
                                            hl="fr"
                                        />
                                    </Grid>
                                    {isSendSuccess === true && (
                                        <Grid item xs={12}>
                                            <Alert
                                                severity="success"
                                            >
                                                {formMessages.success}
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
                                            >
                                                {formMessages.error}
                                            </Alert>
                                        </Grid>
                                    )}
                                    {isCaptchaVerified === false && (
                                        <Grid item xs={12}>
                                            <Alert
                                                severity="warning"
                                                onClose={() => {setIsCaptchaVerified(null)}}
                                            >
                                                {language === "fr" ? "Veuillez valider le captcha" : "You need to validate the captcha"}
                                            </Alert>
                                        </Grid>
                                    )}
                                </Grid>
                            </form>
                        </Box>
                    </Slide>
                </Box>
            </Fade>
        </Box>
    );
};

export default ContactForm;
