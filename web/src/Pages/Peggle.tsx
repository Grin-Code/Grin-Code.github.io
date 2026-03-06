import { Box, Grid, Typography } from "@mui/material";
import Return from "../components/Return";
import { Link } from "react-router-dom";


export default function Peggle() {
  const imageLocations = "/Peggle/"
    return(
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <Return />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>

        <Typography variant="h1" gutterBottom>
           Peggle
        </Typography>
       <Typography variant="h3">Descripion</Typography>
        
        <Typography>you can get a copy of Peggle <Link target="_blank" to="https://github.com/Grin-Code/Peggle/releases/tag/Release" rel="noreferrer"> Here</Link></Typography>
        <Box>
          <Typography variant="h4"> Links</Typography>
          <br />
          <Link target="_blank" to="https://github.com/Grin-Code/Peggle" rel="noreferrer"> Peggle Github Repo</Link>
        </Box>
        <Typography variant="h2">Gallery</Typography>
        <Grid container spacing={2} justifyContent={'center'}>
          <Box>
            <img  src={`${process.env.PUBLIC_URL}${imageLocations}Main Menu.png`} alt="Main Menu"/>
            <Typography textAlign={'center'}>Main Menu</Typography>
          </Box>
          <Box>
            <img  src={`${process.env.PUBLIC_URL}${imageLocations}Level Select.png`} alt="Level select"/>
            <Typography textAlign={'center'}>Level select</Typography>
          </Box>
          <Box>
            <img  src={`${process.env.PUBLIC_URL}${imageLocations}Levels.png`} width={800} height={800} alt="Levels"/>
            <Typography textAlign={'center'}>Levels</Typography>
          </Box>
        </Grid>
      </Box>
    </Box>
    );
}