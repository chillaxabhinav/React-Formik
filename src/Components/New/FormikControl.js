import React from 'react';
import input from './Input';
import Input from './Input';

const FormikControl = (props) => {

    const {control, ...rest} = props;

    switch(control){
        case 'input' : return <Input {...rest} />

        case 'textarea':

        case 'select':

        case 'radio':

        case 'checkbox':

        default : return null;
    }
}

export default FormikControl;
