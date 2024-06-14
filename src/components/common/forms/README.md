# Documentation for Custom Form Implementation <!-- omit in toc -->

## Overview <!-- omit in toc -->

This documentation details the implementation of a custom form using React and Material-UI, including form definition, input component creation, and form submission handling.

-   [Dependencies](#dependencies)
-   [Form Definition](#form-definition)
    -   [Default Values](#default-values)
    -   [Form Fields](#form-fields)
        -   [First method](#first-method)
        -   [Second method](#second-method)
-   [Form Input Components](#form-input-components)
    -   [TextInput Component](#textinput-component)
    -   [SelectInput Component](#selectinput-component)
-   [Form Creation](#form-creation)
    -   [CustomForm Component](#customform-component)
        -   [Implementation for first method](#implementation-for-first-method)
        -   [Implementation for second method](#implementation-for-second-method)
-   [Conclusion](#conclusion)

## Dependencies

-   [Material-UI](https://mui.com/material-ui/)
-   [React-Hook-Form](https://react-hook-form.com/)

## Form Definition

The form definition consists of two main parts:

1. Default Values
2. Form Fields

### Default Values

```javascript
// formDefinitions.js

export const defaultValues = {
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
};
```

The `defaultValues` object contains initial values for each form field. This ensures the form starts with empty or predefined values.

### Form Fields

#### First method

This method is more intuitive and gives a greater control on the input fields (see below in `MyForm.jsx`) :

```js
export const formFields = {
    firstNameField: {
        id: "cForm_fname",
        name: "fname",
        label: "First Name",
        type: "text",
        validation: {
            required: "First Name is required",
            minLength: { value: 2, message: "First Name is too short" },
            maxLength: { value: 50, message: "First Name is too long" },
            pattern: {
                value: FORM_REGEX.nameRgx,
                message: "Invalid name, use only letters (A-Z, a-z)",
            },
        },
    },
    lastNameField: {
        id: "cForm_lname",
        name: "lname",
        label: "Last Name",
        type: "text",
        validation: {
            required: false, // This one is not required
            minLength: { value: 2, message: "Last Name is too short" },
            maxLength: { value: 50, message: "Last Name is too long" },
            pattern: {
                value: FORM_REGEX.nameRgx,
                message: "Invalid name, use only letters (A-Z, a-z)",
            },
        },
    },
    levelField: {
        id: "cForm_level",
        name: "level",
        label: "Level",
        type: "select",
        validation: {
            required: "Level is required",
        },
        options: [
            { value: "beginner", label: "Beginner" },
            { value: "intermediate", label: "Intermediate" },
            { value: "advanced", label: "Advanced" },
        ],
    },
    // This is a textarea (see Form.jsx for definition)
    messageField: {
        id: "cForm_message",
        name: "message",
        label: "Message",
        type: "text",
        validation: {
            required: "Message is required",
            minLength: { value: 2, message: "Message is too short" },
            maxLength: { value: 5000, message: "Message is too long" },
            pattern: {
                value: FORM_REGEX.messageRgx,
                message:
                    "Invalid message, use only letters/numbers and common punctuation",
            },
        },
    },
    // Add other fields similarly...
};
```

#### Second method

Use this method if you want to loop through the fields and create inputs in a map() function in `MyForm.jsx` :

```javascript
// formDefinitions.js

export const formFields = [
    {
        id: "cForm_fname",
        name: "fname",
        label: "First Name",
        type: "text",
        validation: {
            required: "First Name is required",
            minLength: { value: 2, message: "First Name is too short" },
            maxLength: { value: 50, message: "First Name is too long" },
            pattern: {
                value: FORM_REGEX.nameRgx,
                message: "Invalid name, use only letters (A-Z, a-z)",
            },
        },
    },
    {
        id: "cForm_lname",
        name: "lname",
        label: "Last Name",
        type: "text",
        validation: {
            minLength: { value: 2, message: "Last Name is too short" },
            maxLength: { value: 50, message: "Last Name is too long" },
            pattern: {
                value: FORM_REGEX.nameRgx,
                message: "Invalid name, use only letters (A-Z, a-z)",
            },
        },
    },
    {
        id: "cForm_level",
        name: "level",
        label: "Level",
        type: "select",
        validation: {
            required: "Level is required",
        },
        options: [
            { value: "beginner", label: "Beginner" },
            { value: "intermediate", label: "Intermediate" },
            { value: "advanced", label: "Advanced" },
        ],
    },
    // Additional fields can be added similarly...
];
```

The `formFields` array defines each form field's properties:

-   `id`: Unique identifier for the field.
-   `name`: Name attribute used for form submission.
-   `label`: Label text displayed for the field.
-   `type`: Field type (e.g., `text`, `select`).
-   `validation`: Validation rules including required, minLength, maxLength, and pattern.
-   `options`: Available options for select fields.

## Form Input Components

Two React components are created for handling text inputs and select inputs.

### TextInput Component

```javascript
// FormInput.jsx

import React from "react";
import { TextField } from "@mui/material";

export const TextInput = ({ field, textarea = false, register, errors }) => (
    <TextField
        variant="outlined"
        required={!!field.validation.required}
        fullWidth
        id={field.id}
        label={field.label}
        name={field.name}
        type={field.type || "text"}
        multiline={textarea} // for textarea
        minRows={textarea ? 6 : ""} // for textarea
        {...register(field.name, field.validation)}
        error={!!errors[field.name]}
        helperText={errors[field.name] ? errors[field.name].message : ""}
        aria-invalid={!!errors[field.name]}
        aria-describedby={field.name + "-error"}
        aria-required={!!field.validation.required}
        aria-errormessage={errors[field.name] ? errors[field.name].message : ""}
    />
);
```

The `TextInput` component:

-   Uses `TextField` from Material-UI.
-   Receives `field`, `register`, and `errors` as props.
-   Registers the field with validation rules.
-   Displays error messages and accessibility attributes.

### SelectInput Component

```javascript
// FormInput.jsx

import React from "react";
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Typography,
} from "@mui/material";
import { Controller } from "react-hook-form";

export const SelectInput = ({ field, control, errors }) => (
    <FormControl required={!!field.validation.required} fullWidth>
        <InputLabel id={field.name}>{field.label}</InputLabel>
        <Controller
            name={field.name}
            control={control}
            defaultValue=""
            rules={field.validation}
            render={({ field: controllerField }) => (
                <Select
                    id={field.id}
                    labelId={field.name}
                    label={field.label}
                    {...controllerField}
                    error={!!errors[field.name]}
                >
                    {field.options.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
            )}
        />
        {errors[field.name] && (
            <Typography variant="body2" color="error">
                {errors[field.name].message}
            </Typography>
        )}
    </FormControl>
);
```

The `SelectInput` component:

-   Uses `FormControl`, `InputLabel`, `Select`, `MenuItem`, and `Typography` from Material-UI.
-   Utilizes `Controller` from `react-hook-form` to manage the field.
-   Displays error messages and accessibility attributes.

## Form Creation

### CustomForm Component

#### Implementation for first method

```jsx
// CustomForm.js
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Box, Grid, Alert, Typography } from "@mui/material";
import useEmailHandler from "../../../../hooks/useEmailHandler";
import { defaultValues, formFields } from "../formInputs/formDefinitions";
import { TextInput, SelectInput } from "../formInputs/FormInputs";

const CustomForm = () => {
    const serviceID = __EMAILJS_SERVICE_ID__;
    const templateID = __EMAILJS_TEMPLATE_CUSTOM_ID__;
    const publicKey = __EMAILJS_PUBLIC_KEY__;

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
        //await sendEmail(event);

        console.log(data); // FOR TESTING
        setIsSendSuccess(true); // FOR TESTING

        reset();
    };

    return (
        <Box sx={{ width: "90%" }}>
            <Box>
                <Box>
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit(onSubmit)}
                        noValidate
                    >
                        <Grid container spacing={4}>
                            <Grid item xs={12}>
                                <TextInput
                                    field={formFields.firstNameField}
                                    register={register}
                                    errors={errors}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextInput
                                    field={formFields.lastNameField}
                                    register={register}
                                    errors={errors}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <SelectInput
                                    field={formFields.levelField}
                                    control={control}
                                    errors={errors}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextInput
                                    field={formFields.messageField}
                                    register={register}
                                    errors={errors}
                                    textarea // Thid is a textarea
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
                </Box>
            </Box>
        </Box>
    );
};

export default CustomForm;
```

#### Implementation for second method

```jsx
// MyForm.jsx

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Box, Grid, Alert, Typography } from "@mui/material";
import useEmailHandler from "../../../../hooks/useEmailHandler";
import { defaultValues, formFields } from "../formInputs/formDefinitions";
import { TextInput, SelectInput } from "../formInputs/FormInputs";

const CustomForm = () => {
    const serviceID = __EMAILJS_SERVICE_ID__;
    const templateID = __EMAILJS_TEMPLATE_CUSTOM_ID__;
    const publicKey = __EMAILJS_PUBLIC_KEY__;

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
        //await sendEmail(event);
        console.log(data); // FOR TESTING
        setIsSendSuccess(true); // FOR TESTING
        reset();
    };

    return (
        <Box sx={{ width: "90%" }}>
            <Box>
                <Box>
                    <Box>
                        <form
                            ref={formRef}
                            onSubmit={handleSubmit(onSubmit)}
                            noValidate
                        >
                            <Grid container spacing={4}>
                                {formFields.map((field) => (
                                    <Grid item xs={12} key={field.id}>
                                        {field.type === "select" ? (
                                            <SelectInput
                                                field={field}
                                                control={control}
                                                errors={errors}
                                            />
                                        ) : (
                                            <TextInput
                                                field={field}
                                                register={register}
                                                errors={errors}
                                            />
                                        )}
                                    </Grid>
                                ))}
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
                </Box>
            </Box>
        </Box>
    );
};

export default CustomForm;
```

The `CustomForm` component:

-   Initializes the form with `useForm` from `react-hook-form`.
-   Uses the `useEmailHandler` hook for handling email sending.
-   Defines the `onSubmit` function for form submission.
-   Renders form fields dynamically based on the `formFields` array.
-   Displays success or error alerts based on the form submission status.

## Conclusion

This documentation provides a comprehensive overview of the custom form implementation, detailing the form definition, input components, and form creation process. The form is built using React and Material-UI, leveraging `react-hook-form` for form management and validation.
