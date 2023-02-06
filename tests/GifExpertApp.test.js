import { GifExpertApp } from '../src/GifExpertApp'
import { fireEvent, render, screen } from '@testing-library/react';

describe('Pruebas de GifExpertApp', () => {
    
    const newCategory = 'Dragon Ball'

    test('debe de hacer match con el snatshot', () => {
        
        const { container } = render( < GifExpertApp /> )
        expect(container).toMatchSnapshot()

    });
    test('debe de agregar la categoria', () => {
        
        render( < GifExpertApp /> )
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        fireEvent.input(input, { target: { value: newCategory } } );
        fireEvent.submit(form);
        
        screen.debug();
        expect(screen.getAllByRole('heading', {level:3}).length).toBe(1);

    });

    test('no debe ingresar el valor si ya existe', () => {
        
        render( < GifExpertApp /> )
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        fireEvent.input(input, { target: { value: newCategory } } );
        fireEvent.submit(form);
        
        fireEvent.input(input, { target: { value: newCategory } } );
        fireEvent.submit(form);

        expect(screen.getAllByRole('heading', {level:3}).length).toBe(1);
        screen.debug();        

    });
});