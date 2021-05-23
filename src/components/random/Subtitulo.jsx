import React from 'react'

export default function Subtitulo({subTitulo}) {
    const styleH2 = {
            fontFamily: "'PT Sans', sans-serif",
            fontSize: "36px",
            position: "relative",
            left: "-30px",
            bottom: "-15px",
            fontWeight: "bold",
            color: "#242446",
    }
    return(
        <h2 style={styleH2}>{subTitulo}</h2>
    )
}