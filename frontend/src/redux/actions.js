export const REQUEST_CARDS_LOADING = 'REQUEST_CARDS_LOADING';
export const REQUEST_CARDS_ERROR = 'REQUEST_CARDS_ERROR';
export const REQUEST_CARDS_SUCCESS = 'REQUEST_CARDS_SUCCESS';
export const DECREMENT_INDEX = 'DECREMENT_INDEX';
export const INCREMENT_INDEX = 'INCREMENT_INDEX';

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

export const decrementIndex = () => {
    return {
        type: DECREMENT_INDEX
    }
}

export const incrementIndex = () => {
    return {
        type: INCREMENT_INDEX
    }
}

const proxyurl = "http://frontend-5d9dae2a5176a800012b82fa.c.5d8fa59da99b6b00011665f3.cycle.io/";
const url = "backend-5d9dae2a5176a800012b82f6.c.5d8fa59da99b6b00011665f3.cycle.io/";

export const fetchCards = () => {
    return (dispatch) => {
        dispatch(requestCardsLoading());
        fetch(proxyurl + url)
            .then(res => res.json())
            .then(json => dispatch(requestCardsSuccess(json)))
    }
}

export const postCards = (data) => {
    return (dispatch) => {
        const settings = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        };
        fetch(proxyurl + url, settings)
            .then(res => res.json())
            .then(json => dispatch(fetchCards(json)))
    }
}