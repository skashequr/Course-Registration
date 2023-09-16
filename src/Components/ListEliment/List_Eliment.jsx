import { useState } from "react";

const List_Eliment = ({eliment,listLength}) => {
    const {course_title,id} = eliment
    // console.log(listLength)
    const [leng,setleng] = useState(1)
    
    return (
       <ol className=" list-decimal">
         <div className=" mb-3">
            <li >{course_title}</li>
        </div>
       </ol>
    );
};

export default List_Eliment;