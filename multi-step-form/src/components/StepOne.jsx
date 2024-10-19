
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const StepOne = ({ next }) => {
  return (
    <Formik
      initialValues={{ firstName: '', lastName: '' }}
      validationSchema={Yup.object({
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
      })}
      onSubmit={(values) => {
        next(values);
      }}
    >
      <Form>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" type="text" />
          <ErrorMessage name="firstName" component="div" className="error" />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" type="text" />
          <ErrorMessage name="lastName" component="div" className="error" />
        </div>
        <button type="submit">Next</button>
      </Form>
    </Formik>
  );
};

export default StepOne;
