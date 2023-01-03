import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas al componentes AddCategory', () => {
    
    test('Debe cambiar el valor de la caja de texto ', () => {
       
        render( <AddCategory onNewCategory={ () => {} } /> );
        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: { value: 'saitama' }});

        expect( input.value).toBe( 'saitama' )

    });

});