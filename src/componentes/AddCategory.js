import React, { useState } from 'react';

import PropTypes from "prop-types";

export const AddCategory = ({setCategorias}) => {

    const [valorInput, setvalorInput] = useState('');

    const manejadorValorInput=(e)=>{
        // console.log(e.target.value);
        setvalorInput(e.target.value);
    }


    const manejadorSubmit=(e)=>{
        e.preventDefault();
        if(valorInput.trim().length>2){
            setCategorias(categs=>[valorInput,...categs]);
            setvalorInput('');

        }
        //console.log('Submit hecho');
    }


    return (
        <form onSubmit={manejadorSubmit}>  
            <h1>{valorInput}</h1>
            <input 
            type='text'
            value={valorInput}
            onChange={manejadorValorInput}
            >
            </input>
        </form>
    )
}


AddCategory.propTypes={
    setCategorias:PropTypes.func.isRequired
};