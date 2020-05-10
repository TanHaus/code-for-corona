import React, { useState, useEffect } from "react";
import { Grid, Button, Fade, Collapse } from "@material-ui/core";
import { Card, CardContent, CardActionArea, CardMedia, CardActions, IconButton, ButtonBase } from "@material-ui/core";
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import images from "../res/Asset";
import { randomMooc, randomSpotify } from './RandomContent';

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

  const nowImage = now > 18 ? images.sun : now > 12 ? images.sunCloud : now > 6 ? images.sun : images.moon;
  const nowGreeting = now > 18 ? 'Good evening!' : now > 12 ? 'Good afternoon!' : now > 6 ? 'Good morning' : 'Good morning';

  const [image, setImage] = useState(nowImage);
  const [greeting, setGreeting] = useState(nowGreeting);
  // if (now > 18) { 
  //   setImage(images.moon);
  //   setGreeting('Good evening!');
  // }
  // else if (now > 12) { 
  //   setImage(images.sunCloud); 
  //   setGreeting('Good afternoon!');
  // }
  // else if (now > 6) { 
  //   setImage(images.sun); 
  //   setGreeting('Good morning');
  // }

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
      <h2 style={{
          color: "#5c5c5c"
      }}>{greeting}</h2>
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
  const [bibimbap, setBibimbap] = useState(false);
  const [ml, setMl] = useState(false);
  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [])
  const [mooc, setMooc] = useState(JSON.parse(randomMooc()));
  const [spotify, setSpotify] = useState(JSON.parse(randomSpotify()));
  
  return (
    <Fade in={true} timeout={1000}>
      <Grid 
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{
            backgroundColor: "#f3f3f3"
        }}
      >   
        <DayCard />

        <Grid item className={classes.item}>
            <h1 style={{color: "#333333"}}>Start your day</h1>
        </Grid>
        <Grid item className={classes.item}>
          <Card className={classes.card}>
            <CardActionArea>
              <ButtonBase onClick={_ => setBibimbap(!bibimbap)} style={{width: '100%'}}>
              <CardContent>
                <h3>Let's make some Bibimbap</h3>
              </CardContent>
              </ButtonBase>
            </CardActionArea>

            <Collapse in={bibimbap} timeout={1000}><Fade in={bibimbap} timeout={1000} style={{ transitionDelay: 200}}>
            <div>
            <CardMedia
              component="img"
              image={images.bibimbap} 
            />
            <CardActions>
              <a href="https://www.allrecipes.com/recipe/228240/bibimbap-korean-rice-with-mixed-vegetables/" target="_blank" rel="noopener noreferrer">
              <Button size="small">
                Recipe
              </Button>
              </a>
              <a href="https://www.youtube.com/watch?v=lqUtV6lT1n4" target="_blank" rel="noopener noreferrer">
              <Button size="small">
                Watch video demo
              </Button>
              </a>
            </CardActions>
            </div>

            </Fade></Collapse>
            


            
          </Card>
        </Grid>
        <Grid item className={classes.item}>
          <Card className={classes.card}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    {/* <p>Serial Killer</p>
                    <p>Lana Del Rey</p> */}
                    <iframe src={`https://open.spotify.com/embed/track/${spotify}`} title="spotify" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
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
                <a href={`spotify:track:${spotify}`} target='_blank' rel="noopener noreferrer">
                <Button size="small">
                  Listen on Spotify
                </Button>
                </a>
                <Button size="small" onClick={_ => setSpotify(JSON.parse(randomSpotify()))}>
                  Get another song!
                </Button>
                </CardActions>

            </div>
            <CardMedia
                className={classes.cover}
                image="/static/images/cards/live-from-space.jpg"
                title="Live from space album cover"
            />
          </Card>
        </Grid>

        {/* Online Learning */}
        <Grid item className={classes.item}>
        <Card className={classes.card}>
          <CardActionArea>
          <ButtonBase onClick={_ => setMl(!ml)} style={{width: '100%'}}>
          <CardContent>
            <h3>Recommend me an online course!</h3>
          </CardContent>
          </ButtonBase>
          </CardActionArea>
  
          <Collapse in={ml} timeout={1000}><Fade in={ml} timeout={1000} style={{ transitionDelay: 200}}>
          <div>
          <CardContent>
            <p>{mooc[0]}</p>
          </CardContent>
          <CardMedia
            component="img"
            image={images.webdev} 
          />
          <CardActions>
            <a href={mooc[1]} target='_blank' rel="noopener noreferrer">
            <Button size="small">
              Go to Coursera
            </Button>
            </a>
            <Button size="small" onClick={_ => setMooc(JSON.parse(randomMooc()))}>
              Recommend another course
            </Button>
          </CardActions>
          </div>

          </Fade></Collapse>
          

        </Card>
        </Grid>
        </Grid>
    </Fade>
  );
}

export default NewDay;