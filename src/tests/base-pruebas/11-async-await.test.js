import { getImagen } from "../../base-pruebas/11-async-await"

describe('Prueba con async y await', () => {
    
    test('Debe retornar la url de la imagen', async() => {
        
        const url = await getImagen();
        expect(url.includes("https")).toBe(true)
    })
    
})
