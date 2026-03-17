import { Box, Typography } from "@mui/material";
import Return from "../components/Return";
import { Link } from "react-router-dom";

export default function IdobaSim() {
    return(
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <Return />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>

        <Typography variant="h1" gutterBottom>
           Idoba.sim
        </Typography>
        <Typography variant="body1">Idoba.sim is an underground mining simulation that allows users to plan, test and execute mining work schedules and exeisitng or future undergorund mines to allow for fesablility study, and optimise vehicles fleets.
          To incerase production, reduce cost, mitigate risk and test scenarios. Here will be focusing on the 3D viusalization that is in idoba.sim, as the is the part of the product that I developed. Using the Unity game engine
          a system was developed that visualise client networks that allowed for configuration, viusalization of scenarios that they are configuring and running against their networks provide there plans.
          <br/>
          Here will go over some features of the viusalization that is built using the Unity game engine that are main feature of the product and more. There also be a secion on some UX/UI design work that I did whilst working at idoba.
        </Typography>
        <Typography variant="h3">Links</Typography>
        <Link target="_blank" to="https://www.idoba.com/underground-mining-simulation-software" rel="noreferrer">Idoba.sim website</Link>
        <Typography>I cannot have the files publicly avaliabe so please request to see Authorized file from Idoba.sim Unity project</Typography>

        <Typography variant="h2">Road system for generating client networks</Typography>
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

        <Typography variant="h2">Network error visualisation</Typography>
        <Typography variant="h3">Introduction</Typography>
        <Typography variant="body1">
          Some times when users create the model and upload the files to idoba.sim Data ingestion there will be network errors or warnings, where errors are showstopper since it will not work in the model and warning will still run but might cause some issues with the model.
          Since we needed a way to show any issues with client networks to them that dosen't requrie help from idoba to be able to use their network a network validation system was developed that creates a list of errors, warning and auto fixes that exist in the network. 
          The Auto fixes issues are simple that are within a threshold that is determine that can be fixed. Warnings issues that won't stop the backend model from working but might cause issues with agent behaviour and configuration.          
        </Typography>
        <Typography variant="h3">Problem</Typography>
        <Typography variant="body1"> 
           While we could just provide a least of every on the network in a list which while does work but has the issue of with usablity and helping the users resolve any warning or errors with their network.
           The issues are devided up by types of of errors, warning and fixes, each of these contain some meta data to point to the area with the issues. With the main users for this feature being mining engineers who made their minesite models
           in Deswik or other modeling software, needs a way to be able to viusally identify the Solution and be able to locate it viusally and quickely.
        </Typography>
        <Typography variant="h3">Solution</Typography>
          We identified 1 autofix, 2 warning, and 1 error, first the only autofix identified are disconnected road from the rest of the network less than a meter from another vertex in another road. 
          The 2 warnings the first one is the same as the auto fix but greater than a meter, the other is alternating segment types in each road each vertex contains a segment type if these change on the same road and the error is static agent not on a road.
          With these errors we need a clear way to show the issues on the network so we had visual and written log of any issue found with the users network, that allowed users to interigate the road vertices by clicking any vertex issue or not which will provide meta data for that
          vertex that can bet taken to Deswik to fix if needed. Each of the visualisation have unique shaders to provide a clear different look for each network error that clearly indicate which vertices are affected area that it will affect of the road between vertices if appliable.
          The vertices marks are from the users network file that are encoded into an image to produce a dot with centre line through them.
        <Typography variant="h2">Canvas controls and navigation</Typography>
        <Typography variant="h3">Introduction</Typography>
        <Typography variant="body1">
          We have environment that contains a quite large mine networks we would need a way for users to explore this environment, that requires the freely move around the entire environment however they what to. These controls needs to be intiuative and
          simple to use by our main users so they need to learn a whole new control system before they can use the visualisation. There the canvas controls a this is a gizmo that can can change positions based on the current area the user is in which is controled by the react frontent.
          This gizmo has a series of buttons to also help with navigating the currently loaded network.
        </Typography>
        <Typography variant="h3">Problem</Typography>
         <Typography  variant="body1">
         Users need to explore their scenarios so they can see which agents they are configuring and where they are within the network that has been uploaded to the system. After the scenario has been run will also need to be able to explore their minesite to see the work that 
         has been achiveved. Another thing that is needed is the ability to focus on single or multiple agnets in the scenarios, and allows react to know which agents that have been selected and select agents from react itself too. There also the need of helping users orientation within the system
         so we need a viusal that shows the user know directionality, and a quick way to adjust their alignement in the space in the network. 
         </Typography>
        <Typography variant="h3">Solution</Typography>
        <Typography  variant="body1">
        To address the the the control system that is familiar to users that doesn't require them to learn a completely new control scheme for navigating 3D space, the best option for this is using a dynamic CAD control scheme. This controls allows user to pan, orbit, rotate, zoom and free cam, with any keyboard and mouse
        setup including tackpad and Mac's Magic mouse for both Mac and Windows, this allowed users to control with most platforms of computers making it very accessable for users. Its setup so that clicking on agents will select it bring up its meta data for config or the current state at the current time if looking at a ran secanrio this will also focus the camera on that agent,
        user can also use shift/crtl to multiselect agents to see multiple agents meta data by clicking in white space it will deselect all agents selected. There is also the side navigation panel that contains all static agents and mobile agnets in the scenario click on these will send message to Unity to select those agents, and vice versa Unity will send a message to react to update the
        selected state of the list. 
        
        The ortientation gizmo/canvas control is a simple to that allows for user to see orientation and quickly rotate the camera view to any axis orientation just by clicking any ofd the axis bubble on it. Next to this there are 4 buttons which are extents, zoom in, zoom out, and return.
        The extents button returns the user to the oringinal view of the minesite or the extents of the mine site is brought into view so users can see the whole thing, there are cases where that doesn't happen due to the sheer size of them they can't fit within the render distance so it show the area with most vertices on that given mine.
        Zoom in and zoom out are button that will adjust the camera distance from the camera focus point in the network in 4 steps between min zoom and max zoom which changes based on size of the mine. Lastly reutrn will return the user back to the last clicked agent in the system, if none where selected its disabled, if the user multiple selects
        agents it the last in the selection list is the return agent. 
        Another piece of work here is making all UI elements in Unity into vector graphic or SVG to remove bitmap pixel issue when the Unity 6.3 version was released that added SVG support for UI toolkit in Unity, this included the orientation gizmo which oringally was render texture of a physical object. This posed a challange since
        the toolkit doesn't allow for depth on its UI elements to fix this I have a the UI elements that are the bubbles and a distance calc on physical empty object that repesent the axis to create the same effect. There is also a axis lines accross the entire envirnoument to show where you are from the centre of the mine site to help users know where they are if they get lost the extents button helps with this too.
        </Typography>
        <Typography variant="h2">Design work</Typography>
      </Box>
    </Box>
    );
}