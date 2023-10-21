import React from 'react';
import "../../../output.css";
const MyButton = ({...props}) => {
    return (
        <button {...props} className={"inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:opacity-80 rounded text-base md:mt-0 " + props.color}>{props.value}</button>
    );
};

export default MyButton;