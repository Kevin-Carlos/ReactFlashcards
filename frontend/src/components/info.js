import React, { useState } from 'react';
import { postCards } from '../redux/actions';
import { decrementIndex, incrementIndex } from '../redux/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import '../styles/Info.css';

const Info = ({ cards, index, incrementIndex, decrementIndex, postCards }) => {
    // Hooks
    const [newCard, setCards] = useState({card_subject: '', card_description: ''});

    const handleSubmit = (e) => {
        e.preventDefault();

        //Debugging
        console.log('Form submitted.');
        console.log(`Card subject: ${cards.card_subject}`);
        console.log(`Card description: ${cards.card_description}`);

        //postCards(cards);
        postCards(newCard);

        // Reset fields
        setCards({card_subject: '', card_description: ''});
    }

    return (
        <div className="container">
            <div className="prev-next-button-container">
                { index < 1 ?
                    <span /> :
                    <i
                        className="arrow left"
                        type="submit"
                        onClick={decrementIndex}
                    />
                }
                { cards &&
                    index < cards.length - 1 ?
                    <i
                        className="arrow right"
                        type="submit"
                        onClick={incrementIndex}
                    /> :
                    <span />
                }
            </div>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <p>
                        <label> Subject: </label>
                            <input  className="form-group"
                                    type="text"
                                    name="card_subject"
                                    autoFocus
                                    value={newCard.card_subject}
                                    onChange={ e => {
                                        const val = e.target.value;
                                        setCards(prevState => {
                                            return {...prevState, card_subject: val}
                                        });
                                    }}
                            />
                    </p>
                    <p>
                        <label> Description: </label>
                            <input  className="form-group"
                                    type="text"
                                    name="card_description"
                                    value={newCard.card_description}
                                    onChange={ e => {
                                        const val = e.target.value;
                                        setCards(prevState => {
                                            return {...prevState, card_description: val}
                                        });
                                    }}
                            />
                    </p>
                    <input  type="submit"
                            value="Create Card"
                            className="button-primary"
                    />
                </form>
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
      incrementIndex: bindActionCreators(incrementIndex, dispatch),
      decrementIndex: bindActionCreators(decrementIndex, dispatch),
      postCards: bindActionCreators(postCards, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(Info);