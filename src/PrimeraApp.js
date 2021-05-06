import React from 'react'
import PropTypes from 'prop-types'


const PrimeraApp = ({saludo,subtitulo}) =>{

    return(
        <>
            <h1>{saludo}</h1>
            <p>{subtitulo}</p>
        </>
    ); 

}

//Indicar que se va a recibir
PrimeraApp.propTypes ={
    saludo:PropTypes.string.isRequired
}

//Otra forma de poner parametros por defectos

PrimeraApp.defaultProps = {
    subtitulo:"vista"
}

export default PrimeraApp;