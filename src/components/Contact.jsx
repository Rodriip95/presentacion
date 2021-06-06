import React from 'react'
import Puntitos from './random/Puntitos'
import Subtitulo from './random/Subtitulo'
import "./contact.css"
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import logoMail from '../assets/mails.svg'
import Swal from 'sweetalert2';
import config from '../emailjs/index.js'


const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Muy corto')
    .max(50, 'Muy largo!')
    .required('Campo obligatorio'),
  email: Yup.string()
    .email('Mail invalido')
    .required('Campo obligatorio'),
  message: Yup.string()
    .min(2, 'Muy corto')
    .max(200, 'Muy largo!')
    .required('Campo obligatorio'),
});

export default function Contact(){


    function sendEmail(e) {
        e.preventDefault();
        if(e.target.name.value !== "" && e.target.email.value !== "" && e.target.message.value){
            emailjs.sendForm(config.service, config.template, e.target, config.key)
            .then((result) => {
                e.target.reset()
                console.log(result.text);
                Swal.fire(
                    'Send Mail!',
                    'I will be answering you soon ;)',
                    'success'
                    )
                }, (error) => {
                    console.log(error.text);
                });
        }
      }


    return(
        <div id="contact" className="container">
            <div className="d-flex container justify-content-start pb-4">
                <Puntitos/>
                <Subtitulo subTitulo={"Contact"}/>
            </div>

            <div className="row">
                <div className="col-12 col-lg-6 px-4 d-flex flex-column justify-content-center align-items-center mb-5">
                    <h3>If you want to contact me you can do it through the form.</h3>
                    <img style={{width: "360px"}} src={logoMail} alt="logo de contactos"/>
                </div>

                <div className="col-12 col-lg-6 px-4 pt-lg-5">
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        message: '',
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={values => {
                        
                        console.log(values);
                    }}
                    >
                    {({ errors, touched }) => (
                        <Form onSubmit={sendEmail} className="d-flex flex-column justify-content-center">
                            <Field className="inputFormik" name="name" placeholder="Name..." />
                            {errors.name? (
                                <div className="alerta" style={{height:"28px"}}>{errors.name}</div>
                            ) : <div style={{height:"28px"}}></div>}
                            <Field className="inputFormik" name="email" type="email" placeholder="Mail..." />
                            {errors.email ? <div className="alerta" style={{height:"28px"}}>{errors.email}</div> : <div style={{height:"28px"}}></div>}
                            <Field className="inputFormik" style={{resize: "none"}} name="message" component="textarea" placeholder="Insert comment..." />
                            {errors.message ? <div className="alerta" style={{height:"28px"}}>{errors.message}</div> : <div style={{height:"28px"}}></div>}
                            <button className="btn-submit mt-2" type="submit">Send</button>
                        </Form>
                    )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}