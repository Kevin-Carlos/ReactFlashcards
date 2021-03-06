/**
 *  * Author: Kevin Carlos
 *  * Details: The reducer for my flashcards
 */

import {
    REQUEST_CARDS_LOADING,
    REQUEST_CARDS_ERROR,
    REQUEST_CARDS_SUCCESS,
    INCREMENT_INDEX,
    DECREMENT_INDEX,
} from '../redux/actions';

var initialState = {
    cards: [],
    index: 0,
    loading: true,
    error: null,
}

const cardsReducer = (state = initialState, action) => {
    switch(action.type) {
        case REQUEST_CARDS_LOADING:
            return {
                loading: true,
                error: false,
            }

        case REQUEST_CARDS_ERROR:
            return {
                error: true,
                loading: true,
            }

        case REQUEST_CARDS_SUCCESS:
            return Object.assign({}, state, {
                type: REQUEST_CARDS_SUCCESS,
                loading: false,
                error: false,
                cards: action.items,
                index: 0,
            })

        case DECREMENT_INDEX:
            return {
                ...state,
                index: state.index - 1,
            }

        case INCREMENT_INDEX:
            return {
                ...state,
                index: state.index + 1,
            }


        default:
            return state;
    }
}

// Selectors
export const getCards = state => state.cards;
export const getCardsLoading = state => state.loading;
export const getCardsError = state => state.error;
export const getCardsIndex = state => state.index;

// Export for store
export default cardsReducer;