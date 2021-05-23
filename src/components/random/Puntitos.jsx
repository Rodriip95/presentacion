import React from "react"

function Puntitos() {

    const stylePunto = {
        width: "5px", 
        height: "5px", 
        borderRadius: "5px", 
        backgroundColor: "#000",
        opacity: "0.1",
    }
    
    return(
        <div className="d-flex flex-column justify-content-around" style={{width: "50px", height: "50px"}}>

        <div className="d-flex justify-content-around">
            <div style={stylePunto}></div>
            <div style={stylePunto}></div>
            <div style={stylePunto}></div>
            <div style={stylePunto}></div>
            
        </div>

        <div className="d-flex justify-content-around">
            <div style={stylePunto}></div>
            <div style={stylePunto}></div>
            <div style={stylePunto}></div>
            <div style={stylePunto}></div>
     
        </div>

        <div className="d-flex justify-content-around">
            <div style={stylePunto}></div>
            <div style={stylePunto}></div>
            <div style={stylePunto}></div>
            <div style={stylePunto}></div>

        </div>

        <div className="d-flex justify-content-around">
            <div style={stylePunto}></div>
            <div style={stylePunto}></div>
            <div style={stylePunto}></div>
            <div style={stylePunto}></div>

        </div>

        </div>
    )
}

export default Puntitos;