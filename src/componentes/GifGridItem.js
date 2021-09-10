import React from 'react'

export const GifGridItem = ({id, titulo,url}) => {
    //const imagen=props.img;
    //console.log(id,titulo,url);
    return (
        <div className="tarjeta animate__animated animate__fadeIn">
            <img src={url} alt={titulo}></img>
            <p>{titulo}</p>
        </div>
    )
}
