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
        <Typography>
          This a solo project produced for university
        </Typography>
        <Typography variant="h3">Descripion</Typography>
        <Typography>
         This project is based of the paper Linear Regression for Face Recognition by Naseem I, Togneri R, Bennamoun M. by downsamling images by a oder of c x d of grey scale images in order to create a line of best fit for the training set of images, than comparing that line to a testing image based
         based on mimium distance between the the testing line of best fit to the training data set lines of best fit in order to find the closest match to the testing image. This software has is pretty success full with identifying faces from the training set compared to the testing set, occasionally it will fail
         with some faces. This system is designed to work with images of people faces that are close up and are greyscaled, a training and testing data set that was used for this software is provided in the repo and to use the software. 
         With this project there was a limitation that only about 20% of the project could be third party I developed at matrix math libaray, which was required for some of the calculations in this project. Which aren't perfect and cause some false matches to occur every so often.
        </Typography>

        <Typography variant="h3">Operation</Typography>
        <Typography>
         To use the system first, the user needs to enter a file directory to the training data set, if a valid location is provided it will be stored in memory. Now the system can be trained by pressing the training button or can display the training images that has been provided to the system.
         Once training is completed a message will notice you that its done and testing is now avaliable, add a image to test by drag and dropping an image from the testing set in to the box with a black outline on the left. The image should appear in that space pressing test will start tge search 
         through the training set to find a the closest match to the testing image.
        </Typography>
        <Typography>you can get a copy of Facial Recognition with Linear Regression <Link target="_blank" to="https://github.com/Grin-Code/Facial-Recognition/releases/tag/Release" rel="noreferrer">Here</Link></Typography>
        <Box>
          <Typography variant="h4">Links</Typography>
          <Link target="_blank" to="https://github.com/Grin-Code/Facial-Recognition" rel="noreferrer">Facial Recognition with Linear Regression Github Repo</Link>
        </Box>
        <Box>
          <Typography variant="h2">Reference</Typography>
          <Typography>
            Naseem I, Togneri R, Bennamoun M. Linear regression for face recognition. IEEE Trans Pattern Anal Mach Intell. 2010 Nov;32(11):2106-12. doi: 10.1109/TPAMI.2010.128. PMID: 20603520.
          </Typography>
        </Box>

        <Typography variant="h2">Gallery</Typography>
        
        <Grid container spacing={2} sx={{justifyContent:'center'}} >
          <Box>
            <img  src={`${imageLocations}start.png`} alt="Start"/>
            <Typography textAlign={'center'}>Start up</Typography>
          </Box>
          <Box>
            <img  src={`${imageLocations}using.png`} alt="Usage"/>
            <Typography textAlign={'center'}>Using software</Typography>
          </Box>
        </Grid>
      </Box>
    </Box>
    );
}