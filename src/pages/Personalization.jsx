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
        width: '80vw',
    },
    square: {
        width: '20vw',
        height: '20vw',
    },
    card: {
        margin: '20px auto',
    },
    buttonBase: {
        width: '100%',
    }
})

function Personalization(props) {
    const classes = useStyles();
    const activities = JSON.parse(localStorage.getItem("activities"));
    const {cookDish, watchMovie, readBook, workOut, learnOnline, cleanRoom, chatFnF, donate, volunteer} = activities;

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
                    <SmallOptionBoard items={[
                        "Pho",
                        "Kway Teow",
                        "Bibimbap",
                        "Hello",
                    ]}
                    ></SmallOptionBoard>
                </Grid>
            </div> : <div />
            }
            {watchMovie ? <div>
                <Grid item className={classes.item}>
                    <h2>I want to watch ....</h2>
                    <BigOption text="Fiction & Thriller"></BigOption>
                    <BigOption text="Comedy"></BigOption>
                    <BigOption text="Horror"></BigOption>
                </Grid>
                <Grid item className={classes.item}>
                    <h2>My favourite movies are ...</h2>
                    <SmallOptionBoard items={[
                        "Simba",
                        "Bello",
                    ]}>
                    </SmallOptionBoard>
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
                    <BigOption text="Science & Mathematics"></BigOption>
                    <BigOption text="Arts & Humanities"></BigOption>
                    <BigOption text="Anything. Surprise me!"></BigOption>
                </Grid>
                <Grid item className={classes.item}>
                    <h2>Dishes that I want to cook are similar to ...</h2>
                    {/* <Grid container space={5}>
                        <SmallOption text="Web Development"></SmallOption>
                        <SmallOption text="Contemporary Art"></SmallOption>
                        <SmallOption text="Microeconomics"></SmallOption>
                    </Grid> */}
                    <SmallOptionBoard items={[
                        "Web Development",
                        "Contemporary Art",
                        "Microeconomics",
                        "Con mèo"]}>
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
        className={classes.card}
        style={{
            backgroundColor: option ? "#AAAAAA" : "#FFFFFF"
        }}
    >
        <ButtonBase 
            className={classes.buttonBase}
            // onClick={e => setOption(!option)}
        >
            <CardActionArea>
                <CardContent>

                        <p style={{
                            color: option ? "#FFFFFF" : "#000000" 
                        }}>
                            {text}
                        </p>

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
    const classes = useStyles();
    return (
        <Card>
        <CardActionArea>
        <CardContent className={classes.square}>
            <p>{props.text}</p>
        </CardContent>
        </CardActionArea>
        </Card>
    )
}

export default Personalization;