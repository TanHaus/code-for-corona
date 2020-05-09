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
    const activities = {cookDish: false, watchMovie: false, readBook: false, workOut: false, learnOnline: false, cleanRoom: false, chatFnF: false, donate: false, volunteer: false};
    localStorage.setItem("activities", JSON.stringify(activities));
    return (
        <div className={classes.root}>
        <Fade in="true">
        <Grid 
            container
            direction="column"
            justify="center"
            alignItems="center"
        >   
            <Grid item className={classes.bigItem}>
                <h1>Seeking to be inspired during Circuit Breaker?</h1>
            </Grid>
            <Grid item className={classes.bigItem}>
                <Button component={Link} to="/choose-activities">Let's get started</Button>
            </Grid>
            
        </Grid>
        </Fade>
        </div>

    );
}

export default EntryPoint;