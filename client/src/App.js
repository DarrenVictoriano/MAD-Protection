// Import React and React Router Dom
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/index";
import PageNotFound from "./pages/404-error";

function App() {

    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route component={PageNotFound} />
                </Switch>
            </div>
        </Router>
    );
}


export default App;