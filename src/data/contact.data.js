import { FORM_REGEX } from "../utils/FormRegex";

// =============================== //
// ====== CONTACT PAGE TEXT ====== //
// =============================== //

export const contactTextData = {
    en: {
        title: "Get in touch",
        subTitle: "For all inquiries, please fill in the form below.",
        warning: {
            message:
                "Please note: for all registrations and trial classes, please complete the registration form.",
            link_text: "Go to registration form",
            link_url: "/inscription",
        },
    },
    fr: {
        title: "Contactez-moi",
        subTitle:
            "Pour toutes demandes de renseignement, merci de remplir le formulaire ci-dessous.",
        warning: {
            message:
                "Attention : pour toutes les inscriptions et les cours d’essais, merci de remplir le formulaire d'inscription.",
            link_text: "Aller au formulaire",
            link_url: "/inscription",
        },
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

export const directionTextData = {
    en: {
        title: "How to get there ?",
        subtitle: "Here are the simplest routes to take",
        address: "Chemin de la Gravière 8, 1227 Acacias, Switzerland",
        itineraries: [
            "Bus 11 and 80, Queue d'Arve stop + 2 minutes walking",
            "Tram 14, Jonction stop + 8 minutes walking",
        ],
    },
    fr: {
        title: "Comment venir ?",
        subtitle: "Voici les itinéraires les plus pratiques",
        address: "Chemin de la Gravière 8, 1227 Acacias, Suisse",
        itineraries: [
            "Bus 11 et 80, arrêt Queue d’Arve + 2 min de marche",
            "Tram 14 arrêt Jonction + 8 min de marche",
        ],
    },
};

// MAP COORDINATES
export const mapData = {
    latitude: 46.196813,
    longitude: 6.130437,
}


// =========================================== //
// ====== CONTACT FORM INPUTS DEFINITION ===== //
// =========================================== //

// Note : See README file in `components/common/forms` for more details

export const defaultValues = {
    fname: "",
    lname: "",
    phone: "",
    email: "",
    message: "",
};

export const formFields = {
    firstNameField: {
        en: {
            id: "contactForm_fname",
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
            id: "contactForm_fname",
            name: "fname",
            label: "Prénom",
            type: "text",
            validation: {
                required: "Veuillez entrer votre prénom",
                minLength: { value: 2, message: "Votre prénom est trop court" },
                maxLength: { value: 50, message: "Votre prénom est trop long" },
                pattern: {
                    value: FORM_REGEX.nameRgx,
                    message:
                        "Votre prénom est invalide, utilisez uniquement des lettres (A-Z, a-z)",
                },
            },
        },
    },
    lastNameField: {
        en: {
            id: "contactForm_lname",
            name: "lname",
            label: "Last Name",
            type: "text",
            validation: {
                required: "Please enter your last name",
                minLength: { value: 2, message: "Your last name is too short" },
                maxLength: { value: 50, message: "Your last name is too long" },
                pattern: {
                    value: FORM_REGEX.nameRgx,
                    message: "Invalid last name, use only letters (A-Z, a-z)",
                },
            },
        },
        fr: {
            id: "contactForm_lname",
            name: "lname",
            label: "Nom",
            type: "text",
            validation: {
                required: "Veuillez entrer votre nom",
                minLength: { value: 2, message: "Votre nom est trop court" },
                maxLength: { value: 50, message: "Votre nom est trop long" },
                pattern: {
                    value: FORM_REGEX.nameRgx,
                    message:
                        "Votre nom est invalide, utilisez uniquement des lettres (A-Z, a-z)",
                },
            },
        },
    },
    emailField: {
        en: {
            id: "contactForm_email",
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
            id: "contactForm_email",
            name: "email",
            label: "Email",
            type: "email",
            validation: {
                required: "Veuillez entrer votre email",
                pattern: {
                    value: FORM_REGEX.emailRgx,
                    message: "Votre email est invalide",
                },
            },
        },
    },
    phoneField: {
        en: {
            id: "contactForm_phone",
            name: "phone",
            label: "Phone",
            type: "text",
            validation: {
                required: false,
                pattern: {
                    value: FORM_REGEX.phoneRgx,
                    message: "Your phone number is invalid",
                },
            },
        },
        fr: {
            id: "contactForm_phone",
            name: "phone",
            label: "Téléphone",
            type: "text",
            validation: {
                required: false,
                pattern: {
                    value: FORM_REGEX.phoneRgx,
                    message: "Votre numéro de téléphone est invalide",
                },
            },
        },
    },
    messageField: {
        en: {
            id: "contactForm_message",
            name: "message",
            label: "Message",
            type: "text",
            validation: {
                required: "Please enter your message",
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
            id: "contactForm_message",
            name: "message",
            label: "Message",
            type: "text",
            validation: {
                required: "Veuillez entrer votre message",
                minLength: { value: 2, message: "Le message est trop court" },
                maxLength: { value: 5000, message: "Le message est trop long" },
                pattern: {
                    value: FORM_REGEX.messageRgx,
                    message:
                        "Votre message est invalide, utilisez uniquement des lettres/chiffres et une ponctuation courante",
                },
            },
        },
    },
};

// export const formFields = {
//     firstNameField: {
//         id: "contactForm_fname",
//         name: "fname",
//         label: "First Name",
//         type: "text",
//         validation: {
//             required: "First Name is required",
//             minLength: { value: 2, message: "First Name is too short" },
//             maxLength: { value: 50, message: "First Name is too long" },
//             pattern: {
//                 value: FORM_REGEX.nameRgx,
//                 message: "Invalid name, use only letters (A-Z, a-z)",
//             },
//         },
//     },
//     lastNameField: {
//         id: "contactForm_lname",
//         name: "lname",
//         label: "Last Name",
//         type: "text",
//         validation: {
//             required: "Last Name is required",
//             minLength: { value: 2, message: "Last Name is too short" },
//             maxLength: { value: 50, message: "Last Name is too long" },
//             pattern: {
//                 value: FORM_REGEX.nameRgx,
//                 message: "Invalid name, use only letters (A-Z, a-z)",
//             },
//         },
//     },
//     emailField: {
//         id: "contactForm_email",
//         name: "email",
//         label: "Email",
//         type: "email",
//         validation: {
//             required: "Email is required",
//             pattern: { value: FORM_REGEX.emailRgx, message: "Invalid email" },
//         },
//     },
//     phoneField: {
//         id: "contactForm_phone",
//         name: "phone",
//         label: "Phone",
//         type: "text",
//         validation: {
//             required: false,
//             pattern: {
//                 value: FORM_REGEX.phoneRgx,
//                 message: "Invalid phone number",
//             },
//         },
//     },
//     messageField: {
//         id: "contactForm_message",
//         name: "message",
//         label: "Message",
//         type: "text",
//         validation: {
//             required: "Message is required",
//             minLength: { value: 2, message: "Message is too short" },
//             maxLength: { value: 5000, message: "Message is too long" },
//             pattern: {
//                 value: FORM_REGEX.messageRgx,
//                 message:
//                     "Invalid message, use only letters/numbers and common punctuation",
//             },
//         },
//     },
// };
