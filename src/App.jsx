import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react"
import Cards from "./Components/Cards/Cards"
import Header from "./Components/Header"
import Part_2 from "./Components/Part-2/Part_2"
import TotalCreadit from './Components/TotalCreadit/TotalCreadit';

function App() {
  const [list,setlist] = useState([])
  const [remaning,setRemaning] = useState(20)
  const [totalCreadit,settotalCreadit] = useState(0)
  const handleList = (cards) => {
    const isExsit = list.find((card)=> cards.id == card.id)
    
    if (isExsit) {
      
      toast("Already Add")
      // <ToastContainer></ToastContainer>
    }
    else{
      const newList = [...list,cards]
      setlist(newList)
      


      list.forEach(element => {

        let newremaning = remaning - element.credit_hours 
        setRemaning(newremaning)  
        console.log("fgjhfgnfgjhrfbhrfthrt")
        let newTotalCreadit = totalCreadit + element.price
        settotalCreadit(newTotalCreadit)
      });

      // console.log(element.credit_hours )
      // if (totalCreadit<0) {
      //   alert ("totalCreadit<0")
      // }
      // else{
      //   <TotalCreadit totalCreadit={totalCreadit}></TotalCreadit>
      // }
    
      
          
      
  if (remaning < 0) {
    toast('you have not enought creadit')
  }
 
    }

    console.log(remaning)

    
  } 
  
  return (
    <>
      <Header></Header>
      <div className=" flex">

      <Cards handleList={handleList}></Cards>
     
      <Part_2 list={list} remaning={remaning} totalCreadit={totalCreadit}></Part_2>
      <ToastContainer></ToastContainer>
      </div>
    </>
  )
}

export default App