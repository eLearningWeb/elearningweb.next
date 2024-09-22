'use client'
import MyTheme from "@/theme/theme";
import { ThemeProvider } from "@emotion/react";
import { ArrowDropDown } from "@mui/icons-material";
import { Button, CssBaseline,Menu, MenuItem } from "@mui/material";

import {Grid, Box} from "@mui/material";
import React, { useState } from "react";

export default function TextSearch(){
    return(<ThemeProvider theme={MyTheme}>
        <CssBaseline/>
        <Box sx={{flexGrow:1, display:'flex', justifyContent:'center', padding:2, paddingRight:4}}>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <OutlinedBox>
                    <PopUpMenu/>
                </OutlinedBox>
            </Grid> 
            <Grid item xs={12} sm={6}>
                <OutlinedBox>
                    <div>Input Text</div>
                </OutlinedBox>

            </Grid> 
        </Grid>
        </Box>
    </ThemeProvider>)
}

function  OutlinedBox({children}:{children:React.ReactNode}){
    const commonStyles = {
        bgcolor: 'background.paper',
        borderColor: 'text.primary',
        m: 1,
        border: 1,
       width:'100%',
        height: '5rem',
      };

    return (
    <Box sx={{flexGrow:1}}>
        <Box sx={{...commonStyles,borderRadius:'10px'}}>{children}</Box>
    </Box>);
}

function PopUpMenu(){
    const [buttonDesc, setbuttonDesc]=useState('Click');
    const [anchorEl, setAnchorEl]=useState<HTMLElement|null>(null);
    const open=Boolean(anchorEl);
    const handleClick=(event:React.MouseEvent<HTMLElement>)=>{
        setAnchorEl(event.currentTarget);
        setbuttonDesc('Yellow');
        
        };
    const handleClose=()=>{
        setAnchorEl(null);
    }
    return(
        <div>
            <Button variant="outlined" 
                onClick={handleClick} 
                endIcon={<ArrowDropDown/>}>
                    {buttonDesc}
            </Button>

            <Menu anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{vertical:'bottom', horizontal:'left'}}
            transformOrigin={{vertical:'top', horizontal:'left'}}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
            </Menu>
            
        </div>
    )
}