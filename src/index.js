import React from 'react';
import ReactDOM from 'react-dom';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
// import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import Textarea from '@mui/joy/Textarea';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
  {/* <h1>Add to Library</h1>
  
  */}
<Grid container spacing={2}>
  <Grid xs={12}>
    {/* <Item>xs=8</Item> */}
    <TextField id="standard-basic" label="Title" variant="standard" fullWidth sx={{ m: 1 }} />
  </Grid>
  <Grid xs={12}>
    {/* <Item>xs=4</Item> */}
    <Textarea size="lg" name="Size" placeholder="Text"  minRows={18}/> 
  </Grid>
  <Grid xs={2}>
  <Button variant="outlined">Summarize</Button>
  </Grid>
  <Grid xs={2}>
  <Button variant="outlined">Questions</Button>
  </Grid>
  <Grid xs={2}>
  <Button variant="outlined">Save</Button>
  </Grid>
</Grid>
  
</React.StrictMode>);