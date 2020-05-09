import React from "react";
import { Grid, Button, Fade } from "@material-ui/core";
import { Card, CardContent, CardActionArea, CardMedia } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
   
})

function DayCard(props) {
  const classes = useStyles();
  return (
    <Card
      // container
      // xs={12}
      // className={classes.card}
      // style={{
      //     backgroundColor: activity ? "#AAAAAA" : "#FFFFFF"
      // }}
    >
      <CardMedia 
        // component="img"
        // alt={name}
        // height="140"
        // width="140"
        // image={pic}
        // title={name}
        // className={classes.illustration}
      />
    <CardContent>

    </CardContent>
    </Card>
  )
}

function NewDay(props) {
  return (
    <Fade timeout={1000}>
    <Grid 
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <p>This is when your day gets started</p>
    </Grid>
    </Fade>

  );
}

export default NewDay;