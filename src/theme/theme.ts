
import { createTheme } from "@mui/material";
import { darkScrollbar } from "@mui/material";
import { grey } from "@mui/material/colors";
import { PaletteMode } from "@mui/material";

// Function to get the design tokens based on the mode
const getDesignTokens = (mode: PaletteMode) => ({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          /* WebKit-based scrollbar styles */
          '&::-webkit-scrollbar': {
            width: '4px',
            height: '8px',
          },        
          },
        html: {
          ...darkScrollbar(
            mode === "light"
              ? {
                  track: grey[200],
                  thumb: grey[400],
                  active: grey[400],
                }
              : {
                track: 'transparent',
                thumb: grey[600],
                active: grey[800],
                
              }
          ),
          // This is for Firefox's scrollbar
          scrollbarWidth: "thin",
        },
      },
    },
  },
  palette: {
    mode, // Set the mode (dark or light)
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

// Define your mode ('light' or 'dark')
const mode: PaletteMode = "dark";

// Create the theme using MUI's createTheme
const MyTheme = createTheme(getDesignTokens(mode));

export default MyTheme;