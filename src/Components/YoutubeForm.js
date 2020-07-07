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
    channel : '',
    social : {
      facebook : '',
      twitter : ''
    },
    phoneNumber : ['','']
};

const onSubmit = (values) => {
    console.log(values);
}

const YoutubeForm = () =>{

    return (
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} validateOnChange={false} validateOnBlur={false}>
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

          <label>Facebook profile</label>
          <Field type="text" name="social.facebook"/>

          <label>Twitter Profile</label>
          <Field type="text" name="social.twitter"/>

          <label>PhoneNumber-1</label>
          <Field type="text" name="phoneNumber[0]"/>

          <label>PhoneNumber-2</label>
          <Field type="text" name="phoneNumber[1]"/>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    );
}

export default YoutubeForm;