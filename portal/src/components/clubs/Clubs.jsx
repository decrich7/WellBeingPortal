import React from 'react';
import Club from "./Club";


const Clubs = ({...props}) => {
    console.log(props.clubList)
    if (props.clubList) {
        return (

            <div>
                {props.typeView === "list" ? (
                    <div className="flex flex-wrap justify-center items-stretch content-normal">
                        {
                            props.clubList.map((el, index) => (
                                    <Club clubElement={el} key={index} typeView={props.typeView}/>
                                )
                            )
                        }
                    </div>
                ) : (
                    <div className="flex flex-col justify-center items-stretch">
                        {
                            props.clubList.map((el, index) => (
                                    <Club clubElement={el} key={index} typeView={props.typeView}/>
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

export default Clubs;