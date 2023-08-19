import React from 'react';
import PlayingCardList from './PlayingCardList';
import Pokedex from './Pokedex';
import './CardTable.css';

function CardTable() {
    return (
        <div className="CardTable">
            <header>
                <h1 className= "CardTable-heading">Check out my cards</h1>
            </header>
            <main>
                <PlayingCardList />
                <Pokedex />
            </main>
        </div>
    );
    }

export default CardTable;
