import React from 'react';
import "../../output.css";

const MySliderItem = ({value, image}) => {
    // console.log(image)
    return (
        <div style={{backgroundImage: "url('"+image+"')"}}
            className={"flex h-full rounded-2xl items-center justify-center bg-cover bg-opacity-10 dark:bg-gray-700 text-white "}>
            {value}
        </div>
    );
};

export default MySliderItem;