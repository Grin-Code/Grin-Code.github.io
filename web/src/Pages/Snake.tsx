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
        <Typography>This is a solo project that I made during univertiy</Typography>
        <Typography variant="h3">Descripion</Typography>
        <Typography>This is a university project were we tasked with developing an AI that can preform any task with no real limitations on what we can do with the project. I choose to make an AI the can beat the game of snake, which is a simple game to play
          but hard to beat. There are 3 modes for this game of snake first hamiltonian cylce, second inverse A*, and Player. The user can switch modes by using the change conrtol button and pressing start game. the user can also modify the board size up to 30, 30 grid
          The grid is are black squares seperated by blue lines, the AI pathing is the white line, red square in the grid is the apple and the dark green is the head of the snake and bright green is the body. <br/>
          The player mode is user controlled snake but the game runs at 60 moves a seconod so it pretty hard to control.
        </Typography>
        <Typography variant="h4">Hamiltonian cycle</Typography>
        <Typography>
          The hamiltonian cycle which is a cylce that vists very vertex exactly once and starts and ends at adacemt vertoces that can be completed by asdding one more edge to from the cycle. Once the
          cycle is completed the AI can use the cycle to loop around the game grid until its beats the game, but this isn't very intresting or really AI following a set path around the game. So instead we add a shortcutting system so the AI will skip parts of 
          the path to get to the Apple faster, once the snake is about 60% size of the game board it will follow the path since there most shortcutting will cause the snake to hit its self. There is a bug in my shortcutting algorithm which causes the AI to take bad
          shortcuts and trap itself causing it to lose the game.
        </Typography>
        <Typography variant="h4">Inverse A*</Typography>
        <Typography>
          Inverse A* is what is sounds like the oppisite of A*. A* is assigning every square in the grid a number based on its distance from the apple to the head of snake, ignoring the snake itself as impassable grid cells. Where A* follows the grid cells with the 
          smallest values creating the shortest path to the Apple, while inverse A* follows the cells with the largest values creaing the longest path to the apple, the benefit of this makes it so the snake will avoid its body as it grows as it eats and redueces the chance of it taking a path that will trap the AI in a unwinable game state. The inverse A* 
          that is being used for this pathfinding has some issues and won't completely navigate across the entire board. 
        </Typography>
        <Typography>you can get a copy of Snek <Link target="_blank" to="https://github.com/Grin-Code/Snek/releases/tag/Release" rel="noreferrer">Here</Link></Typography>
        <Box>
          <Typography variant="h4">Links</Typography>
          <br />
          <Link target="_blank" to="https://github.com/Grin-Code/Snek" rel="noreferrer">Snek Github Repo</Link>
        </Box>
        <Typography variant="h2">Gallery</Typography>
        <Grid container spacing={2}  sx={{justifyContent:'center'}}>
          <Box>
            <img  src={`${imageLocations}Start.png`} alt="Start"/>
            <Typography textAlign={'center'}>Start</Typography>
          </Box>
          <Box>
            <img  src={`${imageLocations}Larger board size.png`} alt="Larger board size"/>
            <Typography textAlign={'center'}>Larger game board size</Typography>
          </Box>
          <Box>
            <img  src={`${imageLocations}Player .png`} alt="Player "/>
            <Typography textAlign={'center'}>Player Controled</Typography>
          </Box>
           <Box>
            <img  src={`${imageLocations}aStar.png`}alt="aStar "/>
            <Typography textAlign={'center'}> Inverse A* pathfinding</Typography>
          </Box>
        </Grid>
      </Box>
      </Box>
    );
}