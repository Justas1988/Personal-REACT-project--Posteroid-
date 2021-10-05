import React from 'react';
import Cards from './Cards';

export default function CardsList({ open, editCardHandler, cardsArray, deleteCard, openEditor, likesIncrementer }) {
    return (<>
      {cardsArray.map((card) => <Cards key={card.id} cardsArray={cardsArray} editCardHandler = {editCardHandler} open={open} openEditor={openEditor} cardId={card.id} titleText={card.title} 
      mainText={card.main} bottomText={card.bottom} color={card.color} deleteCard={deleteCard} likes={card.likesNumber} likesIncrementer={likesIncrementer}/>)}
      </>
    );
}
