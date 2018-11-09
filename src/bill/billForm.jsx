import TextField from "@material-ui/core/TextField/TextField";
import {Field, reduxForm} from 'redux-form'
import React from "react";
import Typography from "@material-ui/core/Typography/Typography";

const AdaptedTextField = ({input: {value, onChange}, ...custom}) => (
    <TextField
        value={value}
        onChange={onChange}
        {...custom}

    />
);


const BillForm = () => (
    <form>
        <div>
            <Typography variant="subheading">
                Enter your name
            </Typography>
            <Field component={AdaptedTextField} name='name' label='name'
                   margin="normal" type="text" required/>
        </div>
        <div style={{marginTop: 50}}/>
        <div>
            <Typography variant="subheading">
                What are you doing
            </Typography>
            <Field component={AdaptedTextField} name='do' label='do'
                   margin="normal" type="text" required/>
        </div>
    </form>
);


export default reduxForm({form: 'bill'})(BillForm);