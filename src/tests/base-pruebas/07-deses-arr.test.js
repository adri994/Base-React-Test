import { retornaArreglo } from "../../base-pruebas/07-deses-arr"

describe('Prueba de desestructuracion', () => {
    
    test('debe retornar un string y numero', () => {
        
        const [letras,num] = retornaArreglo()

        expect(typeof letras).toBe("string")
        expect(typeof num).toBe("number")
    })
    
})
