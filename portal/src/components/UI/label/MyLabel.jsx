import React from 'react';
import "../../../output.css";
const MyLabel = ({...props}) => {
    return (
        <label {...props} className="leading-7 text-sm text-gray-600">{props.value}</label>
    );
};

export default MyLabel;