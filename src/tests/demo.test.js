describe('Prueba de demo.test.js', () => {
    test('Debe de ser iguales los string', () => {
    
        //inicializacion
        const mensaje = 'Hola mundo';
    
        //estimulo
        const mensaje2 = `Hola mundo`;
    
        //observar comportamiento
        expect(mensaje).toBe(mensaje2)
    })
})



