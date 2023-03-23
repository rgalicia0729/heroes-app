import {types} from "../../../src/auth/types/types";

describe('Pruebas en types', () => {
   test('Los tipos deben de coincidir', () => {
       expect(types).toEqual({
           login: '[AUTH]LOGIN',
           logout: '[AUTH]LOGOUT'
       });
   });
});