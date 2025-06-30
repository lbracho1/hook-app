import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage, UserContext } from "../../src/09-useContex";
import { useContext } from "react";


describe('Pruebas en el <LoginPage/>', () => { 
    
    const setUserMock = jest.fn();
    const userMock = jest.fn();

    beforeEach( () => jest.clearAllMocks() );

    test('Debe de mostrar el componente sin el usuario', () => { 
        
         render(
            <UserContext.Provider value={{ user: null }}>
                <LoginPage/>
            </UserContext.Provider>
         );

          const preTag = screen.getByLabelText('pre') //aria-label
          expect( preTag.innerHTML ).toBe( 'null' );
     })

     test('debe de llamar el setUser cuando se hace click en el boton', () => { 
        
         render(
            <UserContext.Provider value={{ user: userMock, setUser: setUserMock }}>
                <LoginPage />
            </UserContext.Provider>
         );

            const button = screen.getByText('Establecer Usuario')
            fireEvent.click( button );
         
            expect( setUserMock ).toHaveBeenCalledWith({ id: 123, name: 'Andres', email: 'andres@google.com'});

      })
 });