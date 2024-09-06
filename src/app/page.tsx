"use client"
import { ThemeProvider, useTheme } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import { green, orange } from '@mui/material/colors';
import MyAppBar from "./components/myAppBar";
import { Brush } from "@mui/icons-material";
import MyTheme from "@/theme/theme";




export default function Home() {
  
  return (  <ThemeProvider theme={MyTheme}>
    <CssBaseline/>
      <MyAppBar/>
      
  </ThemeProvider>
  );
}
