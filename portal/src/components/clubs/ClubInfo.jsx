import React from "react";
import {useParams} from "react-router-dom";
import MyButton from "../UI/buttons/MyButton";
import MyLabel from "../UI/label/MyLabel";
import MyInput from "../UI/inputs/MyInput";

const ClubInfo = ({...props}) => {
    const params = useParams()
    const id = parseInt(params.id)
    const request = new XMLHttpRequest();
    const url = 'http://127.0.0.1:8000/api/v1/club/';
    console.log(url + id.toString())
    request.open("GET", url + id.toString(), false);
    request.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('access_token'))
    request.send(null);
    let curEvent;

    if (request.status === 200) {
        curEvent = JSON.parse(request.responseText);
    }
    let handleSubmit = (e) => {
        e.preventDefault();
        let http = new XMLHttpRequest();
        const url = "http://127.0.0.1:8000/api/v1/club-api/" + id.toString()
        http.open("POST", url, false);
        http.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('access_token'))
        http.send();
    };
    return (<div className="CardInformations items-start w-full">
            <div>
                {curEvent.name}
            </div>
            <div>
                {curEvent.info}
            </div>
            <div>
                <MyButton
                    value={"Вступить в клуб"}
                    color={"bg-yellow-400"}
                    type={"submit"}
                    onClick={handleSubmit}
                >

                </MyButton>
            </div>
        </div>

    )
}

export default ClubInfo;