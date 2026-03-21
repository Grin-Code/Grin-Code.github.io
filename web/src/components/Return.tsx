import { ArrowBackRounded } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";



export default function Return() {

    const Navigate = useNavigate();
    
    return(
        <Box>
            <Button variant="outlined" startIcon={<ArrowBackRounded />} onClick={()=> Navigate('/')}>
                    back to home
            </Button>    
        </Box>
    );
}