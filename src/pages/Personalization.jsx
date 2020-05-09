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
        <Fade in={true} timeout={1000}>
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
                    <BigOption text="Asian cuisine"></BigOption>
                    <BigOption text="Western cuisine"></BigOption>
                    <BigOption text="Anything. Surprise me!"></BigOption>
                </Grid>
                <Grid item className={classes.item}>
                    <h2>Dishes that I want to cook are similar to ...</h2>
                    <Grid container space={5}>
                        <SmallOption text="Pho"></SmallOption>
                        <SmallOption text="Kway Teow"></SmallOption>
                        <SmallOption text="Bibimbap"></SmallOption>
                    </Grid>
                </Grid>
            </div> : <div />
            }
            {learnOnline ? <div>
                <Grid item className={classes.item}>
                    <h2>I want to learn ....</h2>
                    <BigOption text="Science & Mathematics"></BigOption>
                    <BigOption text="Arts & Humanities"></BigOption>
                    <BigOption text="Anything. Surprise me!"></BigOption>
                </Grid>
                <Grid item className={classes.item}>
                    <h2>Dishes that I want to cook are similar to ...</h2>
                    <Grid container space={5}>
                        <SmallOption text="Web Development"></SmallOption>
                        <SmallOption text="Contemporary Art"></SmallOption>
                        <SmallOption text="Microeconomics"></SmallOption>
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

function BigOption(props) {
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

function SmallOption(props) {

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