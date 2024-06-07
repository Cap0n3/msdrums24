import React from "react";
import seoData from "../data/seo.data.json";
import SEOBlock from "../components/seoBlock/SEOBlock";

const NewPage = () => {
    return (
        <>
            <SEOBlock seoData={seoData["newpage"]} />
            <div>
                <p>I'm a new page. Create my content here !</p>
            </div>
        </>
    );
};

export default NewPage;
