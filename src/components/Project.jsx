import React, { useEffect } from 'react';
import Puntitos from './random/Puntitos';
import Subtitulo from './random/Subtitulo';
import logoPatria from "../assets/Group.png"
import patria1 from "../assets/patria1.png"
import patria2 from "../assets/patria2.png"
import patria3 from "../assets/patria3.png"
import menu1 from "../assets/menu1.png"
import menu2 from "../assets/menu2.png"
import menu3 from "../assets/menu3.png"

import "./project.css"
import Aos from 'aos';

export default function Project(){
    useEffect(()=>{
        Aos.init({
          mirror: false,
          once: false,
          easing: 'ease-in-out',
          duration: 600
        });
      },[])

    return(
        <div id="projects">
            <div className="container">
                <div className="d-flex container justify-content-start pb-4">
                    <Puntitos/>
                    <Subtitulo subTitulo={"Projects"}/>
                </div>
            </div>

            {/* <div data-aos="fade-up" className="row d-flex justify-content-around">
                <div id="astrid" className="cardimg col-12 col-lg-12 col-xl-3">
                    <div className="resumen">
                        <a href="https://astridtoys.herokuapp.com/" target="_blank">Astrid Toys <span>(ver sitio)</span></a>
                        <p>Ecommerce de muñecos Funko. Proyecto didactivo realizado en la academia Soy Henry, el cual se trabajo en el stack PERN (Postgree, Express, React y NodeJs), trabajado sobre metodologia SCRUM, en este cumpli el rol de FullStack y Analista Funcional organizando al equipo y definiendo los objetivos de la aplicacion, fue deployado en Heroku.</p>
                    </div>
                </div>

                <div id="menu" className="cardimg col-12 col-lg-12 col-xl-3">
                    <div className="resumen">
                        <a href="https://ecommercereact-3a9a0.web.app/" target="_blank">Menu <span>(ver sitio)</span></a>
                        <p>Proyecto piloto, esta trabajado en React y Materialize montado en Firebase. Este proyecto es una plantilla pensada en una carta digital de productos para restaurantes con el fin de facilitar el acceso a la carta a los invitados</p>
                    </div>
                </div>

                <div id="coment" className="cardimg col-12 col-lg-12 col-xl-3">
                    <div className="resumen">
                        <a href="https://comments-227a9.web.app/" target="_blank">Comments <span>(ver sitio)</span></a>
                        <p>Henry me dio la oportunidad de ser Tutor de un grupo de Alumnos (15 personas aprox) que estan en las primeras instancias del Bootcamp y mi tarea es resolver sus dudas, acompañarlos en su carrera dentro de Henry y trasmitirles conocimientos utiles. Cree esta App para que nos dejen Feedback, Reviews o comentarios, esta hecha con React y Firebase.</p>
                    </div>
                </div>
            </div> */}
            <div data-aos="fade-up" className="row w-100 m-0 p-0">

                <div className="col-12 col-md-6 col-lg-4 d-flex flex-column justify-content-center align-items-center caja caja-at">
                    <a href="https://astridtoys.herokuapp.com/" target="_blank">Astrid Toys</a>
                    <p className="caja-p">-React Node Express PostgreSQL-</p>
                </div>
                <div className="col-12 col-md-6 col-lg-4 d-flex flex-column justify-content-center align-items-center caja caja-comment">
                    <a href="https://comments-227a9.web.app/" target="_blank">Henry Tutor's</a>
                    <p className="caja-p">-React Firebase Bootstrap-</p>
                </div>
                <div className="col-12 col-md-6 col-lg-4 d-flex flex-column justify-content-center align-items-center caja caja-menu">
                    <a href="https://ecommercereact-3a9a0.web.app/" target="_blank">Menu</a>
                    <p className="caja-p">-React Firebase Materialize-</p>
                </div>
                <div className="col-12 col-md-6 col-lg-4 d-flex flex-column justify-content-center align-items-center caja caja-patria">
                    <img src={logoPatria} alt="logo patria" />
                    <p className="text-dark mt-3">-React Native Expo-</p>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Info
                    </button>
                </div>
                <div className="col-12 col-md-6 col-lg-4 d-flex flex-column justify-content-center align-items-center caja bg-dark">
                {/* */}
                    <a className="logo logosup m-0 p-0" href="https://eventsport-b9cc9.web.app/" target="_blank">EVENT</a>
                    <a className="logo logoinf m-0 p-0" href="https://eventsport-b9cc9.web.app/" target="_blank">SPORT</a>
                    <p className="caja-p">-React Firebase Sass-</p>
                </div>
                <div className="col-12 col-md-6 col-lg-4 d-flex flex-column justify-content-center align-items-center caja-ecart caja">
                    <h1>ECart</h1>
                    <p className="caja-p">-React Native Expo Firebase-</p>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalecart">
                    Info
                    </button>
                </div>
            </div>
            <ModalPatria/>
            <ModalEcart/>
        </div>
    )
}

function ModalEcart(){
    return (
        // <!-- Modal -->
        <div class="modal fade" id="modalecart" tabindex="-1" aria-labelledby="modalecartLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalecartLabel" style={{fontFamily:"PT Sans, sans-serif",fontWeight: 600}}>E-Cart</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div className="w-100 d-flex flex-row justify-content-center align-items-center">
                        <img className="m-1 border rounded-2" style={{width: "30%"}} src={menu1} alt="captura de menu" />
                        <img className="m-1 border rounded-2" style={{width: "30%"}} src={menu2} alt="captura de menu" />
                        <img className="m-1 border rounded-2" style={{width: "30%"}} src={menu3} alt="captura de patria" />
                    </div>
                    <p>The application is a menu where you can have details of tables and orders in real time, it is a project of its own implemented for bars and restaurants.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>
    )
}

function ModalPatria(){
    return (
        // <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel" style={{fontFamily:"PT Sans, sans-serif",fontWeight: 600}}>Patria App</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div className="w-100 d-flex flex-row justify-content-center align-items-center">
                        <img className="m-1 border rounded-2" style={{width: "30%"}} src={patria1} alt="captura de patria" />
                        <img className="m-1 border rounded-2" style={{width: "30%"}} src={patria2} alt="captura de patria" />
                        <img className="m-1 border rounded-2" style={{width: "30%"}} src={patria3} alt="captura de patria" />
                    </div>
                    <p>The application is an informative social network of the political environment. I worked with the consulting firm Persiscal, where I was in charge of the Frontend creating it from scratch.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>
    )
}