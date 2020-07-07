import React from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';

import * as Yup from 'yup';

const validationSchema = Yup.object({
    name : Yup.string().required('Required'),
    email : Yup.string().email('invalid email format').required('Required'),
    channel : Yup.string().required('Required')
});

const initialValues = {
    name : '',
    email : '',
    channel : ''
};

const onSubmit = (values) => {
    console.log(values);
}

const YoutubeForm = () =>{

    return (
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <label>Name</label>
          <Field
            as="input"
            type="text"
            name="name"
          />
          <ErrorMessage name="name">
            {
                (errormsg) => {
                    return (
                        <div className="myerr">{errormsg}</div>
                    )
                }
            }
          </ErrorMessage>

          <label>E-mail</label>
          <Field
            type="email"
            name="email"
          />
          <ErrorMessage name="email" />

          <label>Channel</label>
          <Field
            type="text"
            name="channel"
          />
          <ErrorMessage name="channel" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    );
}

export default YoutubeForm;