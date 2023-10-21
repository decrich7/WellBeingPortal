import React, {useState} from 'react';
import MyGridListButton from "../UI/buttons/MyGridListButton";
import Cards from "../cards/Cards";

const MyEventList = ({...props}) => {
    const [viewMode, setViewMode] = useState("list");


    return (
        <div className="mt-5 w-full ">
            <MyGridListButton setViewMode={setViewMode} viewMode={viewMode}></MyGridListButton>
            <div className="text-center items-center justify-center">
                {viewMode === "list" ? (
                    <Cards typeView={viewMode} EventList={props.EventList}/>
                ) : (
                    <Cards typeView={viewMode} EventList={props.EventList}></Cards>
                )}
            </div>
        </div>
    );
};

export default MyEventList;