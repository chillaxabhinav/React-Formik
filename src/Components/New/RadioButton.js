import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';

const RadioButton = (props) => {

    const {label, name, options, ...rest} = props;

    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <Field name={name} {...rest}>
                {
                    ({field}) => {
                        console.log(field);
                        return options.map(option => {
                            return (
                                <React.Fragment key={option.key}>
                                    <input type="radio" id={option.value} value={option.value} {...field} checked={field.value === option.value} />
                                    <label htmlFor={option.value}>{option.key}</label>
                                </React.Fragment>
                            )
                        })
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default RadioButton;
