import React, { useState, useEffect } from "react";
import { Grid, Button, Fade } from "@material-ui/core";
import { Card, CardContent, CardActionArea, CardMedia, CardActions, IconButton } from "@material-ui/core";
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import images from "../res/Asset";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    item: {
        margin: '20px auto',
        width: '80vw',
        maxWidth: '400px'
    },
    squareContent: {
        width: '25vw',
        height: '25vw',
        padding: 0,
    },
    card: {
        margin: '20px auto',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
      },
      content: {
        flex: '1 0 auto',
      },
      cover: {
        width: 151,
      },
      controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
      },
      playIcon: {
        height: 38,
        width: 38,
      },
}));

function DayCard(props) {
  const classes = useStyles();
  const now = new Date().getHours();
  const [image, setImage] = useState(images.moon);
  const [greeting, setGreeting] = useState('Good morning!');
  if (now > 18) { 
    setImage(images.moon);
    setGreeting('Good evening!');
  }
  else if (now > 12) { 
    setImage(images.sunCloud); 
    setGreeting('Good afternoon!');
  }
  else if (now > 6) { 
    setImage(images.sun); 
    setGreeting('Good morning');
  }

  return (
    <Card
      className={classes.card}
      style={{
        width: '80vw',
        maxWidth: '400px',
      }}
    >
    <Grid container
      style={{
        flexWrap: 'nowrap',
      }}>
      <CardContent
        style={{margin: 'auto 10px'}}
      >
      <h2>{greeting}</h2>
      </CardContent>
      <CardMedia
        image={image}
        className={classes.illustration}
        style={{width: 100, margin: '20px'}}
      />
    </Grid>
    </Card>
  )
}

function NewDay(props) {
  const classes = useStyles();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <Fade in={true} timeout={1000}>
      <Grid 
        container
        direction="column"
        justify="center"
        alignItems="center"
      >   
        <DayCard />

          <Grid item className={classes.item}>
              <h1>Start your day</h1>
          </Grid>
          <Grid item className={classes.item}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <p>Make Bibimbap</p>
                </CardContent>
                <CardMedia
                  component="img"
                  image={images.bibimbap} 
                />
              </CardActionArea>
                <CardActions>
                  <a href="https://www.allrecipes.com/recipe/228240/bibimbap-korean-rice-with-mixed-vegetables/" target="_blank">
                  <Button size="small">
                    Recipe
                  </Button>
                  </a>
                  <a href="https://www.youtube.com/watch?v=lqUtV6lT1n4" target="_blank">
                  <Button size="small">
                    Watch video demo
                  </Button>
                  </a>
                </CardActions>
            </Card>
          </Grid>
          <Grid item className={classes.item}>
              <Card className={classes.root}>
                  <div className={classes.details}>
                      <CardContent className={classes.content}>
                          {/* <p>Serial Killer</p>
                          <p>Lana Del Rey</p> */}
                          <iframe src="https://open.spotify.com/embed/track/0pYacDCZuRhcrwGUA5nTBe" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                      </CardContent>
                      {/* <div className={classes.controls}>
                          <IconButton aria-label="previous">
                              <SkipPreviousIcon />
                          </IconButton>
                          <IconButton aria-label="play/pause">
                              <PlayArrowIcon className={classes.playIcon} />
                          </IconButton>
                          <IconButton aria-label="next">
                              <SkipNextIcon />
                          </IconButton>
                      </div> */}
                      <CardActions>
                      <a href="spotify:track:0pYacDCZuRhcrwGUA5nTBe" target='_blank' >
                      <Button size="small">
                        Listen on Spotify
                      </Button>
                      </a>
                      </CardActions>

                  </div>
                  <CardMedia
                      className={classes.cover}
                      image="/static/images/cards/live-from-space.jpg"
                      title="Live from space album cover"
                  />
                  </Card>
          </Grid>
          <Grid item className={classes.item}>
              <Card className={classes.root}>
                  <CardActionArea>
                      <CardContent>
                          <p>Learn Machine Learning</p>
                      </CardContent>
                      <CardMedia
                        component="img"
                        image={images.webdev} 
                      />
                  </CardActionArea>
                  <CardActions>
                    <a href="https://www.coursera.org/learn/machine-learning" target='_blank' >
                    <Button size="small">
                          Go to Coursera
                    </Button>
                    </a>

                  </CardActions>
              </Card>
          </Grid>
        </Grid>
    </Fade>
  );
}

export default NewDay;