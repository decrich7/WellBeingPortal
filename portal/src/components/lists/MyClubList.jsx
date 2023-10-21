import React, {useState} from 'react';
import MyGridListButton from "../UI/buttons/MyGridListButton";
import Cards from "../cards/Cards";
import Club from "../clubs/Club";

const MyClubList = ({...props}) => {
    const [viewMode, setViewMode] = useState("list");

    const request = new XMLHttpRequest();
    const url = 'http://127.0.0.1:8000/api/v1/event/';
    request.open("GET", url, false); // false makes the request synchronous
    request.send(null);
    let myList;

    if (request.status === 200) {
         myList = JSON.parse(request.responseText).results;
    }
    return (
        <div className="mt-5 w-full ">
            <MyGridListButton setViewMode={setViewMode} viewMode={viewMode}></MyGridListButton>
            <div className="text-center items-center justify-center">
                    <Club cardList={myList} typeView={viewMode} ClubList={props.ClubList}/>
            </div>
        </div>
    );
};

export default MyClubList;