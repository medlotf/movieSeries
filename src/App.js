import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Movie from "./components/Movie";

import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/movie/:movieId" component={Movie} />
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
