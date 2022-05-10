import React from "react";
import { Switch, Route, Redirect } from 'react-router'

import Home from "../components/template/home/Home";
import UserCrud from "../components/user/UserCrud";

export default props => {
    return (
        <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/users"><UserCrud /></Route>
            <Redirect from='*' to="/"></Redirect>
        </Switch>
    )
}

