import React from "react";
import HeroHeader from "../components/headers/HeroHeader";
import Features from "../components/features/Features";
import Showcase from "../components/showcase/Showcase";
import Testimonials from "../components/testimonials/Testimonials";
import QnA from "../components/qnA/QnA";
import Pricing from "../components/pricing/Pricing";
import headerData from "../data/home/header.data.json";
import qnaData from "../data/home/qnA.data.json";
import showcaseData from "../data/home/showcase.data.json";
import priceCardsData from "../data/home/pricing.data.json";

import { Link } from "react-router-dom";

// const Navigation = () => {
//     return (
//         <nav>
//             <ul>
//                 <li><Link to="#hero">Home</Link></li>
//                 <li><Link to="#features">Features</Link></li>
//                 <li><Link to="#showcase">Showcase</Link></li>
//                 <li><Link to="#testimonials">Testimonials</Link></li>
//                 <li><Link to="#qna">Q&A</Link></li>
//                 <li><Link to="#pricing">Pricing</Link></li>
//             </ul>
//         </nav>
//     );
// };

// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// const ScrollToHash = () => {
//     const location = useLocation();

//     useEffect(() => {
//         console.log(location);
//         if (location.hash) {
//             const element = document.getElementById(location.hash.slice(1));
//             if (element) {
//                 const offset = 0; // Adjust this if you want to offset the scroll position
//                 const bodyRect = document.body.getBoundingClientRect().top;
//                 const elementRect = element.getBoundingClientRect().top;
//                 const elementPosition = elementRect - bodyRect;
//                 const offsetPosition = elementPosition - offset;

//                 window.scrollTo({
//                     top: offsetPosition,
//                     behavior: "smooth"
//                 });
//             }
//         }
//     }, [location]); // Triggered every time the location changes

//     return null;
// };


const HomePages = () => {
    return (
        <>
            {/* <Navigation />
            <ScrollToHash /> */}
            <HeroHeader
                title={headerData.header_title}
                description={headerData.header_description}
                call2Action={headerData.header_call2Action}
            />
            <Features
                identifier="features"
                title="Say Hello to great features!"
                subTitle="Here are some of the features that you'll love."
                contrast={true}
            />
            <Showcase identifier="showcase" data={showcaseData} />
            <Testimonials identifier="testimonials" title="What our customers say" contrast={true} />
            <QnA identifier="qna" questions={qnaData} />
            <Pricing identifier="pricing" cardsData={priceCardsData} contrast={true} />
        </>
    );
};

export default HomePages;
