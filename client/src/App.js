// Import React and React Router Dom
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/index";
import PageNotFound from "./pages/404-error";
import Home from "./pages/home";

function App() {

    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/home" component={Home} />
                    <Route component={PageNotFound} />
                </Switch>
            </div>
        </Router>
    );
}


export default App;