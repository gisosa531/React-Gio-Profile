import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Drawer } from '@material-ui/core';
import {Link} from 'react-router-dom'
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
    
    Home,
    ContactMail,
    BusinessCenter,
    FileCopy,
    AssignmentReturn
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
        lsText: "Home",
        lsPath: "/"
    },
    {
        lsIcon: <FileCopy />,
        lsText: "Resume",
        lsPath: "/resume"
    },
    {
        lsIcon: <BusinessCenter />,
        lsText: "Portfolio",
        lsPath: "/portfolio"
    },
    {
        lsIcon: <ContactMail />,
        lsText: "Contacts",
        lsPath: "/contacts"
    },
]

function NavTabs() {
    const [state, setState] = useState({
        right: false
    });

    const toggleNavBar = (slider, open) => () => {
        setState({ ...state, [slider]: open })
    };

    const classes = setStyle()

    const sidebar = (slider) => (
        <Box className={classes.sideBar}
            component="div"
            onClick={toggleNavBar(slider, false)}
        >
            <Avatar className={classes.avatarPic} src={avatar} alt="Giovanni Sosa" />
            <Divider />
            <List>
                {sideItems.map((lstItems, Key) => (
                    <ListItem button key={Key} component = {Link} to ={lstItems.lsPath}>
                        <ListItemIcon className={classes.lsIcon}>
                            {lstItems.lsIcon}
                        </ListItemIcon>
                        <ListItemText className={classes.lsIcon} primary={lstItems.lsText} />
                    </ListItem>
                ))}

            </List>
        </Box>
    );
    return (
        <>
            <Box component="nav">
                <AppBar position="static" style={{ background: "#283655" }}>
                    <Toolbar>
                        <IconButton onClick={toggleNavBar("right", true)}>
                            <AssignmentReturn style={{ color: "#4b86b4" }} />
                        </IconButton>
                        <Typography variant="h4" style={{ color: "#e5e5dc" }}>
                            Portfolio
                        </Typography>
                        <Drawer
                            anchor="right"
                            open={state.right}
                            onClose={toggleNavBar("right", false)}>
                            {sidebar("right")}
                        </Drawer>

                    </Toolbar>


                </AppBar>
            </Box>


        </>
    );
};

export default NavTabs;
