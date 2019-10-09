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

export const fetchCards = () => {
    return (dispatch) => {
        dispatch(requestCardsLoading());
        fetch("http://frontend-5d9d959f5176a800012b7358.c.5d8fa59da99b6b00011665f3.cycle.io/backend-5d9d1b705176a800012b2790.c.5d8fa59da99b6b00011665f3.cycle.io")
            .then(res => res.json())
            .then(json => dispatch(requestCardsSuccess(json)))
    }
}

export const postCards = (data) => {
    return (dispatch) => {
        const location = "http://frontend-5d9d959f5176a800012b7358.c.5d8fa59da99b6b00011665f3.cycle.io/backend-5d9d1b705176a800012b2790.c.5d8fa59da99b6b00011665f3.cycle.io/add";
        const settings = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        };
        fetch(`${location}`, settings)
            .then(res => res.json())
            .then(json => dispatch(fetchCards(json)))
    }
}