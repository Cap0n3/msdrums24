import Button from '@mui/material/Button';
import Nav from "../components/common/Nav";
import Footer from "../components/common/Footer";
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';

export default function Root() {
    return (
        <>
            <Nav />
            <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
                <Outlet />
            </Container>
            <Footer />
        </>
    );
} 