import React from 'react';
import Card from "./Card";


const Cards = ({...props}) => {
console.log(props.cardList)
    if (props.cardList) {
        return (

            <div>
                {props.typeView === "list" ? (
                    <div className="flex flex-wrap justify-center items-stretch content-normal">
                        {
                            props.cardList.map((el, index) => (
                                    <Card cardElement={el} key={index} typeView={props.typeView}/>
                                )
                            )
                        }
                    </div>
                ) : (
                    <div className="flex flex-col justify-center items-stretch">
                        {
                            props.cardList.map((el, index) => (
                                    <Card cardElement={el} key={index} typeView={props.typeView}/>
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

export default Cards;