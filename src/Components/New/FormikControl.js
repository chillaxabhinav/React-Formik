import React from 'react';
import Textarea from './TextArea';
import Input from './Input';

const FormikControl = (props) => {

    const {control, ...rest} = props;

    switch(control){
        case 'input' : return <Input {...rest} />

        case 'textarea': return <Textarea {...rest}/>

        case 'select':

        case 'radio':

        case 'checkbox':

        default : return null;
    }
}

export default FormikControl;
