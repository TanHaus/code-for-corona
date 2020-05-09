import React from "react";
import { Link } from "react-router-dom";
import { Grid, Button, Fade } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";



function EntryPoint(props) {
    return (
        <Fade in="true">
        <Grid 
            container
            direction="column"
            justify="center"
            alignItems="center"
        >   
            <Grid item xs>
                <h1>Seeking to be inspired during Circuit Breaker?</h1>
            </Grid>
            <Grid item xs>
                <Button component={Link} to="/choose-activities">Let's get started</Button>
            </Grid>
            
        </Grid>
        </Fade>
    );
}

export default EntryPoint;