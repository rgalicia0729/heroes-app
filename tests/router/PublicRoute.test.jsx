import {render, screen} from '@testing-library/react';
import {MemoryRouter, Route, Routes} from 'react-router-dom';

import {AuthContext} from '../../src/auth/context';
import {PublicRoute} from '../../src/router/PublicRoute';

describe('Pruebas en <PublicRoute />', () => {
    test('Si no esta autenticado debe de mostrar el children', () => {
        const title = 'Ruta pública';

        const authState = {
            logged: false
        }

        render(
            <AuthContext.Provider value={{authState}}>
                <PublicRoute>
                    <h1>{title}</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );

        expect(screen.getByText(title)).toBeTruthy();
    });

    test('Debe de navegar si esta autenticado', () => {
        const titleMarvel = 'Página de Marvel';

        const authState = {
            logged: true,
            user: {
                name: 'admin'
            }
        }

        render(
            <AuthContext.Provider value={{authState}}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path="login" element={
                            <PublicRoute>
                                <h1>Ruta pública</h1>
                            </PublicRoute>
                        }/>
                        <Route path="marvel" element={<h1>{titleMarvel}</h1>}/>
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText(titleMarvel)).toBeTruthy();
    });
});