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
         <Typography>
          This a solo project produced for university
        </Typography>
       <Typography variant="h3">Descripion</Typography>
        <Typography>
          This project was part of a unit for build a little game solo were all the assests are produced by a single student, the game didn't need to be our own original idea, so I choose peggle a game were you hit pegs with a ball trying to break all the orange pegs in each level. In total there are 10 Levels
          with power ups such as super guide and multiball. By default the game will show the ball path to the first object hit wheresuper guide show direction until two objects are hit by the ball trajectory, in the original game it an instant effect that show the which when tryting to recreat at the time of working on this project I failed to recreate and made a different varent of the same effect.
          if I were to go back to worked on this project I'm sure I create the inital effect for the guide and super guide. Where multiball spawns extra ball when hit. At the bottom of each level there a moving bar going left to right, if a ball hit the top of this it will give the player retruns the ball to the ball
          count at the top left. Each level has a limited amount of balls per level to complete it, running out of ball on a level will mean you will fail and need to reset the level and try again. The game will enter the extream fever state once all the orange pegs of the level has been hit earning bonus points and 
          adding score buckets at the bottom giveing points value based on how close they are at the centre of the screen.
          <br/>
          <br/>
          The art in this project is pretty basic since the point was about the game mechanics and the playablity of the game we make as students, so during development of the game how it visual look was secondary to how polished the game mechanics were to play making the game fun rather than look pretty. 
        </Typography>
        <Typography>you can get a copy of Peggle <Link target="_blank" to="https://github.com/Grin-Code/Peggle/releases/tag/Release" rel="noreferrer">Here</Link></Typography>
        <Box>
          <Typography variant="h4">Links</Typography>
          <br />
          <Link target="_blank" to="https://github.com/Grin-Code/Peggle" rel="noreferrer">Peggle Github Repo</Link>
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