import React from "react";
import { Grid, Button, Fade } from "@material-ui/core";
import { Card, CardContent, CardActionArea } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    item: {
        // padding: '20px auto',
        margin: '20px auto',
    },
    square: {
        
    }
})

function Personalization(props) {
    const classes = useStyles();
    const cookDish = JSON.parse(localStorage.getItem("cookDish"));
    const watchMovie = JSON.parse(localStorage.getItem("watchMovie"));
    const readBook = JSON.parse(localStorage.getItem("readBook"));
    const workOut = JSON.parse(localStorage.getItem("workOut"));
    const learnOnline = JSON.parse(localStorage.getItem("learnOnline"));
    const cleanRoom = JSON.parse(localStorage.getItem("cleanRoom"));
    const chatFnF = JSON.parse(localStorage.getItem("chatFnF"));
    const donate = JSON.parse(localStorage.getItem("donate"));
    const volunteer = JSON.parse(localStorage.getItem("volunteer"));

    return (
        <Fade in="true">
        <Grid 
            container
            direction="column"
            justify="center"
            alignItems="center"
        >   
            <Grid item className={classes.item}>
                <h1>Personalize your activities</h1>
            </Grid>
            {cookDish ? <div>
                <Grid item className={classes.item}>
                    <h2>I want to cook ....</h2>
                    <LearnOption text="Asian cuisine"></LearnOption>
                    <LearnOption text="Western cuisine"></LearnOption>
                    <LearnOption text="Anything. Surprise me!"></LearnOption>
                </Grid>
                <Grid item className={classes.item}>
                    <h2>Dishes that I want to cook are similar to ...</h2>
                    <Grid container space={5}>
                        <SquareOption text="Pho"></SquareOption>
                        <SquareOption text="Kway Teow"></SquareOption>
                        <SquareOption text="Bibimbap"></SquareOption>
                    </Grid>
                </Grid>
            </div> : <div />
            }
            {learnOnline ? <div>
                <Grid item className={classes.item}>
                    <h2>I want to learn ....</h2>
                    <LearnOption text="Science & Mathematics"></LearnOption>
                    <LearnOption text="Arts & Humanities"></LearnOption>
                    <LearnOption text="Anything. Surprise me!"></LearnOption>
                </Grid>
                <Grid item className={classes.item}>
                    <h2>Dishes that I want to cook are similar to ...</h2>
                    <Grid container space={5}>
                        <SquareOption text="Web Development"></SquareOption>
                        <SquareOption text="Contemporary Art"></SquareOption>
                        <SquareOption text="Microeconomics"></SquareOption>
                    </Grid>
                </Grid>
            </div> : <div />
            }
            <Grid item className={classes.item}>
                <Button component={Link} to="/start-day">Confirm</Button>
            </Grid>
            
        </Grid>
        </Fade>
    );
}

function LearnOption(props) {

    return (
        <Card>
            <CardActionArea>
            <CardContent>
            <p>{props.text}</p>
            </CardContent>
            </CardActionArea>
        </Card>
    )
}

function SquareOption(props) {

    return (
        <Card>
            <CardActionArea>
            <CardContent>
            <p>{props.text}</p>
            </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default Personalization;