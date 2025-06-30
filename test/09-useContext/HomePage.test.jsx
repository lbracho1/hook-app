import { render, screen } from "@testing-library/react";
import { HomePage, UserContext } from "../../src/09-useContex";


describe('Pruebas en <HomePage/>', () => { 



    test('debe de mostrar el componente sin el usuario', () => { 
       
        render(
            <UserContext.Provider value={{ user: null }}>
                <HomePage/>
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre') //aria-label
        expect( preTag.innerHTML ). toBe( 'null' );
        
        
    });
 
});
