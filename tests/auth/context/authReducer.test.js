import {authReducer} from '../../../src/auth/context';
import {types} from "../../../src/auth/types/types";

describe('Pruebas en authReducer', () => {
    test('Debe de retornar el estado por defecto', () => {
        const initialState = {
            logged: false
        }

        const state = authReducer(initialState, {});
        expect(state).toEqual(initialState);
    });

    test('Debe de llamar el login y establecer el usuario', () => {
        const initialState = {
            logged: false
        }

        const user = {name: 'admin'};

        const action = {
            type: types.login,
            payload: user
        };

        const want = {
            logged: true,
            user
        }

        const got = authReducer(initialState, action);
        expect(got).toEqual(want);
    });

    test('Debe de llamar a logout y eliminar el usuario y establecer logged en false', () => {
        const user = {name: 'admin'};

        const state = {
            logged: true,
            user
        }

        const action = {
            type: types.logout,
        }

        const want = {
            logged: false,
        }

        const got = authReducer(state, action);
        expect(got).toEqual(want);
    });
});