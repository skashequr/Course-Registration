
import { useEffect, useState } from "react";
import Card from "../Card/Card";
const Cards = () => {
  const [cards,setCards] = useState([]);
    useEffect( () =>{
      fetch("data.json")
      .then(res => res.json())
      .then(data => setCards(data))
    },[] )
    // console.log(cards)
    return (
        <div className="grid grid-cols-3 w-[1150px] gap-6 mx-10">
            
      {
        cards.map( card=> (
          <Card key={card.id} cards={card}></Card>
        ))
      }

        </div>
    );
};

export default Cards;