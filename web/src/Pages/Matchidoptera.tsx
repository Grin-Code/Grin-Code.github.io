import { Box, Grid, Typography } from "@mui/material";
import Return from "../components/Return";
import { Link } from "react-router-dom";

export default function Matchidoptera() {
  const imageLocations = "/Matchidoptera/"
    return(
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <Return />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>

        <Typography variant="h1" gutterBottom>
           Matchidoptera
        </Typography>
        <Box>
          <Typography variant="h4">Team members</Typography>
          <Typography>
            The UI and 3D modeling by Snow Tanjaya.
            <br />
            Programming by Dylan Burgess.
          </Typography>
        </Box>
        <Typography variant="h3">Descripion</Typography>
        <Typography>
          Machidoptera is a small game that was made during GGJ 2026 (Global Game jam). The theme for the game jam was masks, with this my partner and i decided to go make a game using the idea of butterfly masks which they use to hide from preditors.
        </Typography>
        <Typography> 
          The time restraint for the game jam was 48 hours to design, plan and build the entire game from scratch, we decieded to build the game using the Unity game engine due to it being familiar to us. Due to the time constraint and other engagements we had less that 24 hours to produce the game
        </Typography>
        <Typography>
          Matchidoptera is a simple match 3 game were the player need to match certain amount of butterfly species together to win the game. we got 3 species local to Australia WA region, and planned for many more to be added. 
        </Typography>

        <Typography variant="h3">Gameplay</Typography>
        <Typography>
          Machidoptera is a match 3 game as base mechanic with matching 3 butterflys of the same species together to clear level goal targets. 
          With planes on adding variable sizes to the butterfly based on their real life size based one of three main classifcations of butterfly sizes of small, medium and large, with each size taking up different tile amounts in the game where small is a quater tilem, medium the default and large take up 4 tiles.
          Adding difficulty to matching the species the differnt species. The spawning of the butterfl speceis is randomly generated with weighted generation so certain butterfly speceis are rarer to find than others
          There is also planes to have a butterfly collections with all the butterflys species that are found in the game, telling the player real world information about each butterfly and showing male and female differeneces if any for that given species.
          we also wanted to have follage tiles that will add difculity to the game, on top of this we also planned a hard mode where butterfly of the same species and gender can be match for the target goal. 
        </Typography>
        
        <Typography>you can get a copy of Matchidoptera one the GGJ website link below or <Link target="_blank" to="https://github.com/Grin-Code/Matchidoptera/releases" rel="noreferrer"> Here</Link></Typography>
        <Box>
          <Typography variant="h4"> Links</Typography>
          <Link target="_blank" to="https://globalgamejam.org/games/2026/matchidoptera-9" rel="noreferrer"> GGJ 2026 Matchidoptera page</Link>
          <br />
          <Link target="_blank" to="https://github.com/Grin-Code/Matchidoptera" rel="noreferrer"> Matchidoptera Github Repo</Link>
        </Box>
        <Typography variant="h2">Gallery</Typography>
        <Grid container spacing={2} justifyContent={'center'}>
          <Box>
            <img  src={`${process.env.PUBLIC_URL}${imageLocations}Main Menu.png`} width={800} height={449} alt="Main Menu"/>
            <Typography textAlign={'center'}>Main Menu</Typography>
          </Box>
          <Box>
            <img  src={`${process.env.PUBLIC_URL}${imageLocations}Game View.png`} width={800} height={448} alt="Game View"/>
            <Typography textAlign={'center'}>Game View</Typography>
          </Box>
          <Box>
            <img  src={`${process.env.PUBLIC_URL}${imageLocations}Level Complete.png`} width={800} height={447} alt="Level Complete"/>
            <Typography textAlign={'center'}>Level Complete</Typography>
          </Box>
        </Grid>
      </Box>
    </Box>
    );
}