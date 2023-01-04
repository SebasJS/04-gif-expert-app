import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas al componentes AddCategory', () => {
    
    test('Debe cambiar el valor de la caja de texto ', () => {
       
        render( <AddCategory onNewCategory={ () => {} } /> );
        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: { value: 'saitama' }});

        expect( input.value).toBe( 'saitama' )
    });
    test('debe de cambiar el valor en el formulario', () => {

        const inputValue = 'Saitama'
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } /> );
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );
        //screen.debug();
        expect( input.value ).toBe( '' )

        expect( onNewCategory ).toHaveBeenCalled(); // Espera que la funcion halla sido llamada
        expect( onNewCategory ).toHaveBeenCalledTimes(1); // Espera que la funcion halla sido llamada una vez
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue ); // Espera que la funcion halla sido llamada con el valor

    });

    test('no debe llamar la funcion si el input esta vacio', () => {
        
        const onNewCategory = jest.fn();
        
        render( <AddCategory onNewCategory = { onNewCategory }/>);
        
        const form = screen.getByRole('form');

        fireEvent.submit( form );

        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled(); //Espera que la funcion no halla sido llamada

    });

});