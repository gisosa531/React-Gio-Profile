import React from 'react';
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Typed from "react-typed";
import avatar from "../assets/avatar/avatar.png";

//Creating CSS styles
const setStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(16),
        height: theme.spacing(14),
        margin: theme.spacing(1.4)
    },
    text: {
        color: '#173F5F'
    },
    subText: {
        color: '#5D5C61',
        marginBottom: "2.5"
    },
    typedCont: {
        position: "absolute",
        top: "45%",
        left: "50%",
        transform: "translate(-50%,-60%)",
        width: "90vw",
        textAlign: "Center",
        zIndex: 1
    }
}))

export default function Header() {
    const classes = setStyles();
    return (
        <Box className={classes.typedCont}>
            <Grid container justify="center"> 
            <Avatar className={classes.avatar} src={avatar} alt = "Giovanni Sosa"/>

            </Grid>
            <Typography className={classes.text} variant="h3">
                <Typed strings={["Giovanni Sosa"]} typeSpeed={35}/>
            </Typography>
            <br/>
            <Typography className={classes.subText} variant="h4">
                <Typed strings={["Full-Stack Developer", "Javascript", "MERN Stack"]} typeSpeed={38} backSpeed={55} loop/>
            </Typography>
        </Box>
    )
}
