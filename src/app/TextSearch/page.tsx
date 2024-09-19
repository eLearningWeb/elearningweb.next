'use client'
import MyTheme from "@/theme/theme";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import {Grid, Box} from "@mui/material";

export default function TextSearch(){
    return(<ThemeProvider theme={MyTheme}>
        <CssBaseline/>
        <Box sx={{flexGrow:1, display:'flex', justifyContent:'center', padding:2, paddingRight:4}}>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            <OutlinedBox/>
            </Grid> 
            <Grid item xs={12} sm={6}>
                <OutlinedBox/>
                    
                
            </Grid> 
        </Grid>
        </Box>
    </ThemeProvider>)
}

function  OutlinedBox(){
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
        <Box sx={{...commonStyles,borderRadius:'10px'}}>hello</Box>
    </Box>);
}