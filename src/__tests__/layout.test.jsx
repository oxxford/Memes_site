import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import createStore from 'redux-mock-store'
import {Provider} from 'react-redux'
import renderer from 'react-test-renderer'
import {Layout} from "../Layout";
import {SettingsComponent} from "../settings";
import {FinalPage} from "../FinalPage";
import billPage from "../bill/billPage";

describe('testing Layout component', () => {

    it('test render layout component', () => {
        const initialState = {
            app: {
                memes: []
            }
        };
        const mockStore = createStore([]);
        const store = mockStore(initialState);

        const container = renderer
            .create(<Provider store={store} >
                    <Router>
                        <div>
                            <Route exact path="/" component={Layout} />
                            <Route exact path="/settings" component={SettingsComponent} />
                            <Route exact path="/finalPage" component={FinalPage} />
                            <Route exact path="/bill" component={billPage} />
                        </div>
                    </Router>
                </Provider>
                , {
                    createNodeMock: ({type}) => document.createElement(type)
                });
        const testInstance = container.getInstance();
        // testInstance.someMethod();
        expect(container.toJSON()).toMatchSnapshot();
    });
});

