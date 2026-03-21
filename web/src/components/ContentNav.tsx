import { Drawer, Toolbar, Box, Typography, List, ListItem, ListItemButton, ListItemText, Link } from "@mui/material";

interface ConentNavProps 
{ 
    content: string[]
};

const drawerWidth = 240;


const ConentNav = (props: ConentNavProps) => {
    const {content} = props
  return (
    <Drawer  
    sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={true}
        >
          
      <Toolbar />      
      <Box sx={{
        width: '210px',
        flexShrink: 0,
        padding:'32px 6px 12px 56px',
      }}>
        <Typography>Content</Typography>
        <List >
          {content.map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton component={Link} href={`#${text}`}>
                <ListItemText primary={text}  />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>)
};

export default ConentNav;