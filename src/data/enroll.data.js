import { FORM_REGEX } from "../utils/FormRegex";

// ============================== //
// ====== ENROLL PAGE TEXT ====== //
// ============================== //

export const enrollTextData = {
    en: {
        title: "Enroll",
        subtitle: "Enroll now !",
        warning:
            "The form below does not commit you in any way, it is simply a request for a trial lesson. I will contact you by email upon receipt of the form.",
    },
    fr: {
        title: "Inscription",
        subtitle: "Inscrivez-vous dès maintenant !",
        warning:
            "Le formulaire ci-dessous ne vous engage en rien, il est simplement une demande pour un cours d’essai. Je vous contacterai par email suite à la réception du formulaire.",
    },
};

export const formMessages = {
    en: {
        send: "Send",
        sending: "Sending...",
        success: "Email sent successfully!",
        error: "Failed to send email. Please try again later or contact support.",
    },
    fr: {
        send: "Envoyer",
        sending: "Envoi...",
        success: "Email envoyé avec succès !",
        error: "Echec de l'envoi de l'email. Veuillez reessayer plus tard ou contacter le support.",
    },
};

// =========================================== //
// ====== ENROLL FORM INPUTS DEFINITION ====== //
// =========================================== //

// Note : See README file in `components/common/forms` for more details

// === All options for select form fields (see below) === //
const LEVEL_OPTIONS = {
    en: [
        { value: "débutant", label: "Beginner" },
        { value: "intermédiaire", label: "Intermediate" },
        { value: "avancé", label: "Advanced" },
    ],
    fr: [
        { value: "débutant", label: "Debutant" },
        { value: "intermédiaire", label: "Intermediaire" },
        { value: "avancé", label: "Avance" },
    ],
};

const PLAN_OPTIONS = {
    en: [
        { value: "mensuel", label: "Monthly" },
        { value: "annuel", label: "Yearly" },
    ],
    fr: [
        { value: "mensuel", label: "Mensuel" },
        { value: "annuel", label: "Annuel" },
    ],
};

const DAY_OPTIONS = {
    en: [
        { value: "lundi", label: "Monday" },
        { value: "mardi", label: "Tuesday" },
        { value: "mercredi", label: "Wednesday" },
        { value: "jeudi", label: "Thursday" },
        { value: "vendredi", label: "Friday" },
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
    { value: "11h", label: "11:00" },
    { value: "11h30", label: "11:30" },
    { value: "12h", label: "12:00" },
    { value: "12h30", label: "12:30" },
    { value: "13h", label: "13:00" },
    { value: "13h30", label: "13:30" },
    { value: "14h", label: "14:00" },
    { value: "14h30", label: "14:30" },
    { value: "15h", label: "15:00" },
    { value: "15h30", label: "15:30" },
    { value: "16h", label: "16:00" },
    { value: "16h30", label: "16:30" },
    { value: "17h", label: "17:00" },
    { value: "17h30", label: "17:30" },
    { value: "18h", label: "18:00" },
    { value: "18h30", label: "18:30" },
    { value: "19h", label: "19:00" },
    { value: "19h30", label: "19:30" }
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
            id: "cForm_fname_en",
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
            id: "cForm_lname_en",
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
            id: "cForm_email_en",
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
            id: "cForm_phone_en",
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
            id: "cForm_birthDate_en",
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
            id: "cForm_level_en",
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
            id: "cForm_plan_en",
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
            id: "cForm_dayOption1_en",
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
            id: "cForm_hourOption1_en",
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
            id: "cForm_dayOption2_en",
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
            id: "cForm_hourOption2_en",
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
            id: "cForm_message_en",
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
