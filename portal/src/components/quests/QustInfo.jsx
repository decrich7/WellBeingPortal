import React from "react";
import {useParams} from "react-router-dom";
import MyButton from "../UI/buttons/MyButton";
import MyLabel from "../UI/label/MyLabel";
import MyInput from "../UI/inputs/MyInput";

const QuestInfo = ({...props}) => {
    const params = useParams()
    const id = parseInt(params.id)
    const request = new XMLHttpRequest();
    const url = 'http://127.0.0.1:8000/api/v1/quest/';
    console.log(url + id.toString())
    request.open("GET", url + id.toString(), false); // false makes the request synchronous
    request.send(null);
    let curEvent;

    if (request.status === 200) {
        curEvent = JSON.parse(request.responseText);
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        
    };

    return (<div className="CardInformations items-start w-full">
        <div>
            {curEvent.name}
        </div>
        <div className="video-chat flex-wrap place-content-around">
            <div>
                {curEvent.target}
            </div>
            <div>
                <MyButton
                    value={"Принять участие"}
                    color={"bg-yellow-400"}
                    type={"submit"}
                    onClick={handleSubmit}
                >

                </MyButton>
            </div>
        </div>

    </div>)
}

export default QuestInfo;