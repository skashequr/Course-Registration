
import { AiFillDollarCircle } from "react-icons/ai";
import { BsBookHalf } from "react-icons/bs";
const Card = ({cards,handleList}) => {
    console.log(handleList)
    return (
        <div className="grid grid-cols-3">
             <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
    <img
      src={cards.image}
      alt="img-blur-shadow"
      className=" w-full h-full"
      
    />
  </div>
  <div className="p-6">
    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
    {cards.course_title}
    </h5>
    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
      {cards.details}
    </p>
    <div className=" mt-4 flex justify-between">
  
        <div>
        <AiFillDollarCircle className=" h-6 w-6"></AiFillDollarCircle>
        </div>
        <div><span>Price : {cards.price}</span></div>
        <div><BsBookHalf className=" h-6 w-6"></BsBookHalf></div>
        <div><p>Credit : <span>{cards.credit_hours}</span>hr</p></div>
  
</div>
  </div>
 
  <div className="p-6 pt-0">
    <button
      onClick={()=>handleList(cards)}
      className="select-none rounded-lg w-full bg-[#2F80ED] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-light="true"
    >
      Select
    </button>
  </div>
</div>

        </div>
    );
};

export default Card;