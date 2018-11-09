import React from 'react'
import {connect} from "react-redux"
import Form from "./Form";
import Button from "@material-ui/core/Button/Button";
import CardContent from "@material-ui/core/CardContent/CardContent";
import CardHeader from "@material-ui/core/CardHeader/CardHeader";
import Card from "@material-ui/core/Card/Card";
import style from "./settings.css"
import {submitMeme} from "./data/action-creators";
import Typography from "@material-ui/core/Typography/Typography";
import Link from "react-router-dom/es/Link";

class Settings extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    Here's your template, choose labels for this template: {this.props.template.alt}
                </h1>
                <img src={this.props.template.src}
                     width={this.props.width}
                     height={this.props.height}/>

                <Card style={{ backgroundColor: '#dfdeff' }} className={style.menu}>
                    <CardHeader
                        title="Choose labels and where to put it:"
                    />
                    <div style={{marginLeft: 25}}>
                        <Typography variant="subheading">
                            Image size is {this.props.template.width} * {this.props.template.height}
                        </Typography>
                    </div>

                    <CardContent>
                        <Form/>
                    </CardContent>

                    <span className={style.button}/>
                    <Button variant="contained" color="primary" onClick={this.props.submit} component={Link} to="/finalPage">
                        Submit
                    </Button>
                    <div className={style.div}/>
                </Card>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    template: state.app.template,
    width: state.app.width,
    height: state.app.height
});

const mapDispatchToProps = (dispatch) => ({
    submit: () => dispatch(submitMeme())
});

export const SettingsComponent = connect(mapStateToProps, mapDispatchToProps)(Settings);