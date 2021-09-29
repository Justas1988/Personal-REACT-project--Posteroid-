import React, { useState } from "react";
import NewcardButton from "./Components/NewcardButton";
import CardsList from "./Components/CardsList";


function App() {
  const [cards, setCards] = useState([{
    id: 11,
    title: "title-textas",
    main: "main textas",
    bottom: "bottom tekstas"
  }])

  return (
  <>  
    <NewcardButton/>
    <input type="text" value="Title Text"></input>
    <input type="text" value="Main Text"></input>
    <input type="text" value="Bottom Text"></input>
    <CardsList cardsArray = {cards}/>

  </> 
  );
}

export default App;
