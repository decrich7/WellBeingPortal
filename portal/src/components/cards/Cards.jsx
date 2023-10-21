import React from 'react';
import Card from "./Card";

let cardsList = [
    {
        id: 1,
        name: "Зил 2228",
        info: "Бесплатая раздача курс хурс хруст пуки каки жопи писи каки пипим Бесплатая раздача курс хурс хруст пуки каки жопи писи каки пипи",
        shedule: "15 апреля 18:00",
        expert: "Пидорас И.И.",
        photo: "https://stihi.ru/pics/2020/07/02/6618.jpg"
    },
    {
        id: 2,
        name: "Айти треннинг по скаму",
        info: "Бесплатая раздача курс хурс хруст пуки каки жопи писи каки пипи",
        shedule: "15 апреля 18:00",
        expert: "Пидорас И.И.",
        photo: "https://stihi.ru/pics/2020/07/02/6618.jpg"
    },
    {
        id: 3,
        name: "Он выпил это и начал какать 4 часа",
        info: "Бесплатая ки каки жопи писи каки пипи",
        shedule: "15 апреля 18:00",
        expert: "Пидорас И.И.",
        photo: "https://stihi.ru/pics/2020/07/02/6618.jpg"
    },
    {
        id: 4,
        name: "швепс",
        info: "Бесплатая раздача курс хурс хруст пуки каки жопи писи каки пипи",
        shedule: "15 апреля 18:00",
        expert: "Пидорас И.И.",
        photo: "https://stihi.ru/pics/2020/07/02/6618.jpg"
    },
    {
        id: 5,
        name: "швепс",
        info: "Бесплатая раздача курс хурс хруст пуки каки жопи писи каки пипи",
        shedule: "15 апреля 18:00",
        expert: "Пидорас И.И.",
        photo: "https://stihi.ru/pics/2020/07/02/6618.jpg"
    },
    {
        id: 6,
        name: "швепс",
        info: "Бесплатая раздача курс хурс хруст пуки каки жопи писи каки пипи",
        shedule: "15 апреля 18:00",
        expert: "Пидорас И.И.",
        photo: "https://stihi.ru/pics/2020/07/02/6618.jpg"
    },
]

const Cards = (...props) => {
    return (
        <div>
            {props[0].typeView == "list" ? (
                <div className="flex flex-wrap justify-center items-stretch">
                    {
                        cardsList.map((el, index) => (
                                <Card cardElement={el} key={index} typeView={props[0].typeView}/>
                            )
                        )
                    }
                </div>
            ) : (
                <div className="flex flex-col justify-center items-stretch">
                    {
                        cardsList.map((el, index) => (
                                <Card cardElement={el} key={index} typeView={props[0].typeView}/>
                            )
                        )
                    }
                </div>
            )
            }

        </div>
    )
}

export default Cards;