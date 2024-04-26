import HeroHeader from '../components/headers/HeroHeader';
import Typography from '@mui/material/Typography';
import C2A_Banner1 from '../components/c2a/c2a_banner1/C2A_Banner1';
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
            <C2A_Banner1 />
        </>
    );
}

export default HomePages;
