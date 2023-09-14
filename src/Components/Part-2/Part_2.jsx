import List_Eliment from "../ListEliment/List_Eliment";

const Part_2 = ({list}) => {
    console.log(list)
    return (
        <div className=" border-slate-800 text-center">
            <div>
            <h3 className=" font-bold text-lg text-[#2F80ED] mb-5">Credit Hour Remaining <span> 7 </span> hr</h3>
            <hr />
            </div>
            <div className=" mt-4 ">
                <h1 className="font-bold text-lg te mb-3">Couse Name</h1>
                <p className=" text-left">{
                list.map(eliment => <List_Eliment eliment={eliment}></List_Eliment>)
                }</p>
                <hr />

            </div>
            <div>
            Total Credit Hour : 13
            </div>
        </div>
    );
};

export default Part_2;