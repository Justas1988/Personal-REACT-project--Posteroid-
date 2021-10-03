import React, { useState, useEffect } from "react";
import NewcardButton from "./Components/NewcardButton";
import CardsList from "./Components/CardsList";
import { v4 as uuidv4 } from 'uuid'; //unique ID generator
import EditModule from "./Components/EditModule";
import temporaryCards from "./data/TemporaryCards";

function App() {
  const [cards, setCards] = useState(temporaryCards) //cardsArray state // remove temporary cards later
  const [titleText, setTitleText] = useState("Card Title") //input state
  const [mainText, setMainText] = useState("Main Card Text") //input state
  const [bottomText, setBottomText] = useState("Card Bottom Text") //input state
  const [open, setOpen] = useState(0) //editModule state

  /////////sorting algorithm with use effect ///////////////

  useEffect( () => {
    const sortedCards = [...cards] 
    if (sortedCards.length > 1) {
      if (Date.parse(sortedCards[sortedCards.length-1].date) > Date.parse(sortedCards[0].date)) {
        sortedCards.sort(sorter)
        setCards(sortedCards) 
  } return } return    
  }, [cards] );

function sorter(a, b) {
  if ( Date.parse(a.date) > Date.parse(b.date) ){
    return -1;
  }
  if ( Date.parse(a.date) < Date.parse(b.date) ){
    return 1;
  }
  return 0;
}

  /////////sorting algorithm with use effect ///////////////


function editModuleHandler(e) {
  setOpen(e);
}
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
    return [...prevCards, {id: uuidv4(), title: titleText, main: mainText, bottom: bottomText, date: new Date(), color: randomRGBA()}]
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

function editCardHandler(id, newTitle, newMain, newBottom) { //edit card function
  const cardsCopy = [...cards]
  for (let i = 0; i < cardsCopy.length; i++) {
    if (cardsCopy[i].id === id) {
      cardsCopy[i].title = newTitle;
      cardsCopy[i].main = newMain;
      cardsCopy[i].bottom = newBottom;
      break;
    }    
  }
setCards(cardsCopy)
editModuleHandler(0)
}
function randomRGBA() {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    const rgba = `rgba(${r},${g},${b},${0.8})`; // Collect all to a css color string
    return rgba;
}    

console.log(cards) //for developing don't forget to remove
  return (
  <>  
    <h1 className="blinker">!!!...WORK IN PROGRESS...!!!</h1>
    <h3>Source at: https://github.com/Justas1988/Personal-REACT-project--Posteroid-</h3>
    <NewcardButton addCard={addCardHandler}/>
    <input value={titleText} onChange={titleInputHandler} type="text" maxLength="17"></input>
    <input value={mainText} onChange={mainInputHandler} type="text" maxLength="150"></input>
    <input value={bottomText} onChange={bottomInputHandler} type="text" maxLength="17"></input>
      <div className="cardContainer">
        <CardsList openEditor={editModuleHandler} cardsArray = {cards} deleteCard = {deleteCardHandler}/>
        <EditModule editCardHandler = {editCardHandler} open={open} cardsArray = {cards}/> 
      </div>
  </> 
  );
}

export default App;
