import React from "react";
import { Grid, Button, Fade } from "@material-ui/core";
import { Link } from "react-router-dom";

function Personalization(props) {
    return (
        <Fade in="true">
        <Grid 
            container
            direction="column"
            justify="center"
            alignItems="center"
        >   
            <Grid 
                item 
                xs
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <h1>Choose your activities</h1>
                <p>as many as you like</p>
            </Grid>
            <Grid item xs>
                <Button component={Link} to="/start-day">Let's get started</Button>
            </Grid>
            
        </Grid>
        </Fade>
    );
}

export default Personalization;