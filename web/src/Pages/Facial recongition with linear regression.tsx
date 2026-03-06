import { Box, Grid, Typography } from "@mui/material";
import Return from "../components/Return";
import { Link } from "react-router-dom";

export default function FacialRecongition() {
  const imageLocations = "/Facial-Recongition/"
    return(
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <Return />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>

        <Typography variant="h1" gutterBottom>
           Facial Recongition with Linear Regression
        </Typography>
       <Typography variant="h3">Descripion</Typography>
        <Typography></Typography>

        <Typography>you can get a copy of Facial Recognition with Linear Regression<Link target="_blank" to="https://github.com/Grin-Code/Facial-Recognition/releases/tag/Release" rel="noreferrer"> Here</Link></Typography>
        <Box>
          <Typography variant="h4"> Links</Typography>
          <br />
          <Link target="_blank" to="https://github.com/Grin-Code/Facial-Recognition" rel="noreferrer"> Facial Recognition with Linear Regression Github Repo</Link>
        </Box>
        <Typography variant="h2">Gallery</Typography>
        <Grid container spacing={2} justifyContent={'center'}>
          <Box>
            <img  src={`${process.env.PUBLIC_URL}${imageLocations}Start.png`} alt="Start"/>
            <Typography textAlign={'center'}>Start up</Typography>
          </Box>
          <Box>
            <img  src={`${process.env.PUBLIC_URL}${imageLocations}using.png`} alt="Usage"/>
            <Typography textAlign={'center'}>Using software</Typography>
          </Box>
        </Grid>
      </Box>
    </Box>
    );
}