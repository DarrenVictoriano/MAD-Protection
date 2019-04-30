// Import React and React Router Dom
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/index";
import Login from "./pages/login-signup";
import Home from "./pages/home";
import PageNotFound from "./pages/404-error";

function App() {

    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/home" component={Home} />
                    <Route component={PageNotFound} />
                </Switch>
            </div>
        </Router>
    );
}


export default App;