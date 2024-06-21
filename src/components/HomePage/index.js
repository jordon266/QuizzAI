import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import Textarea from '@mui/joy/Textarea';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const HomePage = () => {
  const [title, setTitle] = useState(""); // Declare title state variable
  const [reading, setReading] = useState(""); // Declare reading state variable
  
  const payload = { title, reading };
  const navigate = useNavigate()

  const summarize = (event) => {
    event.preventDefault();
    navigate("/getsummary",  {state: { payload }});
  };

  const questionize = (event) => {
    event.preventDefault();
    navigate("/getsummary",  {state: { payload }});
  };


  return (

    <Grid container spacing={2} id="hgrid">

      <Grid xs={4}>
        <Typography variant="h2" gutterBottom>
          QuizzAI 
        </Typography>
      </Grid>
      <Grid xs={12}>

        <TextField id="standard-basic" label="Title" variant="standard" fullWidth sx={{ m: 1 }} value={title} onChange={(event) => { setTitle(event.target.value) }} />
      </Grid>
      <Grid xs={12}>

        <Textarea size="lg" name="Size" placeholder="Reading" minRows={18} value={reading} onChange={(event) => { setReading(event.target.value) }} />
      </Grid>
      <Grid xs={3} mdOffset={5}>
        <Button variant="outlined" onClick={summarize}>Summary</Button> <Button variant="outlined" onClick={questionize}>Questions</Button> <Button variant="outlined">Save</Button>
      </Grid>
    </Grid>
  );
};
export default HomePage;