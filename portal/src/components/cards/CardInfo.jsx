import React from "react";
import {useParams} from "react-router-dom";

const CardInfo = ({...props}) => {
    const params = useParams()
    const id = parseInt(params.id)
    const curEvent = props.listEvent.filter((el) => el.id === id)[0]

    return (
        <div className="CardInformations items-start w-full">
            <div>
                {curEvent.name}
            </div>
            <div className="Video">
                <video className="w-full h-auto sm:min-w-[70%] 2xl:max-w-[50%] xl:max-w-[50%] border border-gray-200 rounded-lg dark:border-gray-700" controls>
                    <source src="../../../media/пена.mp4"
                            type="video/mp4"
                    />
                </video>
            </div>
            <div>
                {curEvent.info}
            </div>

        </div>
    )
}

export default CardInfo;