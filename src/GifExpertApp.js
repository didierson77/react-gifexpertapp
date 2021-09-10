// snippet rafc

import React, { useState } from 'react'

import { AddCategory } from './componentes/AddCategory';
import { GifGrid } from './componentes/GifGrid';

export const GifExpertApp = () => {

    // const categorias=['One Punch','Samurai X','Dragon Ball'];
    const [categorias, setCategorias] = useState(['One Punch']);

    // const handleAgregar=()=>{
    //     // categorias.push('HunterXHunter');
    //     //solucion 1
    //     // setCategorias([...categorias,'HunterXHunter']);
    //     //solucion 2
    //     setCategorias(categs=>[...categs,'HunterXHunter']);
    // }

    return (
        <>
            <h2>GifExpert App</h2>
            <AddCategory setCategorias={setCategorias} ></AddCategory>
            <hr></hr>
            {/* <button onClick={handleAgregar} >Agregar</button> */}
                <ol>
                {
                    categorias.map((categoria)=>{
                        // return <li key={categoria}>{categoria}</li>;
                       return <GifGrid 
                                key={categoria} 
                                categoria={categoria} 
                            />;
                    })
                }
                </ol>
        </>
    )
}
