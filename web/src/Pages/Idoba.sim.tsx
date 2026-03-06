import { Box, Typography } from "@mui/material";
import Return from "../components/Return";



export default function IdobaSim() {
    return(
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <Return />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>

        <Typography variant="h1" gutterBottom>
           Idoba.sim
        </Typography>
        <Typography></Typography>
      </Box>
    </Box>
    );
}