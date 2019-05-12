import React from 'react';
import { Redirect, Route } from "react-router-dom";
import validate from "../../utils/validateRoute";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (

        Component.token === true
            ? <Component {...props} />
            : <Redirect to={{
                pathname: '/404',
                state: { from: props.location }
            }} />

    )} />
)

export default PrivateRoute;