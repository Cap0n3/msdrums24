// CustomForm.js
import React, { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import {
    Button,
    Box,
    Grid,
    Fade,
    Slide,
    Alert,
} from "@mui/material";
import RiseTitle from "../../../common/riseTitle/RiseTitle";
import useEmailHandler from "../../../../hooks/useEmailHandler";
import { useInView } from "react-intersection-observer";
import { defaultValues, formFields } from "./customFormDefinitions";
import { TextInput, SelectInput } from "../formInputs/FormInputs";
import { LangContext } from "../../../../context/LangContext";

const CustomForm = ({ title="Custom Form", subtitle="Fill out the details" }) => {
    const serviceID = __EMAILJS_SERVICE_ID__;
    const templateID = __EMAILJS_TEMPLATE_CUSTOM_ID__;
    const publicKey = __EMAILJS_PUBLIC_KEY__;
    const [isVisible, setIsVisible] = useState(false);
    const { language } = useContext(LangContext);

    const {
        register,
        handleSubmit,
        reset,
        control,
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
        reset();
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
        <Box sx={{ width: "90%" }}>
            <RiseTitle title={title} subTitle={subtitle} />
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
                                    <Grid item xs={12} sm={6}>
                                        <TextInput
                                            field={formFields.firstNameField[language]}
                                            register={register}
                                            errors={errors}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextInput
                                            field={formFields.lastNameField[language]}
                                            register={register}
                                            errors={errors}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextInput
                                            field={formFields.emailField[language]}
                                            register={register}
                                            errors={errors}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextInput
                                            field={formFields.phoneField[language]}
                                            register={register}
                                            errors={errors}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextInput
                                            field={formFields.birthDateField[language]}
                                            register={register}
                                            errors={errors}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <SelectInput
                                            field={formFields.levelField[language]}
                                            control={control}
                                            errors={errors}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <SelectInput
                                            field={formFields.planField[language]}
                                            control={control}
                                            errors={errors}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <SelectInput
                                            field={formFields.dayOption1Field[language]}
                                            control={control}
                                            errors={errors}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <SelectInput
                                            field={formFields.hourOption1Field[language]}
                                            control={control}
                                            errors={errors}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <SelectInput
                                            field={formFields.dayOption2Field[language]}
                                            control={control}
                                            errors={errors}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <SelectInput
                                            field={formFields.hourOption2Field[language]}
                                            control={control}
                                            errors={errors}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextInput
                                            field={formFields.messageField[language]}
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
                        </Box>
                    </Slide>
                </Box>
            </Fade>
        </Box>
    );
};

export default CustomForm;
