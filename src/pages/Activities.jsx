import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles, Fade, Grid, Card, CardActionArea, CardMedia, CardContent, ButtonBase, Button } from "@material-ui/core";
import images from "../res/Asset";

const useStyles = makeStyles(theme => ({
  item: {
    margin: '20px auto',
  },
  card: {
    minWidth: '80vw',
    maxWidth: '400px',
    margin: '20px auto',
  },
  buttonBase: {
    width: '100%'
  },
  illustration: {
    width: 140,
    margin: '20px auto',
  }
}));

function ActivityCard(props) {
  const classes = useStyles();
  const { text, activity, setActivity } = props;
  const pic = props.pic || images.default;
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
        alt={text}
        height="140"
        width="140"
        image={pic}
        title={text}
        className={classes.illustration}
      />
    <CardContent>
      <p style={{
          color: activity ? "#FFFFFF" : "#000000" 
      }}>
          {text}
      </p>
    </CardContent>
      </CardActionArea>
    </ButtonBase>
    </Card>
  )
}

function Activities() {
  const classes                       = useStyles();
  const activities = JSON.parse(localStorage.getItem("activities"));
  const [cookDish, setCookDish]       = useState(activities.cookDish);
  const [watchMovie, setWatchMovie]   = useState(activities.watchMovie);
  const [readBook, setReadBook]       = useState(activities.readBook);
  const [workOut, setWorkOut]         = useState(activities.workOut);
  const [learnOnline, setLearnOnline] = useState(activities.learnOnline);
  const [cleanRoom, setCleanRoom]     = useState(activities.cleanRoom);
  const [chatFnF, setChatFnF]         = useState(activities.chatFnF);
  const [donate, setDonate]           = useState(activities.donate);
  const [volunteer, setVolunteer]     = useState(activities.volunteer);

  const handleSubmitForm = () => {
    const activities = {cookDish, watchMovie, readBook, workOut, learnOnline, cleanRoom, chatFnF, donate, volunteer};
    localStorage.setItem("activities", JSON.stringify(activities));
  }

  return (
    <Fade in={true} timeout={1000}>
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
        <ActivityCard text="Cook a dish"   activity={cookDish}   setActivity={setCookDish}   pic={images.cookDish} />
        <ActivityCard text="Watch a movie" activity={watchMovie} setActivity={setWatchMovie} pic={images.popcorn}  />
        <ActivityCard text="Read a book"   activity={readBook}   setActivity={setReadBook}   pic={images.book} />
      </Grid>
      <Grid item className={classes.item}>
        <h2>Self-improvement</h2>
        <ActivityCard text="Do a workout"              activity={workOut}     setActivity={setWorkOut}     pic={images.dumbbell}/>
        <ActivityCard text="Take a free online course" activity={learnOnline} setActivity={setLearnOnline} pic={images.eLearnring}/>
        <ActivityCard text="Clean your room"           activity={cleanRoom}   setActivity={setCleanRoom}   pic={images.broom}/>
      </Grid>
      <Grid item className={classes.item}>
        <h2>Human Interaction</h2>
        <ActivityCard text="Have a chat with family and friends" activity={chatFnF}   setActivity={setChatFnF}   pic={images.chat} />
        <ActivityCard text="Make a donation"                     activity={donate}    setActivity={setDonate}    pic={images.donation} />
        <ActivityCard text="Volunteer"                           activity={volunteer} setActivity={setVolunteer} pic={images.volunteer} />
      </Grid>
      <Grid item className={classes.item}>
        <Button
          variant="outlined"
          onClick={handleSubmitForm}
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