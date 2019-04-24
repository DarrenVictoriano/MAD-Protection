// Import React and React Router Dom
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {

    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" render={() => <h1>Hi this is react app</h1>} />
                    <Route render={() => <h1>No Page Found</h1>} />
                </Switch>
            </div>
        </Router>
    );
}


export default App;