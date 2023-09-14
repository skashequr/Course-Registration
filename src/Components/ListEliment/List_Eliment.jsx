
const List_Eliment = ({eliment}) => {
    const {course_title,id} = eliment
    return (
        <div className=" mb-3">
            <h1> {course_title}</h1>
        </div>
    );
};

export default List_Eliment;