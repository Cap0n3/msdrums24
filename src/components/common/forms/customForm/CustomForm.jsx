import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import {
    TextField,
    Button,
    Box,
    Typography,
    Grid,
    Fade,
    Slide,
    MenuItem,
    FormControl,
    InputLabel,
    Select,
} from "@mui/material";
import RiseTitle from "../../../common/riseTitle/RiseTitle";
import useEmailHandler from "../../../../hooks/useEmailHandler";
import Alert from "@mui/material/Alert";
import { useInView } from "react-intersection-observer";
import { FORM_REGEX } from "../../../../utils/FormRegex";

const CustomForm = () => {
    const serviceID = __EMAILJS_SERVICE_ID__;
    const templateID = __EMAILJS_TEMPLATE_CUSTOM_ID__;
    const publicKey = __EMAILJS_PUBLIC_KEY__;
    const [isVisible, setIsVisible] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: { errors },
    } = useForm({
        defaultValues: {
            fname: "",
            lname: "",
            phone: "",
            email: "",
            birthDate: "",
            level: "",
            plan: "",
            dayOption1: "",
            hourOption1: "",
            dayOption2: "",
            hourOption2: "",
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
            <RiseTitle title="Custom Form" subTitle="Fill out the details" />
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
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="fname"
                                            label="First Name"
                                            name="fname"
                                            autoComplete="fname"
                                            {...register("fname", {
                                                required:
                                                    "First Name is required",
                                                minLength: {
                                                    value: 2,
                                                    message:
                                                        "First Name is too short",
                                                },
                                                maxLength: {
                                                    value: 50,
                                                    message:
                                                        "First Name is too long",
                                                },
                                                pattern: {
                                                    value: FORM_REGEX.nameRgx,
                                                    message:
                                                        "Invalid name, use only letters",
                                                },
                                            })}
                                            error={!!errors.fname}
                                            helperText={
                                                errors.fname
                                                    ? errors.fname.message
                                                    : ""
                                            }
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="lname"
                                            label="Last Name"
                                            name="lname"
                                            autoComplete="lname"
                                            {...register("lname", {
                                                required:
                                                    "Last Name is required",
                                                minLength: {
                                                    value: 2,
                                                    message:
                                                        "Last Name is too short",
                                                },
                                                maxLength: {
                                                    value: 50,
                                                    message:
                                                        "Last Name is too long",
                                                },
                                                pattern: {
                                                    value: FORM_REGEX.nameRgx,
                                                    message:
                                                        "Invalid name, use only letters",
                                                },
                                            })}
                                            error={!!errors.lname}
                                            helperText={
                                                errors.lname
                                                    ? errors.lname.message
                                                    : ""
                                            }
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="phone"
                                            label="Phone Number"
                                            name="phone"
                                            autoComplete="phone"
                                            {...register("phone", {
                                                required:
                                                    "Phone Number is required",
                                                minLength: {
                                                    value: 5,
                                                    message:
                                                        "Phone Number is too short",
                                                },
                                                maxLength: {
                                                    value: 50,
                                                    message:
                                                        "Phone Number is too long",
                                                },
                                                pattern: {
                                                    value: FORM_REGEX.phoneRgx,
                                                    message:
                                                        "Invalid phone number",
                                                },
                                            })}
                                            error={!!errors.phone}
                                            helperText={
                                                errors.phone
                                                    ? errors.phone.message
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
                                            id="birthDate"
                                            label="Birth Date"
                                            name="birthDate"
                                            type="date"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            {...register("birthDate", {
                                                required:
                                                    "Birth Date is required",
                                            })}
                                            error={!!errors.birthDate}
                                            helperText={
                                                errors.birthDate
                                                    ? errors.birthDate.message
                                                    : ""
                                            }
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <FormControl fullWidth>
                                            <InputLabel id="level">
                                                Level
                                            </InputLabel>
                                            <Controller
                                                name="level"
                                                control={control}
                                                defaultValue=""
                                                rules={{
                                                    required:
                                                        "Level is required",
                                                }}
                                                render={({ field }) => (
                                                    <Select
                                                        labelId="level"
                                                        label="Level"
                                                        {...field}
                                                        error={!!errors.level}
                                                    >
                                                        <MenuItem value="beginner">
                                                            Beginner
                                                        </MenuItem>
                                                        <MenuItem value="intermediate">
                                                            Intermediate
                                                        </MenuItem>
                                                        <MenuItem value="advanced">
                                                            Advanced
                                                        </MenuItem>
                                                    </Select>
                                                )}
                                            />
                                            {errors.level && (
                                                <Typography
                                                    variant="body2"
                                                    color="error"
                                                >
                                                    {errors.level.message}
                                                </Typography>
                                            )}
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <FormControl fullWidth>
                                            <InputLabel id="plan">
                                                Plan
                                            </InputLabel>
                                            <Controller
                                                name="plan"
                                                control={control}
                                                defaultValue=""
                                                rules={{
                                                    required:
                                                        "Plan is required",
                                                }}
                                                render={({ field }) => (
                                                    <Select
                                                        labelId="plan"
                                                        label="Plan"
                                                        {...field}
                                                        error={!!errors.plan}
                                                    >
                                                        <MenuItem value="individual">
                                                            Individual
                                                        </MenuItem>
                                                        <MenuItem value="pair">
                                                            Pair
                                                        </MenuItem>
                                                        <MenuItem value="a_la_carte">
                                                            À la carte
                                                        </MenuItem>
                                                    </Select>
                                                )}
                                            />
                                            {errors.plan && (
                                                <Typography
                                                    variant="body2"
                                                    color="error"
                                                >
                                                    {errors.plan.message}
                                                </Typography>
                                            )}
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <FormControl fullWidth>
                                            <InputLabel id="dayOption1">
                                                Preferred Day 1
                                            </InputLabel>
                                            <Controller
                                                name="dayOption1"
                                                control={control}
                                                defaultValue=""
                                                rules={{
                                                    required:
                                                        "Preferred Day 1 is required",
                                                }}
                                                render={({ field }) => (
                                                    <Select
                                                        labelId="dayOption1"
                                                        label="Preferred Day 1"
                                                        {...field}
                                                        error={
                                                            !!errors.dayOption1
                                                        }
                                                    >
                                                        <MenuItem value="monday">
                                                            Monday
                                                        </MenuItem>
                                                        <MenuItem value="tuesday">
                                                            Tuesday
                                                        </MenuItem>
                                                        <MenuItem value="wednesday">
                                                            Wednesday
                                                        </MenuItem>
                                                        <MenuItem value="thursday">
                                                            Thursday
                                                        </MenuItem>
                                                        <MenuItem value="friday">
                                                            Friday
                                                        </MenuItem>
                                                    </Select>
                                                )}
                                            />
                                            {errors.dayOption1 && (
                                                <Typography
                                                    variant="body2"
                                                    color="error"
                                                >
                                                    {errors.dayOption1.message}
                                                </Typography>
                                            )}
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <FormControl fullWidth>
                                            <InputLabel id="hourOption1">
                                                Preferred Hour 1
                                            </InputLabel>
                                            <Controller
                                                name="hourOption1"
                                                control={control}
                                                defaultValue=""
                                                rules={{
                                                    required:
                                                        "Preferred Hour 1 is required",
                                                }}
                                                render={({ field }) => (
                                                    <Select
                                                        labelId="hourOption1"
                                                        label="Preferred Hour 1"
                                                        {...field}
                                                        error={
                                                            !!errors.hourOption1
                                                        }
                                                    >
                                                        {Array.from(
                                                            { length: 18 },
                                                            (_, i) => (
                                                                <MenuItem
                                                                    key={i}
                                                                    value={`${11 + Math.floor(i / 2)}:${i % 2 === 0 ? "00" : "30"}`}
                                                                >
                                                                    {`${11 + Math.floor(i / 2)}:${i % 2 === 0 ? "00" : "30"}`}
                                                                </MenuItem>
                                                            ),
                                                        )}
                                                    </Select>
                                                )}
                                            />
                                            {errors.hourOption1 && (
                                                <Typography
                                                    variant="body2"
                                                    color="error"
                                                >
                                                    {errors.hourOption1.message}
                                                </Typography>
                                            )}
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <FormControl fullWidth>
                                            <InputLabel id="dayOption2">
                                                Preferred Day 2
                                            </InputLabel>
                                            <Controller
                                                name="dayOption2"
                                                control={control}
                                                defaultValue=""
                                                render={({ field }) => (
                                                    <Select
                                                        labelId="dayOption2"
                                                        label="Preferred Day 2"
                                                        {...field}
                                                        error={
                                                            !!errors.dayOption2
                                                        }
                                                    >
                                                        <MenuItem value="monday">
                                                            Monday
                                                        </MenuItem>
                                                        <MenuItem value="tuesday">
                                                            Tuesday
                                                        </MenuItem>
                                                        <MenuItem value="wednesday">
                                                            Wednesday
                                                        </MenuItem>
                                                        <MenuItem value="thursday">
                                                            Thursday
                                                        </MenuItem>
                                                        <MenuItem value="friday">
                                                            Friday
                                                        </MenuItem>
                                                    </Select>
                                                )}
                                            />
                                            {errors.dayOption2 && (
                                                <Typography
                                                    variant="body2"
                                                    color="error"
                                                >
                                                    {errors.dayOption2.message}
                                                </Typography>
                                            )}
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <FormControl fullWidth>
                                            <InputLabel id="hourOption2">
                                                Preferred Hour 2
                                            </InputLabel>
                                            <Controller
                                                name="hourOption2"
                                                control={control}
                                                defaultValue=""
                                                render={({ field }) => (
                                                    <Select
                                                        labelId="hourOption2"
                                                        label="Preferred Hour 2"
                                                        {...field}
                                                        error={
                                                            !!errors.hourOption2
                                                        }
                                                    >
                                                        {Array.from(
                                                            { length: 18 },
                                                            (_, i) => (
                                                                <MenuItem
                                                                    key={i}
                                                                    value={`${11 + Math.floor(i / 2)}:${i % 2 === 0 ? "00" : "30"}`}
                                                                >
                                                                    {`${11 + Math.floor(i / 2)}:${i % 2 === 0 ? "00" : "30"}`}
                                                                </MenuItem>
                                                            ),
                                                        )}
                                                    </Select>
                                                )}
                                            />
                                            {errors.hourOption2 && (
                                                <Typography
                                                    variant="body2"
                                                    color="error"
                                                >
                                                    {errors.hourOption2.message}
                                                </Typography>
                                            )}
                                        </FormControl>
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
                        </Box>
                    </Slide>
                </Box>
            </Fade>
        </Box>
    );
};

export default CustomForm;
