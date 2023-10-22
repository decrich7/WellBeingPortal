import React from 'react';
import Quest from "./Quest";


const Quests = ({...props}) => {
    console.log(props.questList)
    if (props.questList) {
        return (

            <div>
                {props.typeView === "list" ? (
                    <div className="flex flex-wrap justify-center items-stretch content-normal">
                        {
                            props.questList.map((element, index) => (
                                    <Quest questElement={element} key={index} typeView={props.typeView}/>
                                )
                            )
                        }
                    </div>
                ) : (
                    <div className="flex flex-col justify-center items-stretch">
                        {
                            props.questList.map((element, index) => (
                                    <Quest questElement={element} key={index} typeView={props.typeView}/>
                                )
                            )
                        }
                    </div>
                )
                }

            </div>

        )
    }
}

export default Quests;