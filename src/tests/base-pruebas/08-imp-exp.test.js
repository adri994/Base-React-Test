import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp"
import heroes from "../../data/heroes"

describe('Prueba en funcion de heroe', () => {
    
    test('Debe retornar un heroe por id', () => {
        
        const id =1

        const heroe = getHeroeById( id )

        const heroeData = heroes.find( h => h.id === id);

        expect( heroe ).toEqual( heroeData )
    })
    test('Debe retornar undifine si no existe', () => {
        
        const id =10

        const heroe = getHeroeById( id )

        expect( heroe ).toBe( undefined )
    })  

    test('Debe retonar un arreglo con los heroes de DC', () => {
        
        const owner = "DC"

        const heroeData = heroes.filter( h =>h.owner === owner)
        const data = getHeroesByOwner(owner)

        expect(data).toEqual(heroeData)
    })
    test('Debe retonar un arreglo de tamaño 2', () => {
        
        const owner = "Marvel"

        const heroeData = heroes.filter( h =>h.owner === owner)
        const data = getHeroesByOwner(owner)

        expect(data.length).toBe(heroeData.length)
    })
    
})


