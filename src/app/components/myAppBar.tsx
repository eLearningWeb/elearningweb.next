import {Box,AppBar,Toolbar,IconButton,Typography,Button} from "@mui/material";


import React from "react";
const MyAppBar:React.FC=()=>{
   return(
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static"  sx={{ 
        borderBottomLeftRadius: '10px', 
        borderBottomRightRadius: '10px' 
      }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 0 }}
        >
      <Box
      component="img" // Specifies that Box should render as an <img> element
            sx={{
          height: 40,
          width: 40,
          borderRadius:1
        }}
        src="/Logo.jpg" // Specifies the image source
        alt="Logo" // Optional: adds alt text for accessibility
      />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight:500 }}>
          eLearning
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
    <Typography variant="h4" component="div" 
    sx={{paddingLeft:{xs:2,
      sm:10}, paddingTop:5, fontWeight:600}}>
        Cell Theory
    </Typography>
    <Typography component="div" 
    sx={{paddingLeft:{xs:2,
      sm:10}
    , paddingTop:2, paddingRight:4, fontWeight:500}}>
       <b>Early Observations:</b>
       <ul>
        <li><b>1665:</b> Robert Hooke observed cork under a microscope and discovered small compartments he called &quot;cells&quot;
        </li>
        <li><b>1672:</b> Anton Van Leeuwenhoek observed bacteria, sperms, and red blood corpuscles, identifying them as cells.
        </li>
        <li><b>1831:</b> Robert Brown observed that all cells have a centrally positioned body, which he termed the nucleus.
        </li>
       </ul>
    </Typography>


  
    <Typography component="div" 
    sx={{paddingLeft:{xs:2,
      sm:10}, paddingTop:2, paddingRight:4, fontWeight:500}}>
       <b>The Cell Theory:</b></Typography>
       <Typography component="div" 
    sx={{paddingLeft:{xs:5,
      sm:10}, paddingTop:0, paddingRight:4, fontWeight:500}}>
        1838: M.J. Schleiden and Theodore Schwann formulated the cell theory, which states:

       <ol>
        <li>All organisms are composed of cells.
        </li>
        <li>The cell is the structural and functional unit of life.
        </li>
        <li>Cells arise from pre-existing cells.

        </li>
       </ol>
    </Typography>
    
  </Box>
   );
}

export default MyAppBar;