import { getGifs } from '../../src/helpers/getGifs';

describe('Test del archivo getGifs()', () => {
    
    test('Debe retornar un arreglo de gifs', async () => {
        const gifs = await getGifs('One Punch');
        //console.log(gifs);

        expect( gifs.length ).toBeGreaterThan( 0 ); //Espera que lo que venga sea mayor que 0
        expect( gifs[0] ).toEqual({
            id: expect.any( String ), //Espera que lo que venga sea algun string
            title: expect.any( String ),
            url: expect.any( String )
        })
    });

});