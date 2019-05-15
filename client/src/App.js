// Import React and React Router Dom
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Pages
import LandingPage from "./pages/index";
import Login from "./pages/login-signup";
import Home from "./pages/home";
import Notes from "./pages/notes";
import Relog from "./pages/relog";
import PageNotFound from "./pages/404-error";
// Components
import Footer from "./components/Footer/index";
import PrivateRoute from "./components/PrivateRoute/index";

class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            token: localStorage.getItem('token'),
            userID: localStorage.getItem('userID'),
            userData: "noooo"
        }
    }

    setToken = (data) => {
        this.setState({
            token: data
        });
    }

    setUserID = (data) => {
        this.setState({
            userID: data
        });
    }

    setUserData = (data) => {
        this.setState({
            userData: data
        });
    }

    render() {
        return (
            <Router>
                <div className="home-body">
                    <Switch>
                        <Route exact path="/" render={(props) =>
                            <LandingPage {...props}
                                setToken={this.setToken}
                                setUserID={this.setUserID}
                                setUserData={this.setUserData}

                                getToken={this.state.token}
                                getUserID={this.state.userID}
                                getUserData={this.state.userData}
                            />}
                        />
                        <Route exact path="/login" render={(props) =>
                            <Login {...props}
                                setToken={this.setToken}
                                setUserID={this.setUserID}
                                setUserData={this.setUserData}

                                getToken={this.state.token}
                                getUserID={this.state.userID}
                                getUserData={this.state.userData}
                            />}
                        />
                        <Route exact path="/home"
                            token={false}
                            render={(props) =>
                                <Home {...props}
                                    setToken={this.setToken}
                                    setUserID={this.setUserID}
                                    setUserData={this.setUserData}

                                    getToken={this.state.token}
                                    getUserID={this.state.userID}
                                    getUserData={this.state.userData}
                                />}
                        />
                        <Route exact path="/notes"
                            token={true}
                            render={(props) =>
                                <Notes {...props}
                                    setToken={this.setToken}
                                    setUserID={this.setUserID}
                                    setUserData={this.setUserData}

                                    getToken={this.state.token}
                                    getUserID={this.state.userID}
                                    getUserData={this.state.userData}
                                />}
                        />
                        <Route exact path="/relog" component={Relog} />
                        <Route component={PageNotFound} />
                    </Switch>

                    <Footer />
                </div>
            </Router >
        );
    }
}


export default App;