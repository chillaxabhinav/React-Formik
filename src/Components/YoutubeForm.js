import React from 'react';

import { useFormik } from 'formik';

const YoutubeForm = () =>{

    const formik = useFormik({
        initialValues : {
            name : '',
            email : '',
            channel : ''
        },
        onSubmit : values => {
            console.log(values);
        },
        validate : values => {
            // values.name, values.email, values.channel
            // error.name, error.email, error.channel
            let errors = {};

            if(!values.name) {
                errors.name = 'Required';
            }

            if(!values.email){
                errors.email = 'Required';
            }

            if(!values.channel){
                errors.channel = 'Required';
            }
            return errors;
        }
    });

    return (
      <div>
        <form onSubmit={formik.handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name ? <div>{formik.errors.name}</div> : null}

          <label>E-mail</label>
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? <div>{formik.errors.email}</div> : null}

          <label>Channel</label>
          <input
            type="text"
            name="channel"
            onChange={formik.handleChange}
            value={formik.values.channel}
          />
          {formik.errors.channel ? <div>{formik.errors.channel}</div> : null}

          <button type="submit">Submit</button>
        </form>
      </div>
    );
}

export default YoutubeForm;