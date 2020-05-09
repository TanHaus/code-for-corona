import React from "react";
import { Link } from "react-router-dom";
import { Grid, Button, Fade } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    bigItem: {
        minHeight: '40vh',
    },
})

function EntryPoint(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <Fade in="true">
        <Grid 
            container
            direction="column"
            justify="center"
            alignItems="center"
        >   
            <Fade in={true} timeout={2000}>
            <Grid item className={classes.bigItem}>
                <h1>Seeking to be inspired during Circuit Breaker?</h1>
            </Grid>
            </Fade>

            <Fade in={true} timeout={2000} style={{ transitionDelay: 1500}}>
            <Grid item className={classes.bigItem}>
                <Button component={Link} to="/choose-activities">Let's get started</Button>
            </Grid>
            </Fade>
            
        </Grid>
        </Fade>
        </div>

    );
}

export default EntryPoint;