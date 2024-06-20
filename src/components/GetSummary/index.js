import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

export default function GetSummary() {
    return (
        <Grid container spacing={2} alignItems="center" style={{ height: '100vh' }} id="sgrid" >
            <Grid xs={3} lg={5} mdOffset={4} >
                <Card sx={{ minWidth: 375 }} style={{ height: '60vh' }} >
                    <CardContent>
                        <Typography sx={{ fontSize: 25 }} color="text.secondary" gutterBottom>
                            Title
                        </Typography>
                        <Typography variant="h3" component="div">
                            Generic Title
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Summary
                        </Typography>
                        <Typography variant="body2">
                            well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
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