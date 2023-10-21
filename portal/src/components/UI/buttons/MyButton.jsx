import React from 'react';
import "../../../output.css";
const MyButton = ({...props}) => {
    return (
        <button {...props} className={"text-white border-0 py-2 px-2 opacity-80 transition duration-300 ease-in-out hover:opacity-100 rounded " + props.color}>{props.value}</button>
    );
};

export default MyButton;