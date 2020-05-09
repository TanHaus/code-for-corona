import React from "react";
import { Grid, Button, ButtonBase, Fade } from "@material-ui/core";
import { Card, CardContent, CardActionArea } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import images from "../res/Asset";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    item: {
        margin: '20px auto',
        width: '80vw',
    },
    squareContent: {
        width: '25vw',
        height: '25vw',
        padding: 0,
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
                    <SmallOptionBoard items={[
                        {text: "Pho", image: images.pho},
                        {text: "Char Kway Teow", image: images.charKwayTeow},
                        {text: "Bibimbap", image: images.bibimbap},
                    ]}
                    ></SmallOptionBoard>
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
<<<<<<< HEAD
                    <Grid container space={5}>
                        <SmallOption text="Web Development" />
                        <SmallOption text="Contemporary Art" />
                        <SmallOption text="Microeconomics" />
                    </Grid>
=======
                    <SmallOptionBoard items={[
                        "Simba",
                        "Bello",
                    ]}>
                    </SmallOptionBoard>
>>>>>>> 5914192725b0535d272e66ecb5201900392d3130
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
                    <SmallOptionBoard items={[
                        {text: "Web Development"},
                        {text: "Contemporary Art"},
                        {text: "Microeconomics"},
                        {text: "Con mèo"}
                    ]}>
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
    const classes = useStyles();
    return (
        <Grid 
        container
        direction="row"
        justify="space-around"
        alignItems="center"
        className={classes.root}
        >
        { props.items.map(item => {
            return (
                <SmallOption text={item.text} image={item.image} xs={4} ></SmallOption>
            )
        }) }
        </Grid>
    )
}

function SmallOption(props) {
    const classes = useStyles();
    const text = props.text;
    const image = props.image || images.default;
    return (
        <Card>
        <CardActionArea>
        <CardContent
            className={classes.squareContent}
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
        }}>
            {/* div containing the text */}
            <div style={{ 
                position: 'absolute', 
                zIndex:1, width: '100%',
                height: '100%'
            }}>
            <p style={{ color: 'white', marginTop: 'calc(50% - 0.5em'}}>
                {text}
            </p>
            </div>

            {/* Black layer on top */}
            <div style={{
                backgroundColor: 'black', 
                opacity: 0.4, 
                width: '100%', 
                height: '100%'}} />
            
        </CardContent>
        </CardActionArea>
        </Card>
    )
}

export default Personalization;