/**
 *  * Author: Kevin Carlos
 *  * Details: The reducer for my flashcards
 */

import {
    FETCH_CARDS_ERROR,
    FETCH_CARDS_LOADING,
    FETCH_CARDS_SUCCESS,
} from '../redux/actions';

var initialState = {
    cards: [],
    index: 0,
    loading: true,
    error: null,
}

const Cards = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_CARDS_LOADING:
            return {
                ...state,
                loading: true,
                index: 0,
            }

        case FETCH_CARDS_SUCCESS:
            return {
                ...state,
                loading: false,
                cards: action.payload.cards,
                index: action.payload.cards.length
            }

        case FETCH_CARDS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error,
                index: 0,
            }

        default:
            return state;
    }
}

// Selectors
export const getCards = state => state.cards;
// export const getCardsLen = state => state.cards.length;
export const getCardsLoading = state => state.loading;
export const getCardsError = state => state.error;
export const getCardsIndex = state => state.index;

// Export for store
export default Cards;