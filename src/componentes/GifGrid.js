import React  from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';

// import { obtenerGifs } from '../auxiliares/obtenerGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({categoria}) => {
    const {data:imagenes,cargando}= useFetchGifs(categoria);


    return (
    <>       
        <h3 className="cargando animate__animated animate__fadeIn">{categoria}</h3>
        {/* {cargando ? 'Cargando...' : 'Datos Cargados'} */}
        {cargando && <p className="cargando animate__animated animate__flash">Cargando...</p>}
        {console.log('Data en GrifGrid',imagenes)}
        <div className="gridCartas">
                {
                    imagenes.map((img)=>{ 
                       return <GifGridItem 
                            key={img.id}        
                            { ...img } />;
                        // return <li key={id}>{titulo}</li>;
                    })
                }
        </div>
    </>
    )
}
