import React from "react"
import { connect } from 'react-redux'

import Button from "@material-ui/core/Button/Button";

import {getMemes} from "./data/action-creators";
import {FeedComponent} from "./Feed";

class LayoutComponent extends React.Component {
    render () {
        return (
            <div>
                <h1>
                    Wanna create your own mem?
                </h1>

                <Button variant="contained" color="primary" onClick={this.props.getMemes}>
                    Watch templates
                </Button>

                <div style={{marginTop: 50}}/>

                <FeedComponent/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    getMemes: () => getMemes(dispatch)
});

export const Layout = connect(null, mapDispatchToProps)(LayoutComponent);