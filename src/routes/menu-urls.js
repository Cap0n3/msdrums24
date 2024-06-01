// ==================== //
// === APPBAR PAGES === //
// ==================== //

const nav_link_ids = [
    "showcaseNav",
    "qnaNav",
    "pricingNav"
];

export const nav_page_links = {
    en: [
        { id: nav_link_ids[0], name: "Showcase", link: "/#showcase" },
        { id: nav_link_ids[1], name: "Q&A", link: "/#qna" },
        { id: nav_link_ids[2], name: "Pricing", link: "/#pricing" }
    ],
    fr: [
        { id: nav_link_ids[0], name: "Vitrine", link: "/#showcase" },
        { id: nav_link_ids[1], name: "FAQ", link: "/#qna" },
        { id: nav_link_ids[2], name: "Tarification", link: "/#pricing" }
    ]
};

// ==================== //
// === FOOTER PAGES === //
// ==================== //

// Column 1
const footer_link_ids_col1 = [
    "footer-about",
    "footer-method",
    "footer-location"
];

export const footer_links_col1 = {
    en: [
        { id: footer_link_ids_col1[0], name: "About", link: "/#showcase" },
        { id: footer_link_ids_col1[1], name: "Our philosophy", link: "/" },
        { id: footer_link_ids_col1[2], name: "Location", link: "/" }
    ],
    fr: [
        { id: footer_link_ids_col1[0], name: "À propos", link: "/#showcase" },
        { id: footer_link_ids_col1[1], name: "Notre philosophie", link: "/" },
        { id: footer_link_ids_col1[2], name: "Lieu", link: "/" }
    ]
};

// Column 2
const footer_link_ids_col2 = [
    "footer-pricing",
    "footer-terms",
    "footer-faq",
    "footer-contact"
];

export const footer_links_col2 = {
    en: [
        { id: footer_link_ids_col2[0], name: "Pricing", link: "/#pricing" },
        { id: footer_link_ids_col2[1], name: "Terms", link: "/" },
        { id: footer_link_ids_col2[2], name: "FAQ", link: "/#qna" },
        { id: footer_link_ids_col2[3], name: "Contact", link: "/" }
    ],
    fr: [
        { id: footer_link_ids_col2[0], name: "Tarifs", link: "/#pricing" },
        { id: footer_link_ids_col2[1], name: "Conditions", link: "/" },
        { id: footer_link_ids_col2[2], name: "FAQ", link: "/#qna" },
        { id: footer_link_ids_col2[3], name: "Contact", link: "/" }
    ]
};

