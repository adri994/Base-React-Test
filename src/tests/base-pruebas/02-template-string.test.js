import { getSaludo } from "../../base-pruebas/02-template-string";


describe('Pruebas en 02-template-string', () => {
    
    test('prueba en el metodo getSaludos', () => {
        
        const nombre = "Adrian";

        const saludo = getSaludo(nombre);

        expect(saludo).toBe("Hola "+nombre)
    })
    test('prueba en el metodo getSaludos con valor predefinido', () => {
        
        const nombre = "Carlos";

        const saludo = getSaludo();

        expect(saludo).toBe("Hola "+nombre)
    })
    
})
