import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import './styles/index.css';
import App from './App';
import cardsReducer from './reducers/cards';

// Enable chrome redux devTools
// Trying non npm way
const store = createStore(
    cardsReducer, composeWithDevTools(
    applyMiddleware(thunkMiddleware),
));
//console.log('Store:', store.getState())
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)