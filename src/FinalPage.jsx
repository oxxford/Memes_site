import React from "react";
import connect from "react-redux/es/connect/connect";
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button/Button";
import Link from "react-router-dom/es/Link";
import {dropTemplate} from "./data/action-creators";

class finalPage extends React.Component {
    render () {
        return (
            <div>
                <Typography variant="display2">
                    Here is your mem! Enjoy!!!
                </Typography>
                <div style={{marginTop: 50}}/>
                <img src={this.props.meme} width={this.props.width} height={this.props.height}/>

                <Button style={{float: 'right', marginRight: 400}} variant="contained" color="primary" onClick={this.props.dropTemplate} component={Link} to="/">
                    Create another one
                </Button>
            </div>
        )
    }
};

const mapStateToProps = (state) => ({
    meme: state.app.final_meme,
    width: state.app.width,
    height: state.app.height
});

const mapDispatchToProps = (dispatch) => ({
    dropTemplate: () => dispatch(dropTemplate())
});

export const FinalPage = connect(mapStateToProps, mapDispatchToProps)(finalPage);