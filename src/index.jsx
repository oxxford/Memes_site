import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from 'react-router-dom'

import {Layout} from "./layout";
import Provider from "react-redux/es/components/Provider";
import {store} from "./data/store";
import Route from "react-router-dom/es/Route";
import {SettingsComponent} from "./settings";
import {FinalPage} from "./FinalPage";
import billPage from "./bill/billPage";


const App = () => (
    <Provider store={store} >
        <Router>
            <div>
                <Route exact path="/" component={Layout} />
                <Route exact path="/settings" component={SettingsComponent} />
                <Route exact path="/finalPage" component={FinalPage} />
                <Route path="/bill" component={billPage} />
            </div>
        </Router>
    </Provider>
);


ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
