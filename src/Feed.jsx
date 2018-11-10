import React from 'react'
import Gallery from 'react-photo-gallery';
import {connect} from "react-redux"
import {chooseTemplate} from "./data/action-creators";


class Feed extends React.Component {
    render() {
        return (
            <div>
                <Gallery photos={this.props.memes} onClick={this.onSelect}/>
            </div>
        );
    }

    onSelect = (event, obj) => {
        this.props.chooseTemplate(obj.photo)
    };
}

const mapStateToProps = (state) => ({
    memes: state.app.memes,
    template: state.app.template
});

const mapDispatchToProps = (dispatch) => ({
    chooseTemplate: (template) => dispatch(chooseTemplate(template))
});

export const FeedComponent = connect(mapStateToProps, mapDispatchToProps)(Feed);
