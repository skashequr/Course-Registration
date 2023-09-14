
import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Cards = ({handleList}) => {
  const [cards,setCards] = useState([]);
    useEffect( () =>{
      fetch("data.json")
      .then(res => res.json())
      .then(data => setCards(data))
    },[] )
    // console.log(handleList)
    return (
        <div className="grid grid-cols-3 w-[1100px] gap-6 mx-10">
            
      {
        cards.map( card=> (
          <Card key={card.id} cards={card} handleList={handleList}></Card>
        ))
      }

        </div>
    );
};

export default Cards;