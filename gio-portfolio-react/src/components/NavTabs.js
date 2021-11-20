import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import rightNavSlider from "@material-ui/core/Drawer"
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemIcon,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box
} from "@material-ui/core";
import {
    ArrowBack,
    Home,
    ContactMail,
    BusinessCenter,
    FileCopy
} from "@material-ui/icons"
import avatar from "../assets/avatar/avatar.png"

// Creating CSS Styles 
const setStyle = makeStyles(theme => ({
    sideBar: {
        width: 220,
        background: "rgb(45, 133, 139)",
        height: "35rem"
    },
    avatarPic: {
        display: "block",
        margin: "0.4rem auto",
        width: theme.spacing(12),
        height: theme.spacing(12)
    },
    lsIcon: {
        color: "#cbdadb"
    }
}));

const sideItems = [
    {
        lsIcon: <Home />,
        lsText: "Home"
    },
    {
        lsIcon: <FileCopy />,
        lsText: "Resume"
    },
    {
        lsIcon: <BusinessCenter />,
        lsText: "Portfolio"
    },
    {
        lsIcon: <ContactMail />,
        lsText: "Contacts"
    },
]

function NavTabs() {
    const [state, setState] = useState({
        right: false
    });

    const toggleNavBar = (slider, on) => () => {
        setState({ ...state, [slider]: on })
    };

    const classes = setStyle()

    const sidebar = slider => (
        <Box className={classes.sideBar} component="div">
            <Avatar className={classes.avatarPic} src={avatar} alt="Giovanni Sosa" />
            <Divider />
            <List>
                {sideItems.map((lstItems, Key) => (
                    <ListItem button key={Key}>
                        <ListItemIcon className={classes.lsIcon}>
                            {lstItems.lsIcon}
                        </ListItemIcon>
                        <ListItemText className={classes.lsIcon} primary={lstItems.lsText} />
                    </ListItem>
                ))}

            </List>
        </Box>
    )
    return (

        <Box component="nav">
            <AppBar position="static" style={{ background: "#283655" }}>
                <Toolbar>
                    <IconButton onClick={toggleNavBar("right", true)}>
                        <ArrowBack style={{ color: "#4b86b4" }} />
                    </IconButton>
                    <Typography variant="h4" style={{ color: "#d0e1f9" }}>
                        Portfolio
                    </Typography>
                    

                </Toolbar>
                

            </AppBar>
            <rightNavSlider
                        on={state.right} >
                        {sidebar("right")}
                    </rightNavSlider>
        </Box>

    );
};

export default NavTabs
