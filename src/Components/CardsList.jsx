import React from 'react';
import Cards from './Cards';

export default function CardsList({ cardsArray, deleteCard, openEditor }) {
    return (<>
      {cardsArray.map((card) => <Cards key={card.id} openEditor={openEditor} cardId={card.id} titleText={card.title} 
      mainText={card.main} bottomText={card.bottom} color={card.color} deleteCard={deleteCard}/>)}
      </>
    );
}
