import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import NavTabs from "./NavTabs";


const setStyles = makeStyles(theme => ({
  mainBox: {
    background: "#c66b3d"
  },
  chronology: {
    position: "relative",
    padding: "1.3rem",
    margin: '0 auto',
    "&:before": {
      content: "''",
      position: "absolute",
      height: " 100% ",
      border: "1.3px groove #26495c",
      right: "44px",
      top: 0.2,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both"
    },
    [theme.breakpoints.up("md")]: {
      padding: "1.5rem",
      "&:before": {
        left: "calc(50% - 1.5px)",
        right: "auto"
      }
    }
  },
  chronoItem: {
    padding: "1rem",
    borderBottom: "2.3px solid #26495c",
    position: "relative",
    margin: "1.3rem 3.3rem 1.3rem 1.3rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute"
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.639rem",
      top: "calc(55%-5.3px)",
      borderStyle: "ridge",
      borderColor: "#c4a35a #c4a35a transparent transparent",
      borderWidth: "0.639rem",
      transform: "rotate(45deg)"
    },
    [theme.breakpoints.up("md")]: {
      width: "43%",
      margin: "1.3rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1.3rem",
        borderColor: "tan"
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.639rem",
        borderColor: "transparent transparent #26495c #26495c"
      }
    }
  },
  chronoYear: {
    textAlign: "center",
    maxWidth: " 9.369rem",
    margin: " 0 rem 0 auto",
    fontSize: "1.9rem",
    background: "#c4a35a",
    color: "#000000",
    lineHeight: 1,
    padding: "0.5rem 0 1rem",
    "&:before": {
      display: "none"
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto"
      },
      "&:nth-of-type(2n):before": {
        display: "none"
      }
    }
  },
  heading: {
    color: "#e5e5dc",
    padding: "3.3rem 0",
    textTransform: "uppercase"
  },
  subHeading: {
    color: "#1d3c45",
    padding: "0",
    textTransform: "uppercase"
  }
}));

export default function Resume() {
  const classes = setStyles();

  return (
    <>
      <NavTabs />
      <Box component="header" className={classes.mainBox}>
        <Typography
          variant="h5"
          align="center"
          className={classes.heading}
        > Work Experience
        </Typography>
        <Box component="div" className={classes.chronology} >
          <Typography
            variant="h3"
            className={`${classes.chronoYear} ${classes.chronoItem}`}
          >
            2013
          </Typography>
          <Box component="div" className = {classes.chronoItem}>
            <Typography variant="h4" align="center" className = {classes.subHeading}>
              Spanish Interpreter
            </Typography>
            <Typography variant="body1" align="center" style={{color: '#ced7d8'}}>
              Summit Interpreting
            </Typography>
            <Typography variant="subtitle1" align="center" style={{color: '#fff1e1'}}>
              Interpreted Spanish in clinical settings
            </Typography>
          </Box>
          <Typography
          variant="h5"
          align="center"
          className={classes.heading}
        > Work Experience
        </Typography>
        <Box component="div" className={classes.chronology} >
          <Typography
            variant="h3"
            className={`${classes.chronoYear} ${classes.chronoItem}`}
          >
            2014
          </Typography>
          <Box component="div" className = {classes.chronoItem}>
            <Typography variant="h4" align="center" className = {classes.subHeading}>
             Medical Interpreter
            </Typography>
            <Typography variant="body1" align="center" style={{color: '#ced7d8'}}>
              Summit Interpreting
            </Typography>
            <Typography variant="subtitle1" align="center" style={{color: '#fff1e1'}}>
              interpreted Spanish in clinical settings
            </Typography>
          </Box>
        </Box>
      </Box>
</Box>
    </>
  );
}
