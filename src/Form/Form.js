import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import "./Form.css";

const Form = () => (
  <div className="app">
    <h1 style={{color: "rgb(172, 0, 0)"}}> Relatório</h1>

    <Formik
      initialValues={{ email: ""}}
      onSubmit={async values => {
        await new Promise(resolve => setTimeout(resolve, 500));
        alert(JSON.stringify(values, null, 2));
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email()
          .required("Required")
      })}
    >
      {props => {
        const {
          values,
          touched,
          errors, 
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit
        } = props;

        return (
          <form onSubmit={handleSubmit}>

            <label htmlFor="name" style={{color: "rgb(172, 0, 0)"}}>Nome Completo</label>
            <input
              name="name"
              type="string"
              placeholder="Nome Completo"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.name && touched.name && "error"}
            />

        <label htmlFor="email" style={{ display: "block", color: "rgb(172, 0, 0)"}}>Email</label>
            <input
              id="email"
              placeholder="Email"
              type="text"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.email && touched.email
                  ? "text-input error"
                  : "text-input"
              }
            />
            {errors.email && touched.email && (
              <div className="input-feedback">{errors.email}</div>
            )}

            <button className="SubmitButton" type="submit" disabled={isSubmitting}>
              Enviar
            </button>
          </form>
        );
      }}
    </Formik>
  </div>
);

export default Form;
