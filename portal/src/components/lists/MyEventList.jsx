import React, {useEffect, useState} from 'react';
import MyGridListButton from "../UI/buttons/MyGridListButton";
import Cards from "../cards/Cards";

const MyEventList = () => {
    const [viewMode, setViewMode] = useState("list");


    return (
        <div className="mt-5 w-full ">
            <MyGridListButton setViewMode={setViewMode} viewMode={viewMode}></MyGridListButton>
            <div className="text-center items-center justify-center">
                {viewMode === "list" ? (
                    <Cards  typeView={viewMode}/>
                ) : (
                    <Cards  typeView={viewMode}></Cards>
                )}
            </div>
        </div>
    );
};

export default MyEventList;