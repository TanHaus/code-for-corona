import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Grid, Button, Fade } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    bigItem: {
        minHeight: '50vh',
    },
    button: {
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        border: 0,
        fontSize: 14,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 15px',
    }
})

function EntryPoint(props) {
    // useEffect(_ => { window.scrollTo(0,0); })
    const classes = useStyles();
    if (!JSON.parse(localStorage.getItem("activities"))) {
        const activities = {cookDish: false, watchMovie: false, readBook: false, workOut: false, learnOnline: false, cleanRoom: false, chatFnF: false, donate: false, volunteer: false};
        localStorage.setItem("activities", JSON.stringify(activities));
    }
    return (
        <div className={classes.root}>
        <Fade in="true">
        <Grid 
            container
            direction="column"
            justify="center"
            alignItems="center"
            style={{
                backgroundColor: "#f3f3f3"
            }}
            height="100vh"
        >   
            <Fade in={true} timeout={2000}>
                <Grid 
                    item 
                    // className={classes.bigItem}
                    style={{
                        paddingTop: "15vh",
                        minHeight: "40vh"
                    }}
                >
                    <div 
                        style={{
                            fontSize: "24px",
                            fontWeight: "bold",
                        }}
                    >
                        <p style={{margin: "5px", color: "#333333"}}>Seeking to be inspired</p>
                        <p style={{margin: "5px", color: "#333333"}}>during Circuit Breaker?</p>
                    </div>
                </Grid>
            </Fade>

            <Fade in={true} timeout={2000} style={{ transitionDelay: 1500}}>
                <Grid 
                    item 
                    // className={classes.bigItem}
                    style={{
                        minHeight: "60vh"
                    }}
                >
                    <Button 
                        component={Link} 
                        to="/choose-activities"
                        className={classes.button}
                    >Let's get started</Button>
                </Grid>
            </Fade>
            
        </Grid>
        </Fade>
        </div>

    );
}

export default EntryPoint;