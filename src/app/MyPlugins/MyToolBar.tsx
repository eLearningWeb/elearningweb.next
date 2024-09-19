'use client';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { IconButton } from '@mui/material';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import { FORMAT_TEXT_COMMAND, TextFormatType } from 'lexical';
import { FormatItalic, FormatUnderlined, Save } from '@mui/icons-material';
import Card from '@mui/material/Card';
import { $generateHtmlFromNodes } from '@lexical/html';
import { $getSelection, $isRangeSelection } from 'lexical';
import { LexicalEditor } from 'lexical';
import React from 'react';

type ToolbarProps = {
  command: TextFormatType;
  icon: React.ReactElement;
  editor: LexicalEditor;
};

function ToolbarButton({ command, icon, editor }: ToolbarProps) {
  const handleClick = () => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, command);
  };

  return <IconButton onClick={handleClick}>{icon}</IconButton>;
}

export default function MyToolbarPlugin() {
  const [editor] = useLexicalComposerContext();

  const editorTojson = () => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        const htmlString = $generateHtmlFromNodes(editor);
        console.log('Generated HTML:', htmlString); // For debugging

        // Convert the editor state to JSON
       // const json = JSON.stringify(editor.getEditorState().toJSON(), null, 2);
        const blob = new Blob([htmlString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        // Create a link and trigger the download
        const link = document.createElement('a');
        link.href = url;
        link.download = 'html.json';
        document.body.appendChild(link);
        link.click();

        // Clean up and remove the link
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }
    });
  };

  return (
    <Card variant="outlined">
      <ToolbarButton command="bold" icon={<FormatBoldIcon />} editor={editor} />
      <ToolbarButton command="italic" icon={<FormatItalic />} editor={editor} />
      <ToolbarButton command="underline" icon={<FormatUnderlined />} editor={editor} />
      <IconButton onClick={editorTojson}>
        <Save />
      </IconButton>
      {/* Add more buttons as needed */}
    </Card>
  );
}