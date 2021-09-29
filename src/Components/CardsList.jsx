import React from 'react'
import Cards from './Cards'

export default function CardsList({cardsArray}) {
    return (<>
      {cardsArray.map((card) => <Cards key={card.id} titleText={card.title} 
      mainText={card.main} bottomText={card.bottom} />)}
      </>
    );
}
