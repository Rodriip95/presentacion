import React from 'react'
import wave from '../assets/wave.svg'
import './footer.css'

export default function Footer(){
    return(
        <div className="olascont">
            <div className="d-flex justify-content-center">
                <p className="olas">&copy; Rodri Penela Dev</p>
            </div>
            <img src={wave} alt="Olas"/>
        </div>
    )
}