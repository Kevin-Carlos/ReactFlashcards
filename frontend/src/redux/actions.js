export const REQUEST_CARDS_LOADING = 'REQUEST_CARDS_LOADING';
export const REQUEST_CARDS_ERROR = 'REQUEST_CARDS_ERROR';
export const REQUEST_CARDS_SUCCESS = 'REQUEST_CARDS_SUCCESS';

// IMport actions to my classes
export const requestCardsLoading = () => {
    return {
        type: REQUEST_CARDS_LOADING,
    };
}

export const requestCardsError = () => {
    return {
        type: REQUEST_CARDS_ERROR,
    }
}

export const requestCardsSuccess = (flashcards) => {
    return {
        type: REQUEST_CARDS_SUCCESS,
        items: flashcards,
    }
}

export const fetchCards = () => {
    console.log("here")
    return (dispatch) => {
        dispatch(requestCardsLoading());
        fetch("http://localhost:5000")
            .then(res => res.json())
            .then(json => dispatch(requestCardsSuccess(json)))
    }
}
