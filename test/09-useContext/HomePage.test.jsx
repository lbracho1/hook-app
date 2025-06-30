import { render, screen } from "@testing-library/react";
import { HomePage, UserContext } from "../../src/09-useContex";


describe('Pruebas en <HomePage/>', () => { 

      const user = {
            id: 1,
            name: 'Luis'
        }

    test('debe de mostrar el componente sin el usuario', () => { 
       
        render(
            <UserContext.Provider value={{ user: null }}>
                <HomePage/>
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre') //aria-label
        expect( preTag.innerHTML ). toBe( 'null' );
        // screen.debug();
    });
 
    
    
    test('debe de mostrar el componente CON el usuario', () => { 
        
        render(
            <UserContext.Provider value={{ user: user }}>
                <HomePage/>
            </UserContext.Provider>
        );
        
        const preTag = screen.getByLabelText('pre') //aria-label
        expect( preTag.innerHTML ).toContain( user.name );
        expect( preTag.innerHTML ).toContain( user.id.toString() );
        // screen.debug();
    });


});