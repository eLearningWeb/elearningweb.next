import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { CssBaseline, IconButton, ThemeProvider } from '@mui/material';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import { FORMAT_TEXT_COMMAND, TextFormatType } from 'lexical';
import { FormatItalic, FormatUnderlined } from '@mui/icons-material';
import Card from '@mui/material/Card';
import MyTheme from '@/theme/theme';

function ToolbarButton({ command, icon }: { command: TextFormatType; icon: string }) {
  const [editor] = useLexicalComposerContext();

  const handleClick = () => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND,command);
  };

 switch(icon){
  case "B":
    return (<IconButton onClick={handleClick}><FormatBoldIcon/></IconButton>);
 
 case "I":
  return (<IconButton onClick={handleClick}><FormatItalic/></IconButton>);

  case "U":
    return (<IconButton onClick={handleClick}><FormatUnderlined/></IconButton>);
    default:
      return(<div>uknown</div>)
 }
}

export default function MyToolbarPlugin() {
  return (
    <Card variant="outlined" >
      <ToolbarButton command="bold" icon="B" />
      <ToolbarButton command="italic" icon="I" />
      <ToolbarButton command="underline" icon="U" />
      {/* Add more buttons as needed */}
    </Card>

  );
}



