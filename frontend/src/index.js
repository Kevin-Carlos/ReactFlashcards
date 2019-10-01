import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './styles/index.css';
import App from './App';
import Cards from './reducers/cards';

// Enable chrome redux devTools
// Trying non npm way
//  /* preloadedState, */
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(
    Cards, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
//console.log('Store:', store.getState())
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)