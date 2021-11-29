import React from 'react'
import { Route,Redirect } from 'react-router'

export const checkToken = () => {
    return localStorage.getItem('token') || null
}

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
          {...rest}
          render ={(props) => checkToken() ? <Component {...props}/> : <Redirect to={{pathname:'/',state:{from: props.location}}} />}           //Operation 1: Find the component property defined on props (Note: lowercase component) and assign it to a new location in state we call Component (Note: capital Component).
                                                                                                                                                //Operation 2: Then, take all remaining properties defined on the props object and collect them inside an argument called rest.
        />
    )
}

export default PrivateRoute
