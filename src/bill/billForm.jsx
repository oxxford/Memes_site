import TextField from "@material-ui/core/TextField/TextField";
import {Field, reduxForm} from 'redux-form'
import React from "react";
import Typography from "@material-ui/core/Typography/Typography";


export const validate = values => {
    const errors = {};
    if (!values.name) {
        errors.name = 'Required'
    } else if (values.name.length > 15) {
        errors.name = 'Must be 15 characters or less'
    }

    if (!values.do) {
        errors.do = 'Required'
    }

    return errors
};

const AdaptedTextField = ({input: {value, onChange}, meta: { touched, error, warning }, ...custom}) => (
    <div>
        <TextField
            value={value}
            onChange={onChange}
            {...custom}
        />
        {error !== undefined &&
        <Typography style={{ color: '#ff0817' }}>
            {error}
        </Typography>}
    </div>
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


export default reduxForm({form: 'bill', validate})(BillForm);