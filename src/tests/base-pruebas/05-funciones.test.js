import { getUser,getUsuarioActivo } from "../../base-pruebas/05-funciones"


describe('Pruebas 05-funciones', () => {
    
    test('getUser debe de retornar un objeto', () => {
        
        const userTest ={
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        //Para comparar objetos
        expect( userTest ).toEqual( user )
    })
    test('getUsuarioActivo debe de retornar un objeto', () => {

        const nombre = "adrian"

        const user = getUsuarioActivo(nombre)

        //Para comparar objetos
        expect( user ).toEqual({
            uid: 'ABC567',
            username: nombre
        })
    })
    
})
