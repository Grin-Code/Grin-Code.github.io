import { Box, styled, Typography} from "@mui/material";
import Return from "../components/Return";
import { Link } from "react-router-dom";
import imageData from "../Data/idoba.sim image data.json"
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ConentNav from "../components/ContentNav";

const drawerWidth = 300;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  variants: [
    {
      props: ({ open }) => open,
      style: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 200,
      },
    },
  ],
}));

export default function IdobaSim() {
  const imageLocations = "/idoba.sim/"
  const itemdata = imageData.itemData;
  const pageContent = ["idoba.sim", "Links", "Road system","Network error visualisation","Canvas controls and navigation","Design work", "Gallery"];

  return(
    <Box sx={{ display: 'flex', flexDirection: 'column'}}>
      <ConentNav content={pageContent}/>        
        <Main open={true} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Return />
          <Typography variant="h1" gutterBottom id="idoba.sim">
             Idoba.sim
          </Typography>
          <Typography variant="body1">Idoba.sim is an underground mining simulation that allows users to plan, test and execute mining work schedules and exeisitng or future undergorund mines to allow for fesablility study, and optimise vehicles fleets.
            To incerase production, reduce cost, mitigate risk and test scenarios. Here will be focusing on the 3D viusalization that is in idoba.sim, as the is the part of the product that I developed. Using the Unity game engine
            a system was developed that visualise client networks that allowed for configuration, viusalization of scenarios that they are configuring and running against their networks provide there plans.
            <br/>
            Here will go over some features of the viusalization that is built using the Unity game engine that are main feature of the product and more. There also be a secion on some UX/UI design work that I did whilst working at idoba.
          </Typography>
          <Typography variant="h3" id="Links">Links</Typography>
          <Link target="_blank" to="https://www.idoba.com/underground-mining-simulation-software" rel="noreferrer">Idoba.sim website</Link>
          <Typography>I cannot have the files publicly avaliabe so please request to see Authorized file from Idoba.sim Unity project</Typography>

          <Typography variant="h2" id="Road system">Road system for generating client networks</Typography>
          <Typography variant="h3">Introduction</Typography>
          <Typography variant="body1">
          The product needs a way to visualise each client's underground mine network, so that any road network provided to the system renders without issue.
          We established a standard for how the mine network files are structured and a system that could generate any network conforming to that structure.
          Roads were exported from systems like Deswik CAD as a CSV file with a required list of columns, where roads are separated by resetting the sequential ID values to show vertex order.
          </Typography>

          <Typography variant="h3">Story of underground mining</Typography>
          <Typography variant="body1">
            Clients will design underground or openpit mine netwroks using software like Deswik CAD and similar softwares to create a 3D model of their network. Idoba.sim can take this network and generate our own dynamic 3D model based on the exported network from Deswik,
            which is used in the for the ABM (agent based model) that will run the simulation, its also used to provide a 3D viusalization of that network for configuration and showing actual simulation that was run by the ABM. 
          </Typography>
          <Typography variant="h3">Solution</Typography>
          <Typography variant="body1">
           Given the requirements for visualisation and the file structure provided by clients, it was decided to use the Unity Spline system. 
           First, the road sequences are split into individual sequences and added to unique game objects for each road. This is done instead of having a single container with multiple Splines; 
           it is handled this way because each road has unique metadata assigned to it, not just a 3D model. The roads are generated with a custom vertex distance of 4m, instead of just using the vertices data provided by the client. 
           This is done for the development advance system and to allow for smoother curves in the roads. The model generator for roads is custom-made, allowing custom shapes to be generated.
            Instead, the Unity Spline Extrude is limited by the shapes available for spline extrusion and by the speed of model generation. When first working on this part of the project, I initially used the provided spline sampling feature to modify, sample, and compare the splines, 
            but this caused a speed issue when generating the models, retrieving information about the road vertices, and modifying the splines. To minimise the initial overhead for the model generation, a custom sampler was created for the model vertex generation.
          </Typography>

          <Typography variant="h2" id="Network error visualisation">Network error visualisation</Typography>
          <Typography variant="h3">Introduction</Typography>
          <Typography variant="body1">
           Sometimes when users create the model and upload the files to idoba.sim Data ingestion, there will be network errors or warnings, where errors are showstopper since it will not work in the model, and warnings will still run but might cause some issues with the model.
            Since we needed a way to show any issues with client networks to them without requiring idoba's help to use their network, a network validation system was developed that creates a list of errors, warnings, and auto-fixes in the network.
             The Auto fixes are simple and within a threshold that is determined to be fixable. Warnings issues that won't stop the backend model from working, but might cause issues with agent behaviour and configuration.
          </Typography>
          <Typography variant="h3">Problem</Typography>
          <Typography variant="body1"> 
            While we could just provide a list of every device on the network, which does work, it has the issue of usability and helping users resolve any warnings or errors with their network. The issues are divided into error, warning, and fix types; each contains metadata pointing to the area with the issues.
            With the main users for this feature being mining engineers who made their mine site models in Deswik or other modelling software, needs a way to be able to visually identify the Solution and be able to locate it visually and quickly.
          </Typography>
          <Typography variant="h3">Solution</Typography>
            We identified 1 autofix, 2 warnings, and 1 error. First, the only autofix identified is a disconnected road from the rest of the network, less than a meter from another vertex on another road. The 2 warnings are the first one is the same as the auto fix, but greater than a meter; the other is alternating segment types in each road.
             Each vertex contains a segment type if these change on the same road, and the error is a static agent not on a road. With these errors, we need a clear way to show the issues on the network, so we had a visual and written log of any issue found with the users' network, which allowed users to investigate the road vertices by clicking any vertex issue or not,
              which will provide meta data for that vertex that can bet taken to Deswik to fix if needed. Each visualisation has unique shaders to provide a distinct look for each network error, clearly indicating which vertices are affected and, if applicable, the effect on the road between the affected vertices.
             The vertex marks are from the user's network file, encoded into an image to produce a dot with a centre line through it.
          <Typography variant="h2" id="Canvas controls and navigation">Canvas controls and navigation</Typography>
          <Typography variant="h3">Introduction</Typography>
          <Typography variant="body1">
            We have an environment with quite a large mine network. We need a way for users to explore it, allowing them to freely move around the entire environment however they want. These controls need to be intuitive and simple to use by our main users, so they need to learn a whole new control system before they can use the visualisation.
             There, the canvas controls a gizmo that can change position based on the current area the user is in, which is controlled by the React frontend.
             This gizmo has a series of buttons to help with navigating the currently loaded network.
          </Typography>
          <Typography variant="h3">Problem</Typography>
           <Typography variant="body1">
           Users need to explore their scenarios to see which agents they are configuring and where they are within the network that has been uploaded to the system. After the scenario has been run will also need to be able to explore their minesite to see the work that has been achieved. Another thing that is needed is the ability to focus on single or multiple agents in the scenarios,
            and to allow React to know which agents have been selected and to select agents from React itself, too. There is also a need to help users orient within the system, so we need a visual that shows the directionality and a quick way to adjust their alignment in the network.
           </Typography>
          <Typography variant="h3">Solution</Typography>
          <Typography variant="body1">
            To address a control system familiar to users that doesn't require them to learn a completely new control scheme for navigating 3D space, the best option is to use a dynamic CAD control scheme. This control allows users to pan, orbit, rotate, zoom, and free cam with any keyboard and mouse setup, including trackpads and the Mac's Magic Mouse on both Mac and Windows.
             This allows users to control most computer platforms, making it very accessible. Its setup so that clicking on an agent will select it, bring up its metadata for config or the current state at the current time if looking at a ran secanrio, and this will also focus the camera on that agent. The user can also use Shift/Ctrl to multiselect agents to view multiple agents'
              metadata by clicking in white space; this will deselect all selected agents. There is also the side navigation panel that contains all static agents and mobile agents in the scenario. Clicking on these will send a message to Unity to select those agents, and vice versa, Unity will send a message to React to update the selected state of the list.
          </Typography>
          <Typography variant="body1">
            The orientation gizmo/canvas control is a simple tool that lets the user see orientation and quickly rotate the camera view along any axis by clicking the corresponding axis bubble. Next to this, there are 4 buttons: extents, zoom in, zoom out, and return. The extents button returns the user to the original view of the minesite, or it brings the mine site's extents into view so users can see the whole thing.
             There are cases where that doesn't happen due to their sheer size; they can't fit within the render distance, so it shows the area with the most vertices on that given mine. Zoom in and zoom out are buttons that will adjust the camera distance from the camera focus point in the network in 4 steps between min zoom and max zoom, which changes based on the size of the mine. Lastly, return will return the user to the last clicked agent in the system. 
             If none were selected, it's disabled. If the user multiple-selects agents it the last in the selection list is the return agent.
          </Typography>
          <Typography variant="body1">
            Another piece of work here is converting all UI elements in Unity to vector graphics (SVG) to remove the bitmap-pixel issue that occurred when Unity 6.3 was released, which added SVG support to the UI toolkit. This included the orientation gizmo, which originally was a render texture of a physical object. This posed a challenge since the toolkit doesn't allow for depth on its UI elements.
             To fix this, I have the UI elements that are the bubbles and a distance calculation on a physical empty object that represents the axis to create the same effect. There are also axis lines across the entire environment to show where you are from the centre of the mine site, helping users know where they are if they get lost. The extents button helps with this, too.
          </Typography>
          <img src={`${imageLocations}/wonderbar/Wunderbar - Sim analysis-1.jpg`} alt="Main Menu"/>
          <Typography variant="h2" id="Design work">Design work</Typography>
          <Typography variant="h3">Introduction</Typography>
          <Typography variant="body1">
            While working at idoba as part of the UX/UI team, I was also designing and developing most of the 3D visualisations, and the majority of my work didn't align with the other developers'. It was also required that I collaborate with multiple teams to integrate the Unity 3D visualisation into the idoba.sim React App. While working with the UX/UI team, an opportunity arose for me to do some UI designing work for the Unity 3D visualisation
             and the React side of idoba.sim. These pieces of work are the canvas controls for Unity, the contextual toolbar that exists across all visualisation areas, and the context layers, lenses, and tools that can be used.
             The heatmapping control panel is for the future-planned heatmapping to show traffic congestion and more on the roads.
          </Typography>
          <Typography variant="h3">Wunderbar/Contextual toolbar</Typography>
          <Typography variant="body1">
            The wunderbar is the contextual toolbar that sits on top of the Unity 3D visualisation as a react element, the tools, layers and lens that are available to use change based on the view the user is currently on. Between data ingestion, configuration and simulation
            view for the 3D visualisation will change based on what tools suit that view. This element sits in the bottom centre of the screen for all view of the Unity view in idoba.sim, this way there is a consistent element that doesn't change across all views for the visualisation.
            The Layers drop down for the wonder bar is intergrating the network meta data, and add viusal to the network based on that meta data provied by the user, so they can see how the network was setup from the export from Deswik, since the users importing the network isn't always
            the one that created and setup the mine network so this will allow user to retrieve that data. At the end of the bar is a seires of buttons with each being a unqiue tool, with two tool always avaliable with more that become avaliable with different layers enabled. The two main
            tool that are available are go to location, and road ruler. goto location simple tool that lets the user click anywhere on the network to set that location as the focus point for the camera, while road ruler let you measure the distance between two points anywhere in the network
            the main use of this tool allows user to see how far away agents distance travel and configration. The use for road ruler in config is since users need to know the distance from the cloest stockpile as if the distance is to great they need to create a new select a closer one or create a new one in the system.
            Two more tool become available once the segment colour layer has been selected, segment colour will enable colours for the roads based on their type passed assigned in the network file. The tool that become available are the node tool and the segment tool, the node tool allows sure to click on any vertex in the network and get the data from that
            vertex; xyz, type, one-way, road name, and sequence id. Where the Segment tool provides the details of a segment which is the space between two vertices of the mine network.
            </Typography>
            <img src={`${imageLocations}/Heatmapping/One-way ramp confliction heatmap.jpg`}  alt="Main Menu"/>
          <Typography variant="h3">heatmapping controls</Typography>
          <Typography variant="body1">
            One of the future features for idoba.sim is a heat-mapping system to show traffic congestion on the road network, so users can identify locations in their network that could be causing productivity in the mine simulation to slow down. A series of heatmaps were identified as required for the traffic heatmap:
             one-way ramp conflict, slow vehicles, truck hauling, vehicle idle, and a customised option. So this system allowed users to switch between predetermined heatmaps and customise them if they wanted to. Users could customise most things about the heatmaps, so if they wanted to see any number of variants of them 
             or refine them down to be specific thresholds to only see where only high levels of activities have occurred with that heatmap
          </Typography>
            <img src={`${imageLocations}/Heatmapping/One-way ramp confliction heatmap.jpg`}  alt="Main Menu"/>

          <Typography variant="h2" id="Gallery"> Gallery</Typography>
          <ImageList variant="masonry" cols={3} gap={8}>
            {itemdata.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${imageLocations}${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${imageLocations}${item.img}?w=248&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar sx={{justifyContent:"centre"}} position="below" title={item.title}/>
              </ImageListItem>
            ))}
          </ImageList>
      </Main>
    </Box>
    );
}