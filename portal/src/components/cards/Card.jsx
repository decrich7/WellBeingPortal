import React from 'react';


const Card = (cardElement) => {
    return (
        <div className="max-w-1/4 mb-8">
            <div
                className="flex sm:flex-col flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <div>
                    <img
                        className="cardImage flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                        src={cardElement.cardElement.photo}/>
                </div>
                <div className="w-[80%] h-[100%]">
                    <div className="title-font text-lg text-gray-900 font-bold">
                        {cardElement.cardElement.name}
                    </div>
                    <div className=" mb-4 whitespace-pre ... truncate ... max-w-sm">
                        {cardElement.cardElement.info}
                    </div>
                    <div className="text-gray-500 mb-3">
                        {cardElement.cardElement.expert}
                    </div>
                </div>
                <div className="h-full justify-end">
                    <div className="text-right flex items-end">
                        {cardElement.cardElement.shedule}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Card;