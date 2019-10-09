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

// Need url to stay
// const proxyurl = "frontend-5d9db6155176a800012b87ed.c.5d8fa59da99b6b00011665f3.cycle.io";
const url = "http://backend-5d9db6155176a800012b87e9.c.5d8fa59da99b6b00011665f3.cycle.io";

export const fetchCards = () => {
    return (dispatch) => {
        dispatch(requestCardsLoading());
        fetch(url)
            .then(res => res.json())
            .then(json => dispatch(requestCardsSuccess(json)))
    }
}

// Fix Cors
export const postCards = (data) => {
    return (dispatch) => {
        const settings = {
            method: 'POST',
            body: JSON.stringify(data),
            credentials: 'omit',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            }
        };
        fetch(url + "/add", settings)
            .then(res => res.json())
            .then(json => dispatch(fetchCards(json)))
    }
}