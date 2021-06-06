import React from 'react'
import "./tips.css"

export default function Tips(){
    return(
        <div>
            <div className="d-flex justify-content-md-around align-items-center mt-4">
                <div className="d-flex justify-content-center align-items-center">
                    <div>
                        <i className="iconos fas fa-chalkboard-teacher"></i>
                    </div>
                    <div>
                        <h2 className="numeroh2">2</h2>
                        <p className="desc-p">Tutorials performed</p>
                    </div>
                </div>   

                <div className="d-flex justify-content-center align-items-center">
                    <div>
                        <i className="iconos fas fa-users"></i>
                    </div>
                    <div>
                        <h2 className="numeroh2">18</h2>
                        <p className="desc-p">Students obtained</p>
                    </div>
                </div> 

                <div className="d-flex justify-content-center align-items-center">
                    <div>
                        <i className="iconos fas fa-hourglass-half"></i>
                    </div>
                    <div>
                        <h2 className="numeroh2">96</h2>
                        <p className="desc-p">Hours of tutorials</p>
                    </div>
                </div> 

                <div className="d-flex justify-content-center align-items-center">
                    <div>
                        <i class="iconos fas fa-file-code"></i>
                    </div>
                    <div>
                        <h2 className="numeroh2">234</h2>
                        <p className="desc-p">Files created</p>
                    </div>
                </div> 

            </div>
        </div>
    )
}