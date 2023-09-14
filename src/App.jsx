import { useState } from "react"
import Cards from "./Components/Cards/Cards"
import Header from "./Components/Header"
import Part_2 from "./Components/Part-2/Part_2"

function App() {
  const [list,setlist] = useState([])
  const handleList = (cards) => {
    console.log(cards) 
  } 
  return (
    <>
      <Header></Header>
      <div className=" flex">

      <Cards handleList={handleList}></Cards>
     
      <Part_2></Part_2>
      </div>
    </>
  )
}

export default App
