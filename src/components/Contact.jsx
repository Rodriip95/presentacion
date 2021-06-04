import React from 'react'
import Puntitos from './random/Puntitos'
import Subtitulo from './random/Subtitulo'
import "./contact.css"
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import logoMail from '../assets/mails.svg'
import Swal from 'sweetalert2';


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
            emailjs.sendForm('service_ttsy6uy', 'template_t4fsev6', e.target, 'user_K893iL7VdE8hE59qWHaTD')
            .then((result) => {
                e.target.reset()
                console.log(result.text);
                Swal.fire(
                    'Mail enviado!',
                    'Te estare contestando pronto ;)',
                    'success'
                    )
                }, (error) => {
                    console.log(error.text);
                });
        }
      }


    return(
        <div className="container">
            <div className="d-flex container justify-content-start pb-4">
                <Puntitos/>
                <Subtitulo subTitulo={"Contact"}/>
            </div>

            <div className="row">
                <div className="col-12 col-lg-6 px-4 d-flex flex-column justify-content-center align-items-center mb-5">
                    <h3>Si deseas contactarme lo podes hacer a traves del formulario.</h3>
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
                            <Field className="inputFormik" name="name" placeholder="Nombre..." />
                            {errors.name? (
                                <div className="alerta" style={{height:"28px"}}>{errors.name}</div>
                            ) : <div style={{height:"28px"}}></div>}
                            <Field className="inputFormik" name="email" type="email" placeholder="Ingrese mail..." />
                            {errors.email ? <div className="alerta" style={{height:"28px"}}>{errors.email}</div> : <div style={{height:"28px"}}></div>}
                            <Field className="inputFormik" style={{resize: "none"}} name="message" component="textarea" placeholder="Ingresar comentario..." />
                            {errors.message ? <div className="alerta" style={{height:"28px"}}>{errors.message}</div> : <div style={{height:"28px"}}></div>}
                            <button className="btn-submit mt-2" type="submit">Enviar</button>
                        </Form>
                    )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}