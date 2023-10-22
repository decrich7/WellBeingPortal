import React from "react";
import {useParams} from "react-router-dom";

const CardInfo = ({...props}) => {
    const params = useParams()
    const id = parseInt(params.id)
    const request = new XMLHttpRequest();
    const url = 'http://127.0.0.1:8000/api/v1/event/';
    console.log(url + id.toString())
    request.open("GET", url + id.toString(), false); 
    request.send(null);
    let curEvent;

    if (request.status === 200) {
        curEvent = JSON.parse(request.responseText);
    }
    console.log(curEvent)
    return (<div className="CardInformations items-start w-full">
        <div>
            {curEvent.name}
        </div>
        <div className="video-chat flex-wrap place-content-around">
            <div className="Video sm:min-w-[60%] 2xl:max-w-[50%] xl:max-w-[50%]">
                <video
                    className="w-full h-auto  border border-gray-200 rounded-lg dark:border-gray-700"
                    controls>
                    <source src="../../../media/пена.mp4"
                            type="video/mp4"
                    />
                </video>
            </div>
            {(curEvent.status === 2) ? (
                <div className="Chat w-[30%] place-self-end">
                    Тут чат
                </div>
            ) : (
                <></>
            )}
            <div>
                {curEvent.info}
            </div>
            <div className="questions">
                <div className="questions-text">
                    Задать вопрос
                </div>
                <div className="questions-form">

                </div>
            </div>
        </div>

    </div>)
}

export default CardInfo;