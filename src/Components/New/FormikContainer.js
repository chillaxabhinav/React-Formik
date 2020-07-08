import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';


const FormikContainer = () => {

    const initialValues = {
        email : '',
        description : ''
    };

    const validationSchema = Yup.object({
        email : Yup.string().required('Required'),
        description : Yup.string().required('Required')
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
                        <button type="submit">Submit</button>
                    </Form>
                )
            }}
        </Formik>
    )
}

export default FormikContainer;
