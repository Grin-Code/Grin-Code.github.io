import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AppTheme from './theme/AppTheme';
import MainContent from './Pages/Main Page';

export default function Blog(props: { disableCustomTheme?: boolean }) {
    return (
        <AppTheme {...props}>
            <CssBaseline enableColorScheme />

            <Container
                maxWidth="lg"
                component="main"
                sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
            >
                <MainContent />
            </Container>
        </AppTheme>
    );
}
