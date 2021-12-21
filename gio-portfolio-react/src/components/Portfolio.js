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
import project1 from "../assets/projects/BlossomBabies.png"

const Portfolio = () => {
    return (
        <Box component="div">
            <NavTabs />
            <Grid container justifyContent='center'>
               {/* Project 1 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt="Project 1"
                            height="140"
                            image={project1}
                            />

                            <CardContent>
                                <Typography gutterButton variant="h4">
                                    Project 1
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
