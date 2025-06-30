import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustonHooks } from "../../src/03-examples";
import { useFetch, useCounter } from "../../src/hooks";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');


describe('Prubas en < MultipleCustonHooks />', () => { 

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach( () => {
        jest.clearAllMocks();
    });
    

    test('debe de mostrar el componente por defecto', () => { 
    
        useFetch.mockReturnValue({
           data: null,
           isLoading: true,
           hasError: null,
        });


        render( <MultipleCustonHooks/> )
        
        expect( screen.getByText('Cargando...') );
        expect( screen.getByText('Información de Pokémon') );

        const nexButton = screen.getByRole('button', {name: 'Siguiente' } );
        expect( nexButton.disabled ).toBeFalsy();
        
        // screen.debug();
     })

     test('debe de mostrar un Quote', () => { 
        
        useFetch.mockReturnValue({
           data: {
            name: "Charmander",
            id: 2,
            sprites: {
                back_default: "back_default",
                back_shiny: "back_shiny",
                front_default: "front_default",
                front_shiny: "front_shiny",
            },
        },
           isLoading: false,
           hasError: null,
        });

        render( <MultipleCustonHooks/> );
        expect( useFetch().data.name ).toBe('Charmander');
      
        const nexButton = screen.getByRole('button', {name: 'Siguiente' } );
        expect( nexButton.disabled ).toBeFalsy();
      
    });

    test('debe de llamar la funcion de incrementar', () => { 
        
        useFetch.mockReturnValue({
           data: {
            name: "Charmander",
            id: 2,
            sprites: {
                back_default: "back_default",
                back_shiny: "back_shiny",
                front_default: "front_default",
                front_shiny: "front_shiny",
            },
        },
           isLoading: false,
           hasError: null,
        });

        render( <MultipleCustonHooks/> );
        const nexButton = screen.getByRole('button', {name: 'Siguiente' } );
        fireEvent.click( nexButton );

        expect( mockIncrement ).toHaveBeenCalled();
     })

});