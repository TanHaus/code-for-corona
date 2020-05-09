import React from "react";
import { Grid, Button, ButtonBase, Fade } from "@material-ui/core";
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
        
    },
    card: {
        minWidth: 340,
        maxWidth: 380,
        margin: '20px auto',
        minHeight: 140,
        maxHeight: 160
      },
})

function Personalization(props) {
    const classes = useStyles();
    const activities = JSON.parse(localStorage.getItem("activities"));
    const {cookDish, watchMovie, readBook, workOut, learnOnline, cleanRoom, chatFnF, donate, volunteer} = activities;

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
                    <OptionCard text="Asian cuisine" />
                    <OptionCard text="Western cuisine" />
                    <OptionCard text="Anything. Surprise me!" />
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
                    <OptionCard text="Science & Mathematics" />
                    <OptionCard text="Arts & Humanities" />
                    <OptionCard text="Anything. Surprise me!" />
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

function OptionCard(props) {
    const classes = useStyles();
    const { name, pic, option, setOption } = props;

    return (
    <Card
        container
        xs={12}
        className={classes.card}
        style={{
            backgroundColor: option ? "#AAAAAA" : "#FFFFFF"
        }}
    >
        <ButtonBase 
            xs={12}
            className={classes.buttonBase}
            onClick={e => setOption(!option)}
        >
            <CardActionArea>
                <CardContent>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <p style={{
                            color: option ? "#FFFFFF" : "#000000" 
                        }}>
                            {name}
                        </p>
                    </Grid>
                </CardContent>
            </CardActionArea>
        </ButtonBase>
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