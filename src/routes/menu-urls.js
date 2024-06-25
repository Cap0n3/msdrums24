// ==================== //
// === APPBAR PAGES === //
// ==================== //

const nav_link_ids = ["aboutNav", "qnaNav", "pricingNav", "enrollNav"];

export const nav_page_links = {
    en: [
        { id: nav_link_ids[0], name: "About", link: "/#about" },
        { id: nav_link_ids[2], name: "Pricing", link: "/#pricing" },
        { id: nav_link_ids[1], name: "Q&A", link: "/#qna" },
        { id: nav_link_ids[3], name: "Enroll", link: "/inscription" },
    ],
    fr: [
        { id: nav_link_ids[0], name: "À propos", link: "/#about" },
        { id: nav_link_ids[2], name: "Tarifs", link: "/#pricing" },
        { id: nav_link_ids[1], name: "Faq", link: "/#qna" },
        { id: nav_link_ids[3], name: "Inscription", link: "/inscription" },
    ],
};

// ======================== //
// === MAP FOOTER PAGES === //
// ======================== //

export const mapFooter_links = {
    en: [
        { id: "mapfooter-enroll", name: "Enroll", link: "/inscription" },
        { id: "mapfooter-plans", name: "Plans", link: "/formules" },
        { id: "mapfooter-contact", name: "Contact", link: "/contact" },
    ],
    fr: [
        { id: "mapfooter-enroll", name: "Inscription", link: "/inscription" },
        { id: "mapfooter-plans", name: "Formules", link: "/formules" },
        { id: "mapfooter-contact", name: "Contact", link: "/contact" },
    ],
};
