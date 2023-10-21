import React from 'react';


const Card = (...props) => {
    if (props[0].typeView == "list") {
        return (
            <div className="max-w-1/4 mb-8">
                <div
                    className="flex sm:flex-col flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                    <div>
                        <img
                            className="cardImage flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                            src={props[0].cardElement.photo}/>
                    </div>
                    <div className="w-[80%] h-[100%]">
                        <div className="title-font text-lg text-gray-900 font-bold">
                            {props[0].cardElement.name}
                        </div>
                        <div className=" mb-4 whitespace-pre ... truncate ... max-w-sm">
                            {props[0].cardElement.info}
                        </div>
                        <div className="text-gray-500 mb-3">
                            {props[0].cardElement.expert}
                        </div>
                    </div>
                    <div className="h-full justify-end">
                        <div className="text-right flex items-end">
                            {props[0].cardElement.shedule}
                        </div>
                    </div>

                </div>
            </div>
        )
    } else {
        return (
            <div className="max-w-1/4 mb-8">
                <div
                    className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                    <div>
                        <img
                            className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                            src={props[0].cardElement.photo}/>
                    </div>
                    <div className="flex-grow sm:pl-8">
                        <div className="title-font font-bold text-lg text-gray-900">
                            {props[0].cardElement.name}
                        </div>
                        <div className="mb-4">
                            {props[0].cardElement.info}
                        </div>
                        <div className="text-gray-500 mb-3">
                            {props[0].cardElement.expert}
                        </div>
                    </div>
                    <div className="h-full justify-end">
                        <div className="text-right flex items-end">
                            {props[0].cardElement.shedule}
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Card;