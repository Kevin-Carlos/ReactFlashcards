/**
 *  * Author: Kevin Carlos
 */

import React from 'react';

import './styles/App.css'
import Info from './components/info';
import Flashcard from './components/flashcard';

function App() {
  return(
    <div className="App">
      <header className="App-header">
        <h2 className="title">
          Flashcards
        </h2>

        <Flashcard />
        <Info />
      </header>
    </div>
  )
}

export default App;
