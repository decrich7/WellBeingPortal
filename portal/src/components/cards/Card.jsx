import React from 'react';
import {skipWaiting} from "workbox-core";
import {Link} from "react-router-dom";

// import {compact} from "@headlessui/react/dist/utils/render";


const Card = ({...props}) => {
    let statusDict = {
        1: "opacity-100",
        3: "opacity-50",
        2: "opacity-100"
    }

    if (props.typeView == "list") {
        return (
            <div className={"max-w-1/4 mb-8 " + statusDict[props.cardElement.status]}>
                <div
                    className="flex sm:flex-col flex-col items-center sm:justify-start justify-center text-center sm:text-left content-normal">
                    <div>
                        <img
                            className="cardImage flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                            src={props.cardElement.photo}/>
                    </div>
                    <Link to={"/cardInformations/" + props.cardElement.id}>
                        <div className="w-[80%] h-full grid justify-items-stretch ...">
                            <div
                                className="title-font text-lg text-gray-900 font-bold whitespace-pre ... truncate ... max-w-sm">
                                {props.cardElement.name}
                            </div>
                            <div className=" mb-4 whitespace-pre ... truncate ... max-w-sm">
                                {props.cardElement.info}
                            </div>
                            <div className="text-gray-500 mb-3">
                                {props.cardElement.expert_fio}
                            </div>
                            <div className="text-white bg-yellow-300 rounded-full text-center justify-start max-w-sm ">
                                {props.cardElement.club}
                            </div>
                        </div>
                    </Link>
                    <div className="h-full justify-end align-bottom">
                        <div className="text-right flex items-start">
                            {props.cardElement.shedule}
                        </div>
                    </div>
                    {props.cardElement.status === 2 ? (
                        <div className="bg-red-900 text-white rounded-full text-center justify-self-end p-1 max-w-sm">
                            В эфире
                        </div>
                    ) : (<div></div>)}
                </div>
            </div>
        )
    } else {
        return (
            <div className={"max-w-1/4 mb-8 " + statusDict[props.cardElement.status]}>
                <div
                    className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                    <div>
                        <img
                            className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                            src={props.cardElement.photo}/>
                    </div>
                    <Link to={"/cardInformations/" + props.cardElement.id}>
                        <div className="flex-grow sm:pl-8">
                            <div className="title-font font-bold text-lg text-gray-900">
                                {props.cardElement.name}
                            </div>
                            <div className="mb-4 max-w-sm">
                                {props.cardElement.info}
                            </div>
                            <div className="text-gray-500 mb-3">
                                {props.cardElement.expert_fio}
                            </div>
                            <div className="text-white bg-yellow-300 rounded-full text-center justify-start max-w-sm">
                                {props.cardElement.club}
                            </div>
                        </div>
                    </Link>

                    <div className="h-full justify-end">
                        <div className="text-right flex items-end">
                            {props.cardElement.shedule}
                        </div>
                        {props.cardElement.status === 2 ? (
                            <div
                                className="bg-red-900 text-white rounded-full text-center justify-self-end p-1 max-w-sm">
                                В эфире
                            </div>
                        ) : (<div></div>)}
                    </div>

                </div>
            </div>
        )
    }
}

export default Card;