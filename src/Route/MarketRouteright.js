import { Switch, Route } from "react-router-dom";
import React from 'react';
import MarketRight from "../Compoment/MarketRight/MarketRight";

function MarketRouteright(props) {
    return (
        <div>
            <Switch>
                <Route path="/marketplace"><MarketRight /></Route>
                <Route path="/"></Route>
            </Switch>
        </div>
    );
}

export default MarketRouteright;