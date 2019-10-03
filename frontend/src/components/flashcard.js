/**
 *  * Details: When this component loads, it will load index 0 of the database.
 *  *           If you create a new card, it should jump to the new cards index.
 *  *           Or at least that's how I'd like it to work.
 */

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCards } from '../redux/actions';
import { bindActionCreators } from 'redux';
import {
    getCardsLoading,
    getCardsIndex,
    getCards,
} from '../reducers/cards';

import '../styles/Flashcard.css';


const Flashcard = ({ index, cards, loading, fetchCards }) => {

    // Hooks
    const [side_of_card, setSideOfCard] = useState('true');

    useEffect( () => {

        fetchCards();

    }, []);

    return (
        <div>
            { !loading
                ?
                <div className="loading">
                    Loading
                </div>
                :
                side_of_card
                ?
                <div className="card-rectangle" onClick={() => setSideOfCard(false)}>
                    <div className="card-text">
                        {console.log("C:", cards[index])}
                        {cards[index] ? cards[index].card_subject : null}
                    </div>
                </div>
                :
                <div className="card-rectangle-back" onClick={() => setSideOfCard(true)}>
                    <div className="card-text">
                        {cards[index] ? cards[index].card_description : null}
                    </div>
                </div>
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        index: getCardsIndex(state),
        cards: getCards(state),
        loading: getCardsLoading(state),
    }
}

const mapDispatchToProps = dispatch => {
    return { fetchCards: bindActionCreators(fetchCards, dispatch)}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Flashcard);