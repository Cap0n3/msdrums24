import React from 'react';
import HeroHeader from '../components/headers/HeroHeader';
import Features from '../components/features/features';
import jsonData from '../data/home/header.json';


const HomePages = () => {

    return (
        <>
            <HeroHeader 
                title={jsonData.header_title} 
                description={jsonData.header_description} 
                call2Action={jsonData.header_call2Action} 
            />
            <Features />
        </>
    );
}

export default HomePages;
