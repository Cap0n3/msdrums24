import { FORM_REGEX } from "../../../../utils/FormRegex";

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
            pattern: { value: FORM_REGEX.nameRgx, message: "Invalid name, use only letters (A-Z, a-z)" },
        },
    },
    lastNameField: {
        id: "cForm_lname",
        name: "lname",
        label: "Last Name",
        type: "text",
        validation: {
            required: "Last Name is required",
            minLength: { value: 2, message: "Last Name is too short" },
            maxLength: { value: 50, message: "Last Name is too long" },
            pattern: { value: FORM_REGEX.nameRgx, message: "Invalid name, use only letters (A-Z, a-z)" },
        },
    },
    emailField: {
        id: "cForm_email",
        name: "email",
        label: "Email",
        type: "email",
        validation: {
            required: "Email is required",
            pattern: { value: FORM_REGEX.emailRgx, message: "Invalid email" },
        },
    },
    phoneField: {
        id: "cForm_phone",
        name: "phone",
        label: "Phone",
        type: "text",
        validation: {
            required: "Phone is required",
            pattern: { value: FORM_REGEX.phoneRgx, message: "Invalid phone number" },
        },
    },
    birthDateField: {
        id: "cForm_birthDate",
        name: "birthDate",
        label: "",
        type: "date",
        validation: {
            required: "Birthdate is required",
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
    planField: {
        id: "cForm_plan",
        name: "plan",
        label: "Plan",
        type: "select",
        validation: {
            required: "Plan is required",
        },
        options: [
            { value: "monthly", label: "Monthly" },
            { value: "yearly", label: "Yearly" },
        ],
    },
    dayOption1Field: {
        id: "cForm_dayOption1",
        name: "dayOption1",
        label: "Day",
        type: "select",
        validation: {
            required: "Day is required",
        },
        options: [
            { value: "monday", label: "Monday" },
            { value: "tuesday", label: "Tuesday" },
            { value: "wednesday", label: "Wednesday" },
            { value: "thursday", label: "Thursday" },
            { value: "friday", label: "Friday"}
        ],
    },
    hourOption1Field: {
        id: "cForm_hourOption1",
        name: "hourOption1",
        label: "Hour",
        type: "select",
        validation: {
            required: "Hour is required",
        },
        options: [
            { value: "10-11", label: "10:00 - 11:00" },
            { value: "11-12", label: "11:00 - 12:00" },
            { value: "12-13", label: "12:00 - 13:00" },
            { value: "13-14", label: "13:00 - 14:00" },
            { value: "14-15", label: "14:00 - 15:00" },
            { value: "15-16", label: "15:00 - 16:00" },
            { value: "16-17", label: "16:00 - 17:00" },
            { value: "17-18", label: "17:00 - 18:00" },
            { value: "18-19", label: "18:00 - 19:00" },
        ],
    },
    dayOption2Field: {
        id: "cForm_dayOption2",
        name: "dayOption2",
        label: "Day",
        type: "select",
        validation: {
            required: false,
        },
        options: [
            { value: "monday", label: "Monday" },
            { value: "tuesday", label: "Tuesday" },
            { value: "wednesday", label: "Wednesday" },
            { value: "thursday", label: "Thursday" },
            { value: "friday", label: "Friday"},
        ],
    },
    hourOption2Field: {
        id: "cForm_hourOption2",
        name: "hourOption2",
        label: "Hour",
        type: "select",
        validation: {
            required: false,
        },
        options: [
            { value: "10-11", label: "10:00 - 11:00" },
            { value: "11-12", label: "11:00 - 12:00" },
            { value: "12-13", label: "12:00 - 13:00" },
            { value: "13-14", label: "13:00 - 14:00" },
            { value: "14-15", label: "14:00 - 15:00" },
            { value: "15-16", label: "15:00 - 16:00" },
            { value: "16-17", label: "16:00 - 17:00" },
            { value: "17-18", label: "17:00 - 18:00" },
            { value: "18-19", label: "18:00 - 19:00" },
        ]
    },
    messageField: {
        id: "cForm_message",
        name: "message",
        label: "Message",
        type: "text",
        validation: {
            required: "Message is required",
            minLength: { value: 2, message: "Message is too short" },
            maxLength: { value: 5000, message: "Message is too long" },
            pattern: { value: FORM_REGEX.messageRgx, message: "Invalid message, use only letters/numbers and common punctuation" },
        },
    },
};
