import React from "react";
import {useParams} from "react-router-dom";

const CardInfo = ({...props}) => {
    const params = useParams()
    const id = parseInt(params.id)
    const curEvent = props.listEvent.filter((el) => el.id === id)[0]

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
            {(curEvent.typeEvent == "stream") ? (
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