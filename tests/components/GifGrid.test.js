import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock( "../../src/hooks/useFetchGifs" );

describe('Pruebas en el componente GifGrid', () => {
    
    const category = 'one punch'

    test('debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render( < GifGrid category = { category } />);
        //screen.debug();
        expect( screen.getByText( 'Cargando...'));
        expect( screen.getByText( category ));

    });
    test('debe de mostrar los gifs cuando se cargan', () => {
        
        const gifs = [
            {
                id: '123ABC',
                title: 'Goku',
                url: 'https://gifs/goku'
            },
            {
                id: 'ABC123',
                title: 'Superman',
                url: 'https://gifs/superman'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render( < GifGrid category = { category } />);
        //screen.debug();

        expect( screen.getAllByRole( 'img' ).length ).toBe(2)

    });
});