/**
 *  * Author: Kevin Carlos
 */

import fetchCardsLoading from './actions';
import fetchCardsError from './actions';
import fetchCardsSuccess from './actions';


const fetchCards = () => {
    return dispatch => {
        dispatch(fetchCardsLoading());

        const getCards = async() => {
            try {
                const res = await fetch("http://localhost:5000/data/");
                const json = await res.json();

                dispatch(fetchCardsSuccess(json));
            } catch(e) {
                dispatch(fetchCardsError(e));
            }
        }

        getCards();
    }
}

export default fetchCards;