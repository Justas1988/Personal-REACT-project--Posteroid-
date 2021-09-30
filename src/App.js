import React, { useState, useRef } from "react";
import NewcardButton from "./Components/NewcardButton";
import CardsList from "./Components/CardsList";
import { v4 as uuidv4 } from 'uuid'; //unique ID generator

function App() {
  const [cards, setCards] = useState([])

const cardTitleRef = useRef()
const cardMainRef = useRef()
const cardBottomRef = useRef()

function addCardHandler () {
  const cardTitle = cardTitleRef.current.value;
  const cardMain = cardMainRef.current.value;
  const cardBottom = cardBottomRef.current.value;  

  if (cardTitle === "" || cardMain === "" || cardBottom === "") return;
  setCards(prevCards => {
    return [...prevCards, {id: uuidv4(), title: cardTitle, main: cardMain, bottom: cardBottom}]
  })

  cardTitleRef.current.value = null;
  cardMainRef.current.value = null;
  cardBottomRef.current.value = null;
}

function deleteCardHandler (id) { 
  const newCards = [...cards];
  const filteredCards = newCards.filter(function(element) { return element.id !== id; });
  setCards(filteredCards);
}


  return (
  <>  
    <NewcardButton addCard={addCardHandler}/>
    <input ref={cardTitleRef} type="text"></input>
    <input ref={cardMainRef} type="text"></input>
    <input ref={cardBottomRef} type="text"></input>
      <div className="cardContainer">
        <CardsList cardsArray = {cards} deleteCard = {deleteCardHandler}/>
      </div>
  </> 
  );
}

export default App;
