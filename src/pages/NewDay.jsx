import React from "react";
import { Grid, Button, Fade } from "@material-ui/core";
import { Card, CardContent, CardActionArea, CardMedia, CardActions, IconButton } from "@material-ui/core";
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
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
  return (
    <Card
      container
      xs={12}
      className={classes.card}
    >
        <CardMedia 
            component="img"
            // alt={name}
            height="140"
            width="140"
            // image={pic}
            // title={name}
            className={classes.illustration}
        />
        <CardContent>

        </CardContent>
    </Card>
  )
}

function NewDay(props) {
    const classes = useStyles();
    
    return (
        <Fade in={true} timeout={1000}>
            <Grid 
                container
                direction="column"
                justify="center"
                alignItems="center"
            >   
                <Grid item className={classes.item}>
                    <h1>Start your day</h1>
                </Grid>
                <Grid item className={classes.item}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                image=""
                                title="Bibimbap"
                            />
                            <CardContent>
                                <p>Make Bibimbap</p>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small">
                                Recipe
                            </Button>
                            <Button size="small">
                                Watch video demo
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item className={classes.item}>
                    <Card className={classes.root}>
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                                <p>Serial Killer</p>
                                <p>Lana Del Rey</p>
                            </CardContent>
                            <div className={classes.controls}>
                                <IconButton aria-label="previous">
                                    <SkipPreviousIcon />
                                </IconButton>
                                <IconButton aria-label="play/pause">
                                    <PlayArrowIcon className={classes.playIcon} />
                                </IconButton>
                                <IconButton aria-label="next">
                                    <SkipNextIcon />
                                </IconButton>
                            </div>
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
                            <CardMedia
                                image=""
                                title="Bibimbap"
                            />
                            <CardContent>
                                <p>Learn Machine Learning</p>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small">
                                Go to Coursera
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Fade>
    );
}

export default NewDay;