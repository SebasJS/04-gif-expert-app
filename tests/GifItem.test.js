import { render } from '@testing-library/react'
import { GifItem } from '../src/components/GifItem' 

describe('Prueba de componente GifItem.jsx', () => {
    test('Debe hacer match un snapshot de GifItem', () => {
        
        const { container } = render( < GifItem /> )
    });
});