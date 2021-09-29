import React from 'react';
import Cards from './Cards';

export default function CardsList({ cardsArray, deleteCard }) {
    return (<>
      {cardsArray.map((card) => <Cards key={card.id} cardId={card.id} titleText={card.title} 
      mainText={card.main} bottomText={card.bottom} deleteCard={deleteCard}/>)}
      </>
    );
}
