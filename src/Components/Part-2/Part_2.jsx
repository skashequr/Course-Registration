import { useState } from "react";
import List_Eliment from "../ListEliment/List_Eliment";
import Creadit_Houre from "../Creadit_Houre/Creadit_Houre";
import TotalCreadit from "../TotalCreadit/TotalCreadit";
import TotalAmount from "../TotalAmount/TotalAmount";

const Part_2 = ({list,remaning,totalCreadit,hour}) => {
    console.log(remaning)
    
    
   
    
    
    console.log(totalCreadit)
    return (
        <div className=" border-slate-800 text-center">
           <Creadit_Houre remaning={remaning}></Creadit_Houre>
            <div className=" mt-4 ">
                
                <h1 className="font-bold text-lg te mb-3">Couse Name</h1>
                <p className=" text-left">{
                list.map(eliment => <List_Eliment eliment={eliment}></List_Eliment>)
                }</p>
                <hr />

            </div>
            <div>
            <h1 className=" m-4"><TotalCreadit hour={hour}></TotalCreadit></h1>
            </div>
            <hr />
            <div>
                <h3 className=" m-4"><TotalAmount totalCreadit={totalCreadit}></TotalAmount></h3>
                
            </div>
           
        </div>
    );
};

export default Part_2;