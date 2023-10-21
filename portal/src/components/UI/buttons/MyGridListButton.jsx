import React from 'react';

const MyGridListButton = ({setViewMode}) => {

    const handleToggleView = () => {
        setViewMode((prevMode) => (prevMode === "list" ? "grid" : "list"))
    };
    return (
        <button className="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900" onClick={handleToggleView}>
            Поменять вид
        </button>
    );
};

export default MyGridListButton;