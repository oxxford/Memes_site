import React from 'react'
import PropTypes from 'prop-types';
import Gallery from 'react-photo-gallery';
import {memesSelector} from "./data/selector"
import {connect} from "react-redux"

const Feed = (props) => (
    <div>
        <Gallery photos={props.memes} />
    </div>
);

Feed.propTypes = {
    children: PropTypes.node,
    memes: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};


const mapStateToProps = (state) => ({
    memes: memesSelector(state)
});

export const FeedComponent = connect(mapStateToProps)(Feed);
