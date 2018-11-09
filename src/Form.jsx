import TextField from "@material-ui/core/TextField/TextField";
import {Field, reduxForm} from 'redux-form'
import React from "react";

const required = value => value ? undefined : 'Required';

const AdaptedTextField = ({input: {value, onChange}, ...custom}) => (
    <TextField
        value={value}
        onChange={onChange}
        {...custom}

    />
);

const Cell = (number, require) => {
    return (
        <div>
            <Field component={AdaptedTextField} name={"label" + number} label={"label" + number}
                   margin="normal" type="text" validate={[required]} required={require}/>

            <span style={{marginLeft: 30}}/>

            <Field component={AdaptedTextField} name={"x" + number} label={"x" + number}
                   margin="normal" type="number" style={{width: 70}} required={require}/>

            <span style={{marginLeft: 30}}/>

            <Field component={AdaptedTextField} name={"y" + number} label={"y" + number}
                   margin="normal" type="number" style={{width: 70}} required={require}/>
        </div>
    )
};

const Form = () => (
    <form>
        {Cell(1, true)}
        {Cell(2, false)}
        {Cell(3, false)}
        {Cell(4, false)}
        {Cell(5, false)}
    </form>
);


export default reduxForm({form: 'labels'})(Form);