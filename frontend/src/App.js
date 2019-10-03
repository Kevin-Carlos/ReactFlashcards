/**
 *  * Author: Kevin Carlos
 */

import React from 'react';
import { connect } from 'react-redux';
import './styles/App.css'
import Info from './components/info';
import Flashcard from './components/flashcard';
import {
  getCardsIndex,
  getCards,
} from './reducers/cards';

function App({ cards, index }) {
  return(
    <div className="App">
      <header className="App-header">
        <h2 className="title">
          Flashcards
        </h2>

        <Flashcard cards={cards} index={index}/>
        <Info cards={cards} index={index}/>
      </header>
    </div>
  )
}

const mapStateToProps = function(state) {
    return {
        index: getCardsIndex(state),
        cards: getCards(state),
    }
}

//export default Info;
export default connect(mapStateToProps)(App);