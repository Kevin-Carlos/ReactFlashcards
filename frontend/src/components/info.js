import React, { useState } from 'react';
import { connect } from 'react-redux';
import postData from '../redux/postCards';
import { getCardsIndex } from '../reducers/cards';
// import { getCardsLen } from '../reducers/cards';

import '../styles/Info.css';

const Info = ({ index }) => {
    // Hooks
    const [cards, setCards] = useState({card_subject: '', card_description: ''});

    const handleSubmit = (e) => {
        e.preventDefault();

        //Debugging
        console.log('Form submitted.');
        console.log(`Card subject: ${cards.card_subject}`);
        console.log(`Card description: ${cards.card_description}`);

        postData(cards);

        // Reset fields
        setCards({card_subject: '', card_description: ''});
    }

    return (
        <div className="container">
            <div className="prev-next-button-container">
                {/* {console.log('Index:', index.index)}
                {console.log('Length:', DBlength.DBlength)} */}
                { index < 1 ?
                    <span /> :
                    <i
                        className="arrow left"
                        type="submit"
                        onClick={console.log("clicking")}
                    />
                }
                { index === 10 ?
                    <i
                        className="arrow right"
                        type="submit"
                        onClick={() => console.log("Clicking")}
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
                                    value={cards.card_subject}
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
                                    value={cards.card_description}
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

const mapStateToProps = function(state) {
    return {
        index: getCardsIndex(state),
    }
}

//export default Info;
export default connect(mapStateToProps)(Info);