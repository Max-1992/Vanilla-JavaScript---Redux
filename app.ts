import { Store, createStore } from 'redux';
import { contadorReducer } from './contador/contador.reducer';
import { incrementadorAction } from './contador/contador.action';

// Crear una instacia del Store con el método createStore de la libreria Redux para Vanilla JS.
const store: Store = createStore( contadorReducer );

// De esta forma podemos suscribirnos para escuchar los cambios de nuestro State.
store.subscribe( () => {
    console.log( store.getState() );
})

store.dispatch( incrementadorAction );