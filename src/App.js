import React, { useState } from "react";
import NewcardButton from "./Components/NewcardButton";
import CardsList from "./Components/CardsList";
import { v4 as uuidv4 } from 'uuid'; //unique ID generator
import EditModule from "./Components/EditModule";

function App() {
  const [cards, setCards] = useState([])

  const [titleText, setTitleText] = useState("Card Title") //input state
  const [mainText, setMainText] = useState("Main Card Text") //input state
  const [bottomText, setBottomText] = useState("Card Bottom Text") //input state

  const [open, setOpen] = useState(0) //edit state

function titleInputHandler (e) {
  setTitleText(e.target.value)
}
function mainInputHandler (e) {
  setMainText(e.target.value)
}
function bottomInputHandler (e) {
  setBottomText(e.target.value)
}

function addCardHandler () {

  if (titleText === "" || mainText === "" || bottomText === "") return;
  setCards(prevCards => {
    return [...prevCards, {id: uuidv4(), title: titleText, main: mainText, bottom: bottomText}]
  })

  setTitleText("Card Title")
  setMainText("Main Card Text")
  setBottomText("Card Bottom Text")
}

function deleteCardHandler (id) { 
  const newCards = [...cards];
  const filteredCards = newCards.filter(function(element) { return element.id !== id; });
  setCards(filteredCards);
}


  return (
  <>  
    <NewcardButton addCard={addCardHandler}/>
    <input value={titleText} onChange={titleInputHandler} type="text" maxlenght="17"></input>
    <input value={mainText} onChange={mainInputHandler} type="text" maxlength="150"></input>
    <input value={bottomText} onChange={bottomInputHandler} type="text" maxlength="17"></input>
      <div className="cardContainer">
        <CardsList cardsArray = {cards} deleteCard = {deleteCardHandler}/>
        <EditModule open={open} /> 
      </div>
  </> 
  );
}

export default App;
