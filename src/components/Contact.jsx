import React from 'react'
import Puntitos from './random/Puntitos'
import Subtitulo from './random/Subtitulo'

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

export default function Contact(){
    return(
        <div className="container">
            <div className="d-flex container justify-content-start pb-4">
                <Puntitos/>
                <Subtitulo subTitulo={"Contact"}/>
            </div>

            <div>
                <div>
                    <h3>Si deseas contactarme lo podes hacer a traves del formulario.</h3>
                </div>
                <div>
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={values => {
                        // same shape as initial values
                        console.log(values);
                    }}
                    >
                    {({ errors, touched }) => (
                        <Form>
                        <Field name="firstName" />
                        {errors.firstName && touched.firstName ? (
                            <div>{errors.firstName}</div>
                        ) : null}
                        <Field name="lastName" />
                        {errors.lastName && touched.lastName ? (
                            <div>{errors.lastName}</div>
                        ) : null}
                        <Field name="email" type="email" />
                        {errors.email && touched.email ? <div>{errors.email}</div> : null}
                        <button type="submit">Submit</button>
                        </Form>
                    )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}