import React, { useState, useEffect } from "react";
import { Grid, Button, ButtonBase, Fade, Collapse } from "@material-ui/core";
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
  // useEffect(_ => { window.scrollTo(0,0); })
  const classes = useStyles();
  const activities = JSON.parse(localStorage.getItem("activities"));
  const {cookDish, watchMovie, readBook, workOut, learnOnline, cleanRoom, chatFnF, donate, volunteer} = activities;
  const [asian, setAsian] = useState(false);
  const [mooc, setMooc] = useState(false);
  const [family, setFamily] = useState(false);

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
      <Grid item className={classes.item}>
        <h1>Personalize your activities</h1>
      </Grid>

      {cookDish ? <div>
        <Grid item className={classes.item}>
          <h2>I want to cook ....</h2>
          <BigOption text="Asian cuisine" option={asian} setOption={setAsian} />
          <BigOption text="Western cuisine" />
          <BigOption text="Anything. Surprise me!" />
        </Grid>

        <Collapse in={asian} timeout={1000}><Fade in={asian} timeout={1000} style={{ transitionDelay: 200}}>
        <Grid item className={classes.item}>
          <h2>Dishes that I want to cook are similar to ...</h2>
          <SmallOptionBoard items={[
            {text: "Pho",            image: images.pho},
            {text: "Char Kway Teow", image: images.charKwayTeow},
            {text: "Bibimbap",       image: images.bibimbap},
          ]}
          ></SmallOptionBoard>
        </Grid>
        </Fade></Collapse>

      </div> : <div />
      }

      {learnOnline ? <div>
        <Grid item className={classes.item}>
          <h2>I want to learn ....</h2>
          <BigOption text="Science & Mathematics" ></BigOption>
          <BigOption text="Arts & Humanities"></BigOption>
          <BigOption text="Anything. Surprise me!" option={mooc} setOption={setMooc} ></BigOption>
        </Grid>

        <Collapse in={mooc} timeout={1000}><Fade in={mooc} timeout={1000} style={{ transitionDelay: 200}}>
        <Grid item className={classes.item}>
          <h2>Topics that I want to dive in...</h2>
          <SmallOptionBoard items={[
            {text: "Web Development", image: images.webdev},
            {text: "Art & Design",    image: images.art},
            {text: "Economics",       image: images.fed},
          ]}>
          </SmallOptionBoard>
        </Grid>
        </Fade></Collapse>

      </div> : <div />
      }

      {donate ? <div>
        <Grid item className={classes.item}>
          <h2>Causes I want to donate ...</h2>
          <BigOption text="Migrant workers in need"></BigOption>
          <BigOption text="Support World Health Organization"></BigOption>
          <BigOption text="Severely affected families and seniors"></BigOption>
        </Grid>
        <Grid item className={classes.item}>
          <h2>Topics that I want to dive in...</h2>
          <SmallOptionBoard items={[
            {text: "The Courage Fund",        image: images.courageFund},
            {text: "The Sayang Sayang Fund",  image: images.sayangsayang},
            {text: "Coronavirus Relief Fund", image: images.reliefFund},
          ]}>
          </SmallOptionBoard>
        </Grid>
      </div> : <div />
      }

      <Grid item className={classes.item}>
          <Button 
            variant="outlined"
            component={Link} to="/start-day"
          >
            Confirm
          </Button>
      </Grid>
        
    </Grid>
    </Fade>
  );
}

function BigOptionBoard(props) {
  const classes = useStyles();
  return (
    <div>
    { props.items.map(item => {
        return (
            <SmallOption text={item.text} image={item.image} xs={4} ></SmallOption>
        )
    })}
    </div>
  )
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
      onClick={e => setOption(!option)}
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