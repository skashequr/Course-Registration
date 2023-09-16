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
    const isExsit = list.find((card) => cards.id === card.id);
  
    if (isExsit) {
      toast("Already Add");
    } else {
      const newRemaning = remaning - cards.credit_hours;
      const newTotalCreadit = totalCreadit + cards.price;
  
      if (newRemaning >= 0) {
        const newList = [...list, cards];
        setlist(newList);
        setRemaning(newRemaning);
        settotalCreadit(newTotalCreadit);
      } else {
        toast('You have not enough creadit');
      }
    }
  };
  
  
  
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