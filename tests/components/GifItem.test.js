import { render, screen } from '@testing-library/react'
import GifItem from '../../src/components/GifItem'



describe('Prueba de componente GifItem.jsx', () => {

    const title = 'Saitama'
    const url = 'https://one-punch.com/saitama'
    test('Debe hacer match un snapshot de GifItem', () => {
        
        const { container } = render( <GifItem title={ title } url={ url }/>);
        expect(container).toMatchSnapshot();
    });
    test('debe de mostrar el URL y el ALT inidicado', () => {
        render( <GifItem title={ title } url={ url }/>);
        // expect( screen.getByRole('img').src).toBe( url );
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );

    });
    test('debe de mostrar el titulo', () => {
        
        render( <GifItem title={ title } url={ url }/>);
        expect( screen.getByText( title )).toBeTruthy();

    });

});