import { Box, Grid, Typography } from "@mui/material";
import Return from "../components/Return";
import { Link } from "react-router-dom";

export default function Snake() {
   const imageLocations = "/Snek/"
    return(
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <Return />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>

        <Typography variant="h1" gutterBottom>
           Snek
        </Typography>
       
        <Typography variant="h3">Descripion</Typography>
        
        <Typography>you can get a copy of Snek <Link target="_blank" to="https://github.com/Grin-Code/Snek/releases/tag/Release" rel="noreferrer"> Here</Link></Typography>
        <Box>
          <Typography variant="h4"> Links</Typography>
          <br />
          <Link target="_blank" to="https://github.com/Grin-Code/Snek" rel="noreferrer"> Snek Github Repo</Link>
        </Box>
        <Typography variant="h2">Gallery</Typography>
        <Grid container spacing={2} justifyContent={'center'}>
          <Box>
            <img  src={`${process.env.PUBLIC_URL}${imageLocations}Start.png`} alt="Start"/>
            <Typography textAlign={'center'}>Start</Typography>
          </Box>
          <Box>
            <img  src={`${process.env.PUBLIC_URL}${imageLocations}Larger board size.png`} alt="Larger board size"/>
            <Typography textAlign={'center'}>Larger game board size</Typography>
          </Box>
          <Box>
            <img  src={`${process.env.PUBLIC_URL}${imageLocations}Player .png`} alt="Player "/>
            <Typography textAlign={'center'}>Player Controled</Typography>
          </Box>
           <Box>
            <img  src={`${process.env.PUBLIC_URL}${imageLocations}aStar.png`}alt="aStar "/>
            <Typography textAlign={'center'}> Inverse A* pathfinding</Typography>
          </Box>
        </Grid>
      </Box>
      </Box>
    );
}