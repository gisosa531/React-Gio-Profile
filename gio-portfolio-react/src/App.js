import React from "react";
import {Route} from 'react-router-dom';
import { CssBaseline } from "@material-ui/core";
import Home from "./components/Home";
import Resume from "./components/Resume";
import "./App.css";
import Portfolio from "./components/Portfolio";



const App = () => {
    return (
        <>
            <CssBaseline />
            <Route exact path="/" component = {Home} />
            <Route path="/resume" component = {Resume}/>
            <Route path="/portfolio" component = {Portfolio}/>
        </>
    )
}

export default App;
