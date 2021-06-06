import React, { useEffect } from 'react';
import Puntitos from './random/Puntitos';
import Subtitulo from './random/Subtitulo';

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
        <div id="projects" className="container">
            <div className="d-flex container justify-content-start pb-4">
                <Puntitos/>
                <Subtitulo subTitulo={"Projects"}/>
            </div>

            <div data-aos="fade-up" className="row d-flex justify-content-around">
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
            </div>
        </div>
    )
}