
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const StepTwo = ({ next, previous, formData }) => {
  return (
    <Formik
      initialValues={{ email: formData.email || '', phone: formData.phone || '' }}
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        phone: Yup.string().required('Required'),
      })}
      onSubmit={(values) => {
        next(values);
      }}
    >
      <Form>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" component="div" className="error" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <Field name="phone" type="text" />
          <ErrorMessage name="phone" component="div" className="error" />
        </div>
        <div className='btn-group'>
        <button type="button" onClick={previous}>Back</button>
        <button type="submit">Next</button>
        </div>
      </Form>
    </Formik>
  );
};

export default StepTwo;
