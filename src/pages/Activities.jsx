import React, { useState } from "react";
import { makeStyles, Fade, Grid, Card, CardActionArea, CardMedia, CardContent, Typography, ButtonBase } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    body: {
      padding: theme.spacing(5),
      paddingTop: theme.spacing(3)
    },
    card: {
      minWidth: 340,
      maxWidth: 380
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
    const { activity, setActivity } = props;
    return (
        <Card
        container
        xs={12}
        className={classes.card}
        style={{
            backgroundColor: activity ? "#FFFFFF" : "#AAAAAA"
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
                    alt="Cook a dish"
                    height="140"
                    image="../static/images/cook-a-dish"
                    title="Cook a dish"
                />
                <CardContent>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <Typography
                            gutterBottom
                            variant="h6"
                            component="h3"
                            style={{
                                color: activity ? "#000000" : "#FFFFFF"
                            }}
                        >
                            Cook a dish
                        </Typography>
                    </Grid>
                </CardContent>
            </CardActionArea>
        </ButtonBase>
    </Card>
    )
}
function Activities() {
    const classes = useStyles();
    const [cooking, setCooking] = useState(false);

    return (
        <Fade in="true">
        <Grid 
            container
            direction="column"
            justify="center"
            alignItems="center"
        >   
            <Grid 
                xs={12}
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <h1>Choose your activities</h1>
                <p>as many as you like</p>
            </Grid>
            <Grid>
                <Grid
                    xs={12}
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <Typography
                        variant="h4"
                        component="h2"
                    >
                        Leisure
                    </Typography>
                </Grid>
                <Grid
                    xs={12}
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <ActivityCard activity={cooking} setActivity={setCooking} />
                </Grid>
            </Grid>
            
        </Grid>
        </Fade>
    )
}

export default Activities;