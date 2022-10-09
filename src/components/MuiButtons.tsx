import React from 'react'
import {Stack,Button , IconButton,ButtonGroup,ToggleButton, ToggleButtonGroup} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic"
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined"
import {useState} from "react";
export const MuiButtons = () => {
    // <string[]> means that formats is an array of strings
  const [formats,setFormats] = useState<string|null>(null);
  console.log({formats,});
  const handleFormatChange = (_event:React.MouseEvent<HTMLElement>,updatedFormats:string|null) => {
    setFormats(updatedFormats);
  }
  return (
    <Stack spacing={4} >
        <Stack spacing={2} direction="row">
            <Button variant='text' >Text variant</Button>
            <br/>
            <Button variant='contained' href="https://google.com">Contained variant</Button>
            <br/>
            <Button variant='outlined'>Outlined variant</Button>
        </Stack>
        <Stack spacing={2} direction="row">
            <Button variant='contained' color='primary'>Primary</Button>
            <Button variant='contained' color='secondary'>Secondary</Button>
            <Button variant='contained' color='error'>error</Button>
            <Button variant='contained' color='success'>success</Button>
            <Button variant='contained' color='info'>info</Button>
            <Button variant='contained' color='warning'>warning</Button>
        </Stack>
        {/* display flex is default option , therefore we wrote display block explicitly below */}
        <Stack display="block" spacing={2} direction="row"> 
            <Button variant="contained" size="small" disableElevation>Small</Button>
            <Button variant="contained" size="medium" disableElevation>Medium</Button>
            <Button variant="contained" size="large" disableElevation>Large</Button>
        </Stack>
        <Stack spacing={2} direction="row">
            <Button variant="contained" startIcon={<SendIcon/>} disableRipple onClick={()=>alert("clicked icon at start")}>Icon at start</Button>
            <Button variant="contained" endIcon={<SendIcon/>}>Icon at end</Button>
            {/* agar humein sirf icon chahiye toh IconButton component ka use karenge */}
            <IconButton aria-label="send" color="success" size="small">
                <SendIcon/>
            </IconButton>
        </Stack>
        <Stack direction="row">
            {/* when we use a ButtonGroup component , the variant prop is specified on ButtonGroup instead of Button component ,one important thing to note is that onClick prop should be specified on individual Button components and not the ButtonGroup component */}
            <ButtonGroup variant="contained" orientation="vertical" size="small" color="success" aria-label="alignment button group ">
                <Button onClick={()=>alert("Left Clicked")}>Left</Button>
                <Button onClick={()=>alert("Center Clicked")}>Center</Button>
                <Button onClick={()=>alert("Right Clicked")}>Right</Button>
            </ButtonGroup>
        </Stack>
        <Stack direction="row">
            <ToggleButtonGroup aria-label="text formatting" value={formats} onChange={handleFormatChange} size="small" color="success" orientation="vertical" exclusive>
                <ToggleButton value="bold" aria-label="bold"><FormatBoldIcon/></ToggleButton>
                <ToggleButton value="italic" aria-label="italic"><FormatItalicIcon/></ToggleButton>
                <ToggleButton value="underlined" aria-label="underlined"><FormatUnderlinedIcon/></ToggleButton>
            </ToggleButtonGroup>
            
        </Stack>
    </Stack>
  )
}

// Button element of Material UI has many props :->

// 1) variant (styling kaisi hogi ) ( Google mein <button> element ki tarah hi dikhega ) ( 3 values hain i.e. text(for performing secondary actions) , contained(for performing primary actions) , outlined(in between previous 2))
// 2) href (link banane ke liye ) ( agar ye prop daala toh button element anchor element ban jaega i.e. Google mein <a> tag ki tarah dikhega )
// 3) color (konse color ka button hoga ) ( six type of colors i.e. primary,secondary,error,success,info,warning )
// 4) size ( button ka size kya hoga ) ( has 3 values i.e. small , medium , large )