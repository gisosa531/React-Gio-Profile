import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from '@material-ui/core';
import NavTabs from './NavTabs';
import project1 from "../assets/projects/BlossomBabies.png";
import project2 from "../assets/projects/Local4U2U.png";

const style = makeStyles({
    mainCont: {
        background: "#222",
        height: "100%"
    },

    cardCont: {
        maxWidth: 355,
        margin: "2.5 rem",
        margin: "4rem auto"
    }
})
const Portfolio = () => {
    const classes = style()
    return (
        <Box component="div" className={classes.mainCont}>
            <NavTabs />
            <Grid container justifyContent='center'>
               {/* Project 1 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className= {classes.cardCont}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt="Project 1"
                            height="140"
                            image={project1}
                            />

                            <CardContent>
                                <Typography gutterButton variant="h4">
                                    BlossomBabies
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    lorem ipsum dolor
                                </Typography>
                            </CardContent>
                            <CardActions size="small" color="primary">
                                <Button>
                                    Share
                                </Button>
                                <Button>
                                    Live Demo
                                </Button>
                            </CardActions>
                            </CardActionArea>
                            </Card>
                           </Grid>
{/* Project 2 */}
<Grid item xs={12} sm={8} md={6}>
                    <Card className= {classes.cardCont}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt="Project 2"
                            height="140"
                            image={project2}
                            />

                            <CardContent>
                                <Typography gutterButton variant="h4">
                                    Local4U2U
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    lorem ipsum dolor
                                </Typography>
                            </CardContent>
                            <CardActions size="small" color="primary">
                                <Button>
                                    Share
                                </Button>
                                <Button>
                                    Live Demo
                                </Button>
                            </CardActions>
                            </CardActionArea>
                            </Card>

                            </Grid>
            </Grid>
        </Box>  
    );
};

export default Portfolio;
