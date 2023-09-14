import { useState } from "react"
import Cards from "./Components/Cards/Cards"
import Header from "./Components/Header"
import Part_2 from "./Components/Part-2/Part_2"

function App() {
  const [list,setlist] = useState([])
  const handleList = (cards) => {
    const isExsit = list.find((card)=> cards.id == card.id)
    if (isExsit) {
      
      alert("Already Add")
    }
    else{
      const newList = [...list,cards]
      setlist(newList)
    }
    console.log(cards)
    console.log(card)
  } 
  return (
    <>
      <Header></Header>
      <div className=" flex">

      <Cards handleList={handleList}></Cards>
     
      <Part_2 list={list} ></Part_2>
      </div>
    </>
  )
}

export default App
