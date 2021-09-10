import { useEffect, useState } from "react";


import {obtenerGifs} from '../auxiliares/obtenerGifs';


export const useFetchGifs = (categoria) => {
    const [state, setState] = useState(
        {
            data:[],
            cargando:true,
        });

        //para que solo se ejecute una vez y cuando cambie 
        useEffect(()=>{
            obtenerGifs(categoria)
                    .then(imgs=>{
                        // console.log(imgs);
                        setState({
                            data:imgs,
                            cargando:false,
                        })
            });
        },[categoria]);
        // console.log('State:',state);
        return  state; //{data:[],cargando:true}
}
