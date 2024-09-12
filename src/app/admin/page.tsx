"use client"
import {$getRoot, $getSelection} from 'lexical';
import {useEffect} from 'react';

import {AutoFocusPlugin} from '@lexical/react/LexicalAutoFocusPlugin';
import {LexicalComposer} from '@lexical/react/LexicalComposer';
import {RichTextPlugin} from '@lexical/react/LexicalRichTextPlugin';
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
import {LexicalErrorBoundary} from '@lexical/react/LexicalErrorBoundary';
  import MyTheme from '@/theme/theme';
  
import { ThemeProvider } from '@emotion/react';
import { CssBaseline, Box, Card } from '@mui/material';
import MyToolbarPlugin from '../MyPlugins/MyToolBar';
import { Padding } from '@mui/icons-material';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import ExampleTheme from '@/theme/ExampleTheme';



// const theme = {
//   // Theme styling goes here
//   //...
// }

// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.
function onError(error:any) {
  console.error(error);
}

export default function Editor() {
  const initialConfig = {
    namespace: 'MyEditor',
    theme: ExampleTheme,
    onError(error: Error) {
      throw error;
    },
  };

  return (
    <ThemeProvider theme={MyTheme}>
      <CssBaseline/>
       <Box sx={{p:4}}>
      
       
       
        <LexicalComposer initialConfig={initialConfig}>
        <MyToolbarPlugin/>
        
        <Card variant='outlined' sx={{mt:2, pl:2}} >
        
        <RichTextPlugin
        contentEditable={<ContentEditable style={{outline:'none'}} className="editor" />}
        //placeholder={<div>Enter some text...</div>}
        
        ErrorBoundary={LexicalErrorBoundary}
      />
<OnChangePlugin onChange={(editorState) => console.log(editorState)}/>

      <HistoryPlugin />
      <AutoFocusPlugin />
      </Card>
    </LexicalComposer>
      
    </Box>
    </ThemeProvider>
  );
}