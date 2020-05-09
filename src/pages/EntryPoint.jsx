import React from "react";
import { Link } from "react-router-dom";
import { Grid, Button } from "@material-ui/core";
 
function EntryPoint(props) {
    return (
        <Grid >
            <h1>Seeking to be inspired during Circuit Breaker?</h1>
            <Button component={Link} to="/configure">Haro</Button>
        </Grid>
    );
}

export default EntryPoint;