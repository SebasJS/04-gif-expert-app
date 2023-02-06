import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas al hook useFetchGifs', () => {
    
    test('debe retornar los valores iniciales de images y isLoading', () => {
        
        const { result } = renderHook( () => useFetchGifs( 'goku ' ));
        const { images, isLoading } = result.current;

        expect( images.length ).toBe( 0 );
        expect( isLoading ).toBeTruthy;

    });

    test('debe retornar un arreglo de images y isLoading en false', async() => {
        
        const { result } = renderHook( () => useFetchGifs( 'goku ' ));
        
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan( 0 )
        );

        const { images, isLoading } = result.current;

        expect( images.length ).toBeGreaterThan( 0 );
        expect( isLoading ).toBeFalsy;

    });

});