import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';


const FormikContainer = () => {

    const dropdownOptions = [
        {key : 'Select an Option', value: ''},
        {key : 'Option 1', value: 'option1'},
        {key : 'Option 2', value : 'option2'},
        {key : 'Option 3', value : 'option3'}
    ]

    const initialValues = {
        email : '',
        description : '',
        selectOption :''
    };

    const validationSchema = Yup.object({
        email : Yup.string().required('Required'),
        description : Yup.string().required('Required'),
        selectOption: Yup.string().required('Required')
    });

    const onSubmit = (values) => {
        console.log(values);
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {formik => {
                return(
                    <Form>
                        <FormikControl control="input" name="email" label="Email" type="email" />
                        <FormikControl control="textarea" name="description" label="Description"/>
                        <FormikControl control="select" name="selectOption" label="Select a Topic" options={dropdownOptions}/>
                        <button type="submit">Submit</button>
                    </Form>
                )
            }}
        </Formik>
    )
}

export default FormikContainer;
