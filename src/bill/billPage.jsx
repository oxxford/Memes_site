import React from 'react'
import {connect} from "react-redux"
import Button from "@material-ui/core/Button/Button";
import CardContent from "@material-ui/core/CardContent/CardContent";
import CardHeader from "@material-ui/core/CardHeader/CardHeader";
import Card from "@material-ui/core/Card/Card";
import style from "./billPage.css"
import BillForm from "./billForm";
import {submitBillMeme} from "../data/action-creators";

class BillPage extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    Create meme with you
                </h1>
                <Card className={style.form} style={{backgroundColor: '#dfdeff'}}>
                    <CardHeader
                        title="Enter your info"
                    />
                    <CardContent>
                        <BillForm/>
                    </CardContent>

                    <span className={style.button}/>
                    <Button variant="contained" color="primary" onClick={this.props.submit}>
                        Submit
                    </Button>
                    <div className={style.div}/>
                </Card>

                {this.props.src &&
                    <img src={this.props.src} className={style.menu}/>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    src: state.app.billSrc
});

const mapDispatchToProps = (dispatch) => ({
    submit: () => dispatch(submitBillMeme())
});

export default BillPage = connect(mapStateToProps, mapDispatchToProps)(BillPage);