
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const StepThree = ({ previous, submit, formData }) => {
    return (
        <Formik
            initialValues={{ address: formData.address || '', city: formData.city || '' }}
            validationSchema={Yup.object({
                address: Yup.string().required('Required'),
                city: Yup.string().required('Required'),
            })}
            onSubmit={(values) => {
                submit(values);
            }}
        >
            <Form>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <Field name="address" type="text" />
                    <ErrorMessage name="address" component="div" className="error" />
                </div>
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <Field name="city" type="text" />
                    <ErrorMessage name="city" component="div" className="error" />
                </div>
                <div className='btn-group'>
                    <button type="button" onClick={previous}>Back</button>
                    <button type="submit">Submit</button>
                </div>
            </Form>
        </Formik>
    );
};

export default StepThree;
