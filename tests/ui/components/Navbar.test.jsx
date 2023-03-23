import {fireEvent, render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';

import {AuthContext} from '../../../src/auth/context';
import {Navbar} from '../../../src/ui/components';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}));

describe('Pruebas en <Navbar />', () => {
    const authState = {
        logged: true,
        user: {
            name: 'Admin'
        }
    }

    const logout = jest.fn();
    beforeEach(() => jest.clearAllMocks());

    test('Debe de mostrar el nombre del usuario autenticado', () => {
        render(
            <AuthContext.Provider value={{authState}}>
                <MemoryRouter>
                    <Navbar/>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Admin')).toBeTruthy();
    });

    test('Debe de llamar el logout y navigate cuando se hace click en el botón', () => {
       render(
           <AuthContext.Provider value={{authState, logout}}>
               <MemoryRouter>
                   <Navbar />
               </MemoryRouter>
           </AuthContext.Provider>
       );

       const logoutButton = screen.getByRole('button');
       fireEvent.click(logoutButton);

       expect(logout).toHaveBeenCalled();
       expect(mockedUseNavigate).toHaveBeenCalledWith('/login', {
           replace: true
       });
    });
});