import React from "react"
import { connect } from 'react-redux'

import Button from "@material-ui/core/Button/Button";

import Webcam from "react-webcam";
import style from './layout.css'
import {getMemes, makeScreenshot} from "./data/action-creators";
import {FeedComponent} from "./Feed";
import Route from "react-router/es/Route";
import Link from "react-router-dom/es/Link";

class LayoutComponent extends React.Component {
    setRef = webcam => {
        this.webcam = webcam;
    };

    capture = () => {
        this.props.makeScreenshot(this.webcam.getScreenshot())
    };

    render () {
        return (
            <div>
                <Webcam className={style.webcam} ref={this.setRef} screenshotFormat="image/jpeg"/>

                <Button onClick={this.capture}>
                    Screenshot
                </Button>

                <Button onClick={this.props.getMemes}>
                    Get memes
                </Button>

                <Button component={Link} to="/memes">
                    Watch memes
                </Button>

                <Route exact path="/memes" component={FeedComponent} />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
    makeScreenshot: (img) => dispatch(makeScreenshot(img)),
    getMemes: () => getMemes(dispatch)
});

export const Layout = connect(mapStateToProps, mapDispatchToProps)(LayoutComponent);