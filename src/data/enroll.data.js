import { FORM_REGEX } from "../utils/FormRegex";

// ============================== //
// ====== ENROLL PAGE TEXT ====== //
// ============================== //

export const enrollTextData = {
    en: {
        title: "Enroll",
        subtitle: "Enroll now !",
    },
    fr: {
        title: "Inscription",
        subtitle: "Inscrivez-vous dès maintenant !",
    },
}

// =========================================== //
// ====== ENROLL FORM INPUTS DEFINITION ====== //
// =========================================== //

// Note : See README file in `components/common/forms` for more details

// === All options for select form fields (see below) === //
const LEVEL_OPTIONS = {
    en: [
        { value: "beginner", label: "Beginner" },
        { value: "intermediate", label: "Intermediate" },
        { value: "advanced", label: "Advanced" },
    ],
    fr: [
        { value: "debutant", label: "Debutant" },
        { value: "intermediaire", label: "Intermediaire" },
        { value: "avance", label: "Avance" },
    ],
};

const PLAN_OPTIONS = {
    en: [
        { value: "monthly", label: "Monthly" },
        { value: "yearly", label: "Yearly" },
    ],
    fr: [
        { value: "mensuel", label: "Mensuel" },
        { value: "annuel", label: "Annuel" },
    ],
};

const DAY_OPTIONS = {
    en: [
        { value: "monday", label: "Monday" },
        { value: "tuesday", label: "Tuesday" },
        { value: "wednesday", label: "Wednesday" },
        { value: "thursday", label: "Thursday" },
        { value: "friday", label: "Friday" },
    ],
    fr: [
        { value: "lundi", label: "Lundi" },
        { value: "mardi", label: "Mardi" },
        { value: "mercredi", label: "Mercredi" },
        { value: "jeudi", label: "Jeudi" },
        { value: "vendredi", label: "Vendredi" },
    ],
};

const HOUR_OPTIONS = [
    { value: "10-11", label: "10:00 - 11:00" },
    { value: "11-12", label: "11:00 - 12:00" },
    { value: "12-13", label: "12:00 - 13:00" },
    { value: "13-14", label: "13:00 - 14:00" },
    { value: "14-15", label: "14:00 - 15:00" },
    { value: "15-16", label: "15:00 - 16:00" },
    { value: "16-17", label: "16:00 - 17:00" },
    { value: "17-18", label: "17:00 - 18:00" },
    { value: "18-19", label: "18:00 - 19:00" },
];

// === Default values === //
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

// === Form fields === //
export const formFields = {
    firstNameField: {
        en: {
            id: "cForm_fname",
            name: "fname",
            label: "First Name",
            type: "text",
            validation: {
                required: "Please enter your first name",
                minLength: {
                    value: 2,
                    message: "Your first name is too short",
                },
                maxLength: {
                    value: 50,
                    message: "Your first name is too long",
                },
                pattern: {
                    value: FORM_REGEX.nameRgx,
                    message: "Invalid first name, use only letters (A-Z, a-z)",
                },
            },
        },
        fr: {
            id: "cForm_fname",
            name: "fname",
            label: "Prénom",
            type: "text",
            validation: {
                required: "Merci d'entrer votre prénom",
                minLength: { value: 2, message: "Votre prénom est trop court" },
                maxLength: { value: 50, message: "Votre prénom est trop long" },
                pattern: {
                    value: FORM_REGEX.nameRgx,
                    message:
                        "Prénom invalide, utilisez uniquement des lettres (A-Z, a-z)",
                },
            },
        },
    },
    lastNameField: {
        en: {
            id: "cForm_lname",
            name: "lname",
            label: "Last Name",
            type: "text",
            validation: {
                required: "Your last name is required",
                minLength: { value: 2, message: "Your last name is too short" },
                maxLength: { value: 50, message: "Your last name is too long" },
                pattern: {
                    value: FORM_REGEX.nameRgx,
                    message: "Invalid last name, use only letters (A-Z, a-z)",
                },
            },
        },
        fr: {
            id: "cForm_lname",
            name: "lname",
            label: "Nom",
            type: "text",
            validation: {
                required: "Merci d'entrer votre nom",
                minLength: { value: 2, message: "Votre nom est trop court" },
                maxLength: { value: 50, message: "Votre nom est trop long" },
                pattern: {
                    value: FORM_REGEX.nameRgx,
                    message:
                        "Nom invalide, utilisez uniquement des lettres (A-Z, a-z)",
                },
            },
        },
    },
    emailField: {
        en: {
            id: "cForm_email",
            name: "email",
            label: "Email",
            type: "email",
            validation: {
                required: "Please enter your email",
                pattern: {
                    value: FORM_REGEX.emailRgx,
                    message: "Your email is invalid",
                },
            },
        },
        fr: {
            id: "cForm_email",
            name: "email",
            label: "Email",
            type: "email",
            validation: {
                required: "Merci d'entrer votre email",
                pattern: {
                    value: FORM_REGEX.emailRgx,
                    message: "Votre email est invalide",
                },
            },
        },
    },
    phoneField: {
        en: {
            id: "cForm_phone",
            name: "phone",
            label: "Phone",
            type: "text",
            validation: {
                required: "Please enter your phone number",
                pattern: {
                    value: FORM_REGEX.phoneRgx,
                    message: "Your phone number is invalid",
                },
            },
        },
        fr: {
            id: "cForm_phone",
            name: "phone",
            label: "Téléphone",
            type: "text",
            validation: {
                required: "Merci d'entrer votre numéro de téléphone",
                pattern: {
                    value: FORM_REGEX.phoneRgx,
                    message: "Votre numéro de téléphone est invalide",
                },
            },
        },
    },
    birthDateField: {
        en: {
            id: "cForm_birthDate",
            name: "birthDate",
            label: "Birth Date",
            type: "date",
            validation: {
                required: "Please enter your birth date",
            },
        },
        fr: {
            id: "cForm_birthDate",
            name: "birthDate",
            label: "Date de naissance",
            type: "date",
            validation: {
                required: "Merci d'entrer votre date de naissance",
            },
        },
    },
    levelField: {
        en: {
            id: "cForm_level",
            name: "level",
            label: "Level",
            type: "select",
            validation: {
                required: "Please select your level",
            },
            options: LEVEL_OPTIONS["en"],
        },
        fr: {
            id: "cForm_level",
            name: "level",
            label: "Niveau",
            type: "select",
            validation: {
                required: "Merci de sélectionner votre niveau",
            },
            options: LEVEL_OPTIONS["fr"],
        },
    },
    planField: {
        en: {
            id: "cForm_plan",
            name: "plan",
            label: "Plan",
            type: "select",
            validation: {
                required: "Please select your plan",
            },
            options: PLAN_OPTIONS["en"],
        },
        fr: {
            id: "cForm_plan",
            name: "plan",
            label: "Formule",
            type: "select",
            validation: {
                required: "Merci de sélectionner votre plan",
            },
            options: PLAN_OPTIONS["fr"],
        },
    },
    dayOption1Field: {
        en: {
            id: "cForm_dayOption1",
            name: "dayOption1",
            label: "Day",
            type: "select",
            validation: {
                required: "Please select a day",
            },
            options: DAY_OPTIONS["en"],
        },
        fr: {
            id: "cForm_dayOption1",
            name: "dayOption1",
            label: "Jour",
            type: "select",
            validation: {
                required: "Merci de sélectionner un jour",
            },
            options: DAY_OPTIONS["fr"],
        },
    },
    hourOption1Field: {
        en: {
            id: "cForm_hourOption1",
            name: "hourOption1",
            label: "Hour",
            type: "select",
            validation: {
                required: "Please select an hour",
            },
            options: HOUR_OPTIONS,
        },
        fr: {
            id: "cForm_hourOption1",
            name: "hourOption1",
            label: "Heure",
            type: "select",
            validation: {
                required: "Veuillez sélectionner une heure",
            },
            options: HOUR_OPTIONS,
        },
    },
    dayOption2Field: {
        en: {
            id: "cForm_dayOption2",
            name: "dayOption2",
            label: "Day",
            type: "select",
            validation: {
                required: false,
            },
            options: DAY_OPTIONS["en"],
        },
        fr: {
            id: "cForm_dayOption2",
            name: "dayOption2",
            label: "Jour",
            type: "select",
            validation: {
                required: false,
            },
            options: DAY_OPTIONS["fr"],
        },
    },
    hourOption2Field: {
        en: {
            id: "cForm_hourOption2",
            name: "hourOption2",
            label: "Hour",
            type: "select",
            validation: {
                required: false,
            },
            options: HOUR_OPTIONS,
        },
        fr: {
            id: "cForm_hourOption2",
            name: "hourOption2",
            label: "Heure",
            type: "select",
            validation: {
                required: false,
            },
            options: HOUR_OPTIONS,
        },
    },
    messageField: {
        en: {
            id: "cForm_message",
            name: "message",
            label: "Message",
            type: "text",
            validation: {
                required: "Please enter a message",
                minLength: { value: 2, message: "Your message is too short" },
                maxLength: { value: 5000, message: "Your message is too long" },
                pattern: {
                    value: FORM_REGEX.messageRgx,
                    message:
                        "Your message is invalid, use only letters/numbers and common punctuation",
                },
            },
        },
        fr: {
            id: "cForm_message",
            name: "message",
            label: "Message",
            type: "text",
            validation: {
                required: "Merci d'écrire un message",
                minLength: { value: 2, message: "Message trop court" },
                maxLength: { value: 5000, message: "Message trop long" },
                pattern: {
                    value: FORM_REGEX.messageRgx,
                    message:
                        "Message invalide, utilisez uniquement des lettres/chiffres et la ponctuation courante",
                },
            },
        },
    },
};
