import React from 'react';
import Textarea from './TextArea';
import Input from './Input';
import Select from './Select';
import RadioButtons from './RadioButton';

const FormikControl = (props) => {

    const {control, ...rest} = props;

    switch(control){
        case 'input' : return <Input {...rest} />

        case 'textarea': return <Textarea {...rest}/>

        case 'select': return <Select {...rest} />

        case 'radio': return <RadioButtons {...rest} />

        default : return null;
    }
}

export default FormikControl;
