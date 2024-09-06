import React, { useRef, RefObject } from "react";
import {  Button, Card, IconButton, Stack } from "@mui/material";
import { wrap } from "module";
import { Abc, FormatBold, Padding } from "@mui/icons-material";
import {HandleClicks} from "../utilities/handleClicks";

interface Props {
    divRef: RefObject<HTMLDivElement>;
    
  }

const ButtonBar:React.FC<Props>=({divRef})=>{
  
    const handleClicks = new HandleClicks(divRef);
    return(
    
    <Card variant="outlined">
            <Stack direction={"row"} sx={{flexWrap:'wrap',
                justifyContent:'center'
            }}>
                <IconButton aria-label="Bold" style={{borderRadius:5}} onClick={()=>handleClicks.handleBoldClick()}>
                <FormatBold/>
                </IconButton>

                <IconButton aria-label="Bold" style={{borderRadius:5}} onClick={()=>handleClicks.handleItalicClick()}>
                <Abc/>
                </IconButton>
            </Stack>
    </Card>
    );
}

export default ButtonBar;