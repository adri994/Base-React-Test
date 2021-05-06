import React from 'react'
import { shallow } from 'enzyme'
import CounterApp from '../CounterApp'

describe('Pruebas en CounterApp', () => {
    let wrapper = shallow ( <CounterApp />)

    //Esto se va ejecutar cada vez que se comience un test
    beforeEach(()=>{
        wrapper = shallow ( <CounterApp />)
    })
    
    test('Renderizado del CounterApp', () => {

        expect( wrapper ).toMatchSnapshot()
        
    })

    test('Verificar valor de Counter', () => {
        
        const num = 100;
        const wrapper = shallow ( <CounterApp value = {num} />)
        
        const text = wrapper.find("h2").text().trim()

        expect(text).toBe("100")
    })

    test('Debe incremeter el valor de counter', () => {
      
        //El at del array de bonotes voy agarra el de la primera posicion es como hacer  [0]
        wrapper.find("button").at(0).simulate("click");
        
        const text = wrapper.find("h2").text().trim()
        expect(text).toBe("11")
    })
    test('Debe tener el valor por defecto del counter', () => {

        wrapper = shallow ( <CounterApp value = {100} />)
        //El at del array de bonotes voy agarra el de la primera posicion es como hacer  [0]
        wrapper.find("button").at(0).simulate("click");
        wrapper.find("button").at(0).simulate("click");
        wrapper.find("button").at(0).simulate("click");
        wrapper.find("button").at(0).simulate("click");
        wrapper.find("button").at(1).simulate("click");
        
        const text = wrapper.find("h2").text().trim()
        expect(text).toBe("100")
    })
    
    
    
})

