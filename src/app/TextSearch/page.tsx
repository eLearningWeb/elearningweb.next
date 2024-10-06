'use client'
import MyTheme from "@/theme/theme";
import { ThemeProvider } from "@emotion/react";
import { ArrowDropDown } from "@mui/icons-material";
import { Button, CssBaseline, Menu, MenuItem, TableContainer, TextField, Table, TableHead, TableBody } from "@mui/material";
import { Grid, Box } from "@mui/material";
import React, { useState } from "react";
import ExampleTheme from "@/theme/ExampleTheme";
import {LexicalComposer} from '@lexical/react/LexicalComposer';
import {RichTextPlugin} from '@lexical/react/LexicalRichTextPlugin';
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
import {LexicalErrorBoundary} from '@lexical/react/LexicalErrorBoundary';
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { dropdownoptions } from "../utilities/Constants";
import { RegexSearch } from "../utilities/Regex";


const PaddingBottom='15px';



let wordToSearch='';
let currentIndex=0;
let inputText='';

export default function TextSearch() {
    const handleSearch=()=>{
        console.log(`Index: ${currentIndex} Word: `+ wordToSearch);
        console.log(`Input text: ${inputText}`);  
        console.log(currentIndex);
        RegexSearch(wordToSearch,inputText,currentIndex).forEach((match, index)=>{
            console.log(`${index}: ${match}`);
        })
        
        //scrolling to element
        // const element = document.querySelector(`[data-text-index="${matches[0].index}"]`);
        // if (element) {
        //   element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // }
    };
    return (
        <ThemeProvider theme={MyTheme}>
            <CssBaseline />
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', padding: 2, paddingRight: 4 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} >
                        <OutlinedBox>
                            <PopUpMenu />   
                            <InputField/>                       
                            <Button onClick={handleSearch}
                            variant="contained" sx={{paddingRight:8, paddingLeft:8}}>OK</Button>
                        </OutlinedBox>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <OutlinedBox>
                            
                            <Editor/>
                        </OutlinedBox>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    );
}

function OutlinedBox({ children }: { children: React.ReactNode }) {
    const commonStyles = {
        m: 1,
        border: 1,
        width: '100%',
        overflowY:'scroll'
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Box sx={{ ...commonStyles, borderRadius: '10px', padding: 2 }} >{children}</Box>
        </Box>
    );
}

function PopUpMenu() {
    
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
        setCurrentIndex(index);
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

function InputField(){
    
    return(<TextField 
            fullWidth 
            label="Input"
            sx={{paddingBottom:PaddingBottom}}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                // This captures the input value and logs it to the console
                setWordToSearch(e.target.value);
              }}/>);

}

//----

function setWordToSearch(inputWord:string){    
    wordToSearch=inputWord;
    console.log(wordToSearch);
}

function setCurrentIndex(inputIndex:number){    
    currentIndex=inputIndex;
    console.log(currentIndex);
}

//


 function Editor() {
    const initialConfig = {
      namespace: 'MyEditor',
      theme: ExampleTheme,
      onError(error: Error) {
        throw error;
      },
    };

    return(<LexicalComposer initialConfig={initialConfig}>
        <RichTextPlugin
        contentEditable={<ContentEditable style={{ outline: 'none',
            height: '300px',
            overflowY: 'auto', // Only vertical scrolling if needed
            
            }}/>}
        //placeholder={<div>Enter some text...</div>}    
        
        ErrorBoundary={LexicalErrorBoundary}
        />
        <OnChangePlugin onChange={(editorState) => {console.log(editorState)           
            editorState.read(() => {
                 const text = editorState._nodeMap.get('root')?.getTextContent()||'';
                 inputText=text;
                 //console.log(text);  // Logs the plain text
               });
        }}/>
        <HistoryPlugin />
       
        
        <AutoFocusPlugin />
    </LexicalComposer>);
}

function SearchPlugin({ index, length }: { index: number, length:number }) {
   const [editor] = useLexicalComposerContext();
    return null;
  }

  //using material ui Table https://mui.com/material-ui/react-table/
  function MyTable(){
    <TableContainer sx={{maxHeight:440}}>
        <Table stickyHeader>
            <TableHead>

            </TableHead>
            <TableBody>

            </TableBody>
        </Table>
    </TableContainer>
  }