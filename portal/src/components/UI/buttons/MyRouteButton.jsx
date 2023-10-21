import React from 'react';

const MyRouteButton = ({...props}) => {
    return (
        <a {...props} className="hover:text-gray-900">{props.value}</a>
    );
};

export default MyRouteButton;