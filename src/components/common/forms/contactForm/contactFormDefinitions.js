import { FORM_REGEX } from "../../../../utils/FormRegex";

export const defaultValues = {
    fname: "",
    lname: "",
    phone: "",
    email: "",
    message: "",
};

export const formFields = {
    firstNameField: {
        id: "contactForm_fname",
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
        id: "contactForm_lname",
        name: "lname",
        label: "Last Name",
        type: "text",
        validation: {
            required: "Last Name is required",
            minLength: { value: 2, message: "Last Name is too short" },
            maxLength: { value: 50, message: "Last Name is too long" },
            pattern: {
                value: FORM_REGEX.nameRgx,
                message: "Invalid name, use only letters (A-Z, a-z)",
            },
        },
    },
    emailField: {
        id: "contactForm_email",
        name: "email",
        label: "Email",
        type: "email",
        validation: {
            required: "Email is required",
            pattern: { value: FORM_REGEX.emailRgx, message: "Invalid email" },
        },
    },
    phoneField: {
        id: "contactForm_phone",
        name: "phone",
        label: "Phone",
        type: "text",
        validation: {
            required: false,
            pattern: {
                value: FORM_REGEX.phoneRgx,
                message: "Invalid phone number",
            },
        },
    },
    messageField: {
        id: "contactForm_message",
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
};
