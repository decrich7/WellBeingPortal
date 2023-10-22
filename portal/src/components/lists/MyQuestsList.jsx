import React, {useState} from 'react';
import MyGridListButton from "../UI/buttons/MyGridListButton";
import Quests from "../quests/Quests";

const MyQuestsList = ({...props}) => {
    const [viewMode, setViewMode] = useState("list");

    const request = new XMLHttpRequest();
    const url = 'http://127.0.0.1:8000/api/v1/quest/';
    request.open("GET", url, false);
    request.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('access_token'))
    request.send(null);
    let myList;

    if (request.status === 200) {
         myList = JSON.parse(request.responseText).results;
    }
    console.log(myList)
    return (
        <div className="mt-5 w-full ">
            <MyGridListButton setViewMode={setViewMode} viewMode={viewMode}></MyGridListButton>
            <div className="text-center items-center justify-center">
                    <Quests questList={myList} typeView={viewMode} QuestList={props.QuestList}/>
            </div>
        </div>
    );
};

export default MyQuestsList;