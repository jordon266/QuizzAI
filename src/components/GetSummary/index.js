import * as React from 'react';
import { useLocation} from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import summaryres from '../../API/getsummary';

export default function GetSummary() {
    const location = useLocation()
    const data = location.state 
    console.log(data.payload.title)
    console.log(data)
    return (
        <Grid container spacing={2} alignItems="center" style={{ height: '100vh' }} id="sgrid" >
            <Grid xs={3} lg={5} mdOffset={4} >
                <Card sx={{ minWidth: 375 }} style={{ minHeight: '50vh' }} >
                    <CardContent>
                        <Typography sx={{ fontSize: 25 }} color="text.secondary" gutterBottom>
                            Title
                        </Typography>
                        <Typography variant="h3" component="div">
                            {data.payload.title}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Summary
                        </Typography>
                        <Typography variant="body2">
                            {data.payload.reading}
                            <br />
                            {'"Thanks you"'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Okay</Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    );
}