import { Action } from '../ngrx-fake/ngrx';

export const contadorReducer = ( state = 10, action: Action ) => {

    // Validar la acción que se debe realizar.
    switch( action.type ) {
        case 'INCREMENTAR':
            return state += 1;
        case 'DECREMENTAR':
            return state -= 1;
        case 'MULTIPLICAR':
            return state * action.pyload;
        case 'DIVIDIR':
            return state / action.pyload;
        case 'RESET':
                return state = 0;
        default:
            return state;
    }
}