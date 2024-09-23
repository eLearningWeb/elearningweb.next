'use client'
import MyTheme from "@/theme/theme";
import { ThemeProvider } from "@emotion/react";
import { ArrowDropDown } from "@mui/icons-material";
import { Button, CssBaseline, Menu, MenuItem, TextField } from "@mui/material";
import { Grid, Box } from "@mui/material";
import React, { useState } from "react";

const PaddingBottom='15px';

export default function TextSearch() {
    return (
        <ThemeProvider theme={MyTheme}>
            <CssBaseline />
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', padding: 2, paddingRight: 4 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} >
                        <OutlinedBox>
                            <PopUpMenu />
                            <TextField fullWidth label="Input" sx={{paddingBottom:PaddingBottom}}/>
                            <Button variant="contained" sx={{paddingRight:8, paddingLeft:8}}>OK</Button>
                        </OutlinedBox>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <OutlinedBox>
                            <div>Input Text</div>
                        </OutlinedBox>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    );
}

function OutlinedBox({ children }: { children: React.ReactNode }) {
    const commonStyles = {
        bgcolor: 'background.paper',
        borderColor: 'text.primary',
        m: 1,
        border: 1,
        width: '100%',
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Box sx={{ ...commonStyles, borderRadius: '10px', padding: 3 }} >{children}</Box>
        </Box>
    );
}

function PopUpMenu() {
    const dropdownoptions = ['Exact match', 'Lines that start with'];
    const [buttonDesc, setbuttonDesc] = useState(dropdownoptions[0]);
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMenuItemClick = (index: number) => {
        setbuttonDesc(dropdownoptions[index]);
        handleClose();
    };

    return (
        <div style={{ width: '100%', paddingBottom:PaddingBottom }}>
            <Button
                variant="outlined"
                sx={{ padding: 2, width: '100%' }}
                onClick={handleClick}
                endIcon={<ArrowDropDown />}
            >
                {buttonDesc}
            </Button>

            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            >
                {dropdownoptions.map((ListItem, index) => (
                    <MenuItem
                        key={index}
                        sx={{ width:'100%' }}
                        onClick={() => handleMenuItemClick(index)}
                    >
                        {ListItem}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}