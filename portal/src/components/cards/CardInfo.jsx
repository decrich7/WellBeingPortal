import React, {useState} from "react";
import {useParams} from "react-router-dom";
import MyQuestionsForm from "../forms/MyQuestionsForm";
import MyInput from "../UI/inputs/MyInput";
import MyButton from "../UI/buttons/MyButton";

const CardInfo = ({...props}) => {
    let [data, setData] = useState('')
    const params = useParams()
    const id = parseInt(params.id)
    const request = new XMLHttpRequest();
    const url = 'http://127.0.0.1:8000/api/v1/event/';
    // console.log(url + id.toString())
    request.open("GET", url + id.toString(), false); // false makes the request synchronous
    request.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('access_token'))
    request.send(null);
    let curEvent;

    if (request.status === 200) {
        curEvent = JSON.parse(request.responseText);
    }

    const videoUrl = 'http://localhost:8000/api/v1/materials/';
    request.open("GET", videoUrl, false);
    request.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('access_token'))
    request.send(null);
    let curVideo = JSON.parse(request.responseText);
    if (curVideo.results !== undefined) {
        curVideo = curVideo.results.filter(el => el.event == curEvent.id)[0]
    }

    let curListEventMeetQuestions;
    const meetQuestionsUrl = "http://127.0.0.1:8000/api/v1/meet-questions/"
    request.open("GET", meetQuestionsUrl, false);
    request.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('access_token'))
    request.send(null);
    curListEventMeetQuestions = JSON.parse(request.responseText)
    console.log(curListEventMeetQuestions)

    const onSubmit = (e) => {
        e.preventDefault();
        let http = new XMLHttpRequest();
        const url = "http://127.0.0.1:8000/api/v1/meet-questions/"
        http.open("POST", url, false);
        http.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('access_token'))
        http.setRequestHeader('Content-Type', "application/json")
        let send_data = JSON.stringify({
            "question": data,
            "user": 1,
            "event": curEvent.id
        })
        http.send(send_data);
    }

    return (<div className="CardInformations items-start w-full">
        <div>
            {curEvent.name}
        </div>
        <div className="video-chat flex-wrap place-content-around">
            <div className="Video sm:min-w-[60%] 2xl:max-w-[50%] xl:max-w-[50%]">
                <video
                    className="w-full h-auto  border border-gray-200 rounded-lg dark:border-gray-700"
                    controls>
                    <source src={curVideo !== undefined ? (curVideo.video) : (1)}
                            type="video/mp4"
                    />
                </video>
            </div>
            {(curEvent.status === 2) ? (<div className="Chat w-[30%] place-self-end">
                Тут чат
            </div>) : (<></>)}
            <div>
                {curEvent.info}
            </div>
            <div
                className="questions flex flex-col max-w-4xl md:h-56 bg-white rounded-lg shadow-lg overflow-hidden md:flex-col my-10">
                <div
                    className="questions-text md:flex items-center justify-center md:h-1/2 md:bg-yellow-400 text-yellow-700 text-2xl font-bold md:text-gray-100">
                    Задать вопрос
                </div>
                <div
                    className="questions-form w-full flex flex-row items-center justify-center md:py-0 md:h-1/2 md:border-b-8 border-yellow-300">
                    <div className={"flex flex-col rounded-lg overflow-hidden sm:flex-row bg-amber-200"}>
                        <MyInput value={data} onChange={(e) => setData(e.target.value)}/>
                        <MyButton value={"Отправить"} onClick={onSubmit} type={"submit"}/>
                    </div>
                </div>
            </div>
            <div className={"flex w-full h-full "}>
                <div className={"relative z-20 sm:z-auto"}>
                    <div className={"mx-auto max-w-container px-4 pb-16 sm:px-6 lg:px-8"}>
                        <div
                            className={"relative mx-auto grid max-w-[40rem] grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"}>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>)
}

export default CardInfo;