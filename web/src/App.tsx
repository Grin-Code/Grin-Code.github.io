import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AppTheme from './theme/AppTheme';
import MainContent from './Pages/Main Page';
import IdobaSim from './Pages/Idoba.sim';
import { Routes, Route } from 'react-router-dom';
import Matchidoptera from './Pages/Matchidoptera';
import Peggle from './Pages/Peggle';
import FacialRecongition from './Pages/Facial recongition with linear regression';
import Snake from './Pages/Snake';

export default function Blog(props: { disableCustomTheme?: boolean }) {
    return (
        <AppTheme {...props}>
            <CssBaseline enableColorScheme />

            <Container
                maxWidth="lg"
                component="main"
                sx={{ display: 'flex', flexDirection: 'column', my: 4, gap: 4 }}
            >
                <Routes>
                    <Route path="/" element={<MainContent />} />
                    <Route path="/Idoba.sim" element={<IdobaSim />} />
                    <Route path="/Matchidoptera" element={<Matchidoptera />} />
                    <Route path="/Peggle" element={<Peggle />} />
                    <Route path="/Facial-Recongitions" element={<FacialRecongition />} />
                    <Route path="/Snek" element={<Snake />} />
                </Routes>
            </Container>
        </AppTheme>
    );
}
