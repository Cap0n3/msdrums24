import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Box, Typography } from "@mui/material";

const ContactForm = () => {
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

    const onSubmit = (data) => {
        console.log(data);
        reset();
    };

    return (
        <Box sx={{ width: "100%", maxWidth: "550px", minWidth: "200px" }}>
            <Typography component="h1" variant="h5" gutterBottom>
                Contact Us
            </Typography>
            <Typography component="p" variant="body2" gutterBottom>
                We would love to hear from you. Please fill out the form below
                and we will get back to you as soon as possible.
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    autoComplete="name"
                    autoFocus
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
                <TextField
                    variant="outlined"
                    margin="normal"
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
                <TextField
                    variant="outlined"
                    margin="normal"
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
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                >
                    Submit
                </Button>
            </form>
        </Box>
    );
};

export default ContactForm;
