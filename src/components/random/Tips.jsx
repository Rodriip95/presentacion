import React from 'react'
import "./tips.css"

export default function Tips(){
    return(
        <div className="d-flex justify-content-center">
            <div className="row">
                <div className="cont-data col-4 d-flex justify-content-center">
                    <div>
                        <i className="fas fa-chalkboard-teacher"></i>                    </div>
                    <div className="cont-hp">
                        <h2>2</h2>
                        <p>Tutorias realizadas</p>
                    </div>
                </div>   

                <div className="cont-data col-4 d-flex justify-content-center">
                    <div>
                        <i className="fas fa-users"></i>
                    </div>
                    <div className="cont-hp">
                        <h2>18</h2>
                        <p>Alumnos</p>
                    </div>
                </div> 

                <div className="cont-data col-4 d-flex justify-content-center">
                    <div>
                        <i className="fas fa-hourglass-half"></i>                    </div>
                    <div className="cont-hp">
                        <h2>76</h2>
                        <p>Horas de tutorias</p>
                    </div>
                </div> 
            </div>
        </div>
    )
}