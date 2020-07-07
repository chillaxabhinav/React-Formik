import React from "react";

import { useFormik } from "formik";

import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string()
    .email("invalid email format")
    .required("Required"),
  channel: Yup.string().required("Required")
});

const initialValues = {
  name: "",
  email: "",
  channel: ""
};

const onSubmit = values => {
  console.log(values);
};

const YoutubeForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}

        <label>E-mail</label>
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}

        <label>Channel</label>
        <input
          type="text"
          name="channel"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.channel}
        />
        {formik.touched.channel && formik.errors.channel ? (
          <div>{formik.errors.channel}</div>
        ) : null}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default YoutubeForm;
