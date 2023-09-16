import React from "react";

const List_Eliment = ({ eliment, listLength }) => {
    const { course_title, id } = eliment;

    return (
        <li>
            {id}. {course_title}
        </li>
    );
};

export default List_Eliment;
