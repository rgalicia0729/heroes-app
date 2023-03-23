import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';

import {AuthContext} from '../../src/auth/context';
import {PrivateRoute} from '../../src/router/PrivateRoute';

describe('Pruebas en <PublicRoute />', () => {
    test('Debe de mostrar el children si esta autenticado', () => {
        Storage.prototype.setItem = jest.fn();

        const authState = {
            logged: true,
            user: {
                name: 'admin'
            }
        }

        render(
          <AuthContext.Provider value={{authState}}>
              <MemoryRouter>
                  <PrivateRoute>
                      <h1>Ruta privada</h1>
                  </PrivateRoute>
              </MemoryRouter>
          </AuthContext.Provider>
        );

        expect(screen.getByText('Ruta privada')).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenCalled();
    });
});