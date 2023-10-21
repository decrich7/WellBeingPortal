import React from 'react';

const MyError = ({error, ...props}) => {
    if (error) {
        return (
            <p className="text-red-500 text-xs italic">{props.value}</p>
        );
    }

};

export default MyError;