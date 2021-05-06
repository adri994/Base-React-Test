//import { render } from "@testing-library/react"
import PrimeraApp from "../PrimeraApp"
import React from 'react'
import { shallow } from 'enzyme'
import "@testing-library/jest-dom"


describe('Prueba en PrimeraApp', () => {
    
/*     test('Debe mostrar hola mundo', () => {

        const saludo ="hola mundo"

        //Sirve para renderizar
        const { getByText } = render(<PrimeraApp saludo={saludo} />)

        //Par que funcione este archivo tenemos que crear un archivo llamado setupTest
        //Noormalemnte cuando creamos un nuevo proyeto aparece
        expect( getByText(saludo) ).toBeInTheDocument()
        
    })
     */

    test('Debe mostrar <PrimeraApp /> correctamente', () => {
        
        //renderizar
        const wrapper =shallow( <PrimeraApp saludo="hola mundo" />)
        //Tenemso que descargar otra aplicacion
        expect( wrapper ).toMatchSnapshot();
    })

    test('debe mostrar el subtitulo enviado por props', () => {
        
        const subtitulo = "hola sammy"
        const wrapper =shallow( 
            <PrimeraApp 
                saludo="hola mundo" 
                subtitulo={subtitulo}/>)

        //Se comporta como el querySelector
        const textParrafo = wrapper.find("p").text()
        
        expect(textParrafo).toBe(subtitulo)
    })
    
    
})
