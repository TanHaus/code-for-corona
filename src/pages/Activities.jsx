import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles, Fade, Grid, Card, CardActionArea, CardMedia, CardContent, ButtonBase, Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    item: {
        margin: '20px auto',
    },
    card: {
      minWidth: 340,
      maxWidth: 380,
      margin: '20px auto',
    },
    buttonBase: {
        position: 'relative',
        height: 200,
        [theme.breakpoints.down('xs')]: {
          width: '100% !important',
          height: '100% !important',
        }
    },
    media: {
      height: 250
    }
  }));

function ActivityCard(props) {
    const classes = useStyles();
    const { name, pic, activity, setActivity } = props;
    return (
        <Card
        container
        xs={12}
        className={classes.card}
        style={{
            backgroundColor: activity ? "#AAAAAA" : "#FFFFFF"
        }}
    >
        <ButtonBase 
            xs={12}
            className={classes.buttonBase}
            onClick={e => setActivity(!activity)}
        >
            <CardActionArea>
                <CardMedia 
                    component="img"
                    alt={name}
                    height="140"
                    image={pic}
                    title={name}
                />
                <CardContent>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <p style={{
                            color: activity ? "#FFFFFF" : "#000000" 
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

function Activities() {
    const classes = useStyles();
    const [cookDish, setCookDish] = useState(false);
    const [watchMovie, setWatchMovie] = useState(false);
    const [readBook, setReadBook] = useState(false);
    const [workOut, setWorkOut] = useState(false);
    const [learnOnline, setLearnOnline] = useState(false);
    const [cleanRoom, setCleanRoom] = useState(false);
    const [chatFnF, setChatFnF] = useState(false);
    const [donate, setDonate] = useState(false);
    const [volunteer, setVolunteer] = useState(false);

    const handleSubmitForm = () => {
        localStorage.setItem("cookDish", JSON.stringify(cookDish));
        localStorage.setItem("watchMovie", JSON.stringify(watchMovie));
        localStorage.setItem("readBook", JSON.stringify(readBook));
        localStorage.setItem("workOut", JSON.stringify(workOut));
        localStorage.setItem("learnOnline", JSON.stringify(learnOnline));
        localStorage.setItem("cleanRoom", JSON.stringify(cleanRoom));
        localStorage.setItem("chatFnF", JSON.stringify(chatFnF));
        localStorage.setItem("donate", JSON.stringify(donate));
        localStorage.setItem("volunteer", JSON.stringify(volunteer));
    }

    return (
        <Fade in="true">
        <Grid 
            container
            direction="column"
            justify="center"
            alignItems="center"
        >   
            <Grid item className={classes.item}>
                <h1>Choose your activities</h1>
                <p>as many as you like</p> 
            </Grid>
            <Grid item className={classes.item}>
                <h2>Leisure</h2>
                <ActivityCard name="Cook a dish" activity={cookDish} setActivity={setCookDish} />
                <ActivityCard name="Watch a movie" activity={watchMovie} setActivity={setWatchMovie} />
                <ActivityCard name="Read a book" activity={readBook} setActivity={setReadBook} />
            </Grid>
            <Grid item className={classes.item}>
                <h2>Self-improvement</h2>
                <ActivityCard name="Do a workout" activity={workOut} setActivity={setWorkOut} />
                <ActivityCard name="Take a free online course" activity={learnOnline} setActivity={setLearnOnline} />
                <ActivityCard name="Clean your room" activity={cleanRoom} setActivity={setCleanRoom} />
            </Grid>
            <Grid item className={classes.item}>
                <h2>Human Interaction</h2>
                <ActivityCard name="Have a chat with family and friends" activity={chatFnF} setActivity={setChatFnF} />
                <ActivityCard name="Make a donation" activity={donate} setActivity={setDonate} />
                <ActivityCard name="Volunteer" activity={volunteer} setActivity={setVolunteer} />
            </Grid>
            <Grid item className={classes.item}>
                <Button
                    variant="outlined"
                    onClick={() => handleSubmitForm()}
                    component={Link} 
                    to="/personalize"
                >
                        Continue
                </Button>
            </Grid>
        </Grid>
        </Fade>
    )
}

export default Activities;