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
    const { cookDish, watchMovie, readBook, workOut, learnOnline, cleanRoom, chatFnF, donate, volunteer } = activities;

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
                    <BigOption text="Asian cuisine" />
                    <BigOption text="Western cuisine" />
                    <BigOption text="Anything. Surprise me!" />
                </Grid>
                <Grid item className={classes.item}>
                    <h2>Dishes that I want to cook are similar to ...</h2>
                    <Grid container space={5}>
                        <SmallOption text="Pho" />
                        <SmallOption text="Kway Teow" />
                        <SmallOption text="Bibimbap" />
                    </Grid>
                </Grid>
            </div> : <div />
            }
            {watchMovie ? <div>
                <Grid item className={classes.item}>
                    <h2>I want to watch ....</h2>
                    <BigOption text="Fiction & Thriller" />
                    <BigOption text="Comedy" />
                    <BigOption text="Horror" />
                </Grid>
                <Grid item className={classes.item}>
                    <h2>My favourite movies are ...</h2>
                    <Grid container space={5}>
                        <SmallOption text="Web Development" />
                        <SmallOption text="Contemporary Art" />
                        <SmallOption text="Microeconomics" />
                    </Grid>
                </Grid>
            </div> : <div />
            }
            {learnOnline ? <div>
                <Grid item className={classes.item}>
                    <h2>I want to learn ....</h2>
                    <BigOption text="Science & Mathematics" />
                    <BigOption text="Arts & Humanities" />
                    <BigOption text="Anything. Surprise me!" />
                </Grid>
                <Grid item className={classes.item}>
                    <h2>Dishes that I want to cook are similar to ...</h2>
                    <Grid container space={5}>
                        <SmallOption text="Web Development" />
                        <SmallOption text="Contemporary Art" />
                        <SmallOption text="Microeconomics" />
                    </Grid>
                </Grid>
            </div> : <div />
            }
            {learnOnline ? <div>
                <Grid item className={classes.item}>
                    <h2>I want to learn ....</h2>
                    <BigOption text="Science & Mathematics" />
                    <BigOption text="Arts & Humanities" />
                    <BigOption text="Anything. Surprise me!" />
                </Grid>
                <Grid item className={classes.item}>
                    <h2>Dishes that I want to cook are similar to ...</h2>
                    {/* <Grid container space={5}>
                        <SmallOption text="Web Development"></SmallOption>
                        <SmallOption text="Contemporary Art"></SmallOption>
                        <SmallOption text="Microeconomics"></SmallOption>
                    </Grid> */}
                    <SmallOptionBoard
                        items={["Web Development",
                                "Contemporary Art",
                                "Microeconomics"]}>
                    </SmallOptionBoard>
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
    const classes = useStyles();
    const { text, pic, option, setOption } = props;    
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
                            {text}
                        </p>
                    </Grid>
                </CardContent>
            </CardActionArea>
        </ButtonBase>
    </Card>
    )
}

function SmallOptionBoard(props) {
    return (
        <Grid container>
        { props.items.map(item => {
            return (<SmallOption text={item}></SmallOption>)
        }) }
        </Grid>
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