// import React, { useState, useEffect } from "react";
// import axios from "axios";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import styles from "./styles.module.css";

const LoginPage = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("plaese enter email")
      .email("please enter a valid email"),
    password: Yup.string()
      .required("plaese enter password")
      .min(6, "password must be at least 6 characters"),
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className={styles.wrapper}>
            <h2>Login</h2>
            <hr />
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
              validateOnMount
            >
              {(formik) => {
                return (
                  <Form onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="">Email</label>
                      <Field
                        type="text"
                        name="email"
                        className={
                          formik.errors.email && formik.touched.email
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                      />
                      <ErrorMessage name="email">
                        {(errorMessage) => (
                          <small className="text-danger">{errorMessage}</small>
                        )}
                      </ErrorMessage>
                    </div>

                    <div className="form-group">
                      <label htmlFor="">Password</label>
                      <Field
                        type="password"
                        name="password"
                        className={
                          formik.errors.password && formik.touched.password
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                      />
                      <ErrorMessage name="password">
                        {(errorMessage) => (
                          <small className="text-danger">{errorMessage}</small>
                        )}
                      </ErrorMessage>
                    </div>
                    <input
                      type="submit"
                      value="Login"
                      disabled={!formik.isValid}
                      className="btn btn-primary btn-block"
                    />
                  </Form>
                );
              }}
            </Formik>
            <br />
            <p className="text-center">
              New User? <a href="/">Click Here</a>
            </p>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};
export default LoginPage;
