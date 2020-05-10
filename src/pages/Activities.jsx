import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles, Fade, Grid, Card, CardActionArea, CardMedia, CardContent, ButtonBase, Button } from "@material-ui/core";
import images from "../res/Asset";

const useStyles = makeStyles(theme => ({
  item: {
    margin: '20px auto',
  },
  card: {
    width: "80vw",
    maxWidth: "400px",
    margin: '20px auto',
  },
  buttonBase: {
    width: '100%',
  },
  illustration: {
    width: 140,
    margin: '20px auto',
  }
}));

function ActivityCard(props) {
  const classes = useStyles();
  const { name, activity, setActivity, bgColor, setBgColor } = props;
  const pic = props.pic || images.default;
  return (
    <Card
      container
      style={{
          background: activity ? 'linear-gradient(45deg, #a1c4fd 30%, #c2e9fb 90%)' : "#FFFFFF"
      }}
      className={classes.card}
    >
    <ButtonBase 
      className={classes.buttonBase}
      onClick={e => {
        if (setBgColor) {
          if (activity) setBgColor(Math.max(0,bgColor-1))
          else setBgColor(Math.min(bgColor+1,5))
          // setBgColor(bgColor+1)
        }
        setActivity(!activity)
      }}
    >
    <CardActionArea>
      <CardMedia 
        component="img"
        alt={name}
        height="140"
        width="140"
        image={pic}
        title={name}
        className={classes.illustration}
      />
      <CardContent>
          <p style={{
              color: activity ? "#FFFFFF" : "#000000",
              fontWeight: "bold"
          }}>
              {name}
          </p>
      </CardContent>
    </CardActionArea>
    </ButtonBase>
    </Card>
  )
}

function ActivityCardDummy(props) {
  const classes = useStyles();
  const { name } = props;
  const pic = props.pic || images.default;
  return (
    <Card
      container
      style={{
          backgroundColor: "#FFFFFF"
      }}
      className={classes.card}
    >
    <CardActionArea>
      <CardMedia 
        component="img"
        alt={name}
        height="140"
        width="140"
        image={pic}
        title={name}
        className={classes.illustration}
      />
    <CardContent>
        <p
          style={{
            color: "000000",
            fontWeight: "bold"
          }}>
            {name}
        </p>
    </CardContent>
      </CardActionArea>
    </Card>
  )
}

function Activities() {
  // useEffect(_ => { window.scrollTo(0,0); })
  const classes                       = useStyles();
  const activities = JSON.parse(localStorage.getItem("activities"));
  const [cookDish, setCookDish]       = useState(activities.cookDish);
  // const [watchMovie, setWatchMovie]   = useState(activities.watchMovie);
  // const [readBook, setReadBook]       = useState(activities.readBook);
  // const [workOut, setWorkOut]         = useState(activities.workOut);
  const [learnOnline, setLearnOnline] = useState(activities.learnOnline);
  // const [cleanRoom, setCleanRoom]     = useState(activities.cleanRoom);
  // const [chatFnF, setChatFnF]         = useState(activities.chatFnF);
  const [donate, setDonate]           = useState(activities.donate);
  // const [volunteer, setVolunteer]     = useState(activities.volunteer);

  const [bgColor, setBgColor]         = useState(0);
  const colors = [
    "#f3f3f3",
    '#DDFFFF',
    '#CAFEFE',
    '#FFFFB5',
    '#FFFFAF',
    '#FEF2D9',
  ];
  // function getColor(index) { return colors[index] };

  const handleSubmitForm = () => {
    const activities = { cookDish, learnOnline, donate };
    localStorage.setItem("activities", JSON.stringify(activities));
  }

  return (
    <Fade in={true} timeout={1000}>
    <Grid 
      container
      direction="column"
      justify="center"
      alignItems="center"
      style={{
        backgroundColor: colors[bgColor]
      }}
    >   
      <Grid item className={classes.item}>
        <h1 style={{margin: "5px", color: "#333333", fontSize: "30px"}}>Choose your activities</h1>
        <p style={{margin: "5px", color: "#333333", fontSize: "24px"}}>as many as you like</p>
        <br/>
        <p style={{margin: "5px", color: "#333333"}}>(For the demo, only certain items will work)</p>
      </Grid>
      <Grid item className={classes.item}>
        <h2  style={{margin: "5px", color: "#333333"}}>Leisure</h2>
        <ActivityCard name="Cook a dish" activity={cookDish} setActivity={setCookDish} pic={images.cookDish} bgColor={bgColor} setBgColor={setBgColor} />
        <ActivityCardDummy name="Watch a movie" pic={images.popcorn}  />
        <ActivityCardDummy name="Read a book" pic={images.book} />
      </Grid>
      <Grid item className={classes.item}>
        <h2  style={{margin: "5px", color: "#333333"}}>Self-improvement</h2>
        <ActivityCardDummy name="Do a workout" pic={images.dumbbell}/>
        <ActivityCard name="Take a free online course" activity={learnOnline} setActivity={setLearnOnline} pic={images.eLearnring} bgColor={bgColor} setBgColor={setBgColor} />
        <ActivityCardDummy name="Clean your room" pic={images.broom}/>
      </Grid>
      <Grid item className={classes.item}>
        <h2  style={{margin: "5px", color: "#333333"}}>Human Interaction</h2>
        <ActivityCardDummy name="Have a chat with family and friends" pic={images.chat} />
        <ActivityCard name="Make a donation" activity={donate} setActivity={setDonate} pic={images.donation} bgColor={bgColor} setBgColor={setBgColor} />
        <ActivityCardDummy name="Volunteer" pic={images.volunteer} />
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