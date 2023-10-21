import React from 'react';
import "../../../output.css";
const MyLabel = ({...props}) => {
    return (
        <label {...props} className="text-gray-600">{props.value}</label>
    );
};

export default MyLabel;