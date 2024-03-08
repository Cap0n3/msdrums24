import HeroHeader from '../components/headers/HeroHeader';
import Typography from '@mui/material/Typography';

const HomePages = () => {
    return (
        <>
            <HeroHeader />
            <Typography color="secondary" variant="h6" gutterBottom>
                Home Page
            </Typography>
        </>
    );
}

export default HomePages;
