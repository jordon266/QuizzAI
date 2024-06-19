import React from 'react';
import ReactDOM from 'react-dom';
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
  return  (
    <Grid container spacing={2}>
      <Grid xs={4}>
        <Typography variant="h2" gutterBottom>
          QuizzAI
        </Typography>
      </Grid>
      <Grid xs={12}>

        <TextField id="standard-basic" label="Title" variant="standard" fullWidth sx={{ m: 1 }} />
      </Grid>
      <Grid xs={12}>

        <Textarea size="lg" name="Size" placeholder="Text" minRows={18} />
      </Grid>
      <Grid xs={3} mdOffset={5}>
        <Button variant="outlined">Summarize</Button>  <Button variant="outlined">Questions</Button> <Button variant="outlined">Save</Button>
      </Grid>
    </Grid>
    );
};
export default HomePage;