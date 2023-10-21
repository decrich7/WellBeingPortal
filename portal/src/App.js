import React from 'react';
import './output.css';
import Header from "./components/headers/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MyEventList from "./components/lists/MyEventList";
import MyRegisterForm from "./components/forms/MyRegisterForm";
import MyLoginForm from "./components/forms/MyLoginForm";
import MySlider from "./components/sliders/MySlider";
import CardInfo from "./components/cards/CardInfo";

let cardsList = [
    {
        id: 1,
        name: "Зил 2228",
        info: "Бесплатая раздача курс хурс хруст пуки каки жопи писи каки пипим Бесплатая раздача курс хурс хруст пуки каки жопи писи каки пипи",
        shedule: "15 апреля 18:00",
        expert: "Пидорас И.И.",
        photo: "https://stihi.ru/pics/2020/07/02/6618.jpg",
        topic: "Бойцовский клуб",
        statusPlace: true,
        typeEvent: "video"
    },
    {
        id: 2,
        name: "Айти треннинг по скаму",
        info: "Бесплатая раздача курс хурс хруст пуки каки жопи писи каки пипи",
        shedule: "15 апреля 18:00",
        expert: "Пидорас И.И.",
        photo: "https://stihi.ru/pics/2020/07/02/6618.jpg",
        topic: "Каки пуки",
        statusPlace: "isLive",
        typeEvent: "stream"
    },
    {
        id: 3,
        name: "Он выпил это и начал какать 4 часа",
        info: "Бесплатая ки каки жопи писи каки пипи",
        shedule: "15 апреля 18:00",
        expert: "Пидорас И.И.",
        photo: "https://stihi.ru/pics/2020/07/02/6618.jpg",
        topic: "Бойцовский клуб",
        statusPlace: false,
        typeEvent: "video"
    },
    {
        id: 4,
        name: "швепс",
        info: "Бесплатая раздача курс хурс хруст пуки каки жопи писи каки пипи",
        shedule: "15 апреля 18:00",
        expert: "Пидорас И.И.",
        photo: "https://stihi.ru/pics/2020/07/02/6618.jpg",
        topic: "Психи",
        statusPlace: true,
        typeEvent: "link"
    },
]


function App() {
    return (
        // <div className="App flex flex-col">
        //   <div className="flex items-center flex-wrap justify-center w-[100%]">

        <BrowserRouter>
            <Routes>
                <Route path="/" element={(
                    <div className="App flex justify-center space-y-4">
                        <div className="flex items-center flex-wrap  justify-center w-5/6">
                            <Header></Header>
                            <MySlider></MySlider>
                            <MyEventList EventList={cardsList}></MyEventList>

                        </div>
                    </div>
                )}>
                </Route>
                <Route path="/login" element={(
                    <div className="App flex justify-center space-y-4">
                        <div className="flex items-center flex-col justify-center w-5/6">
                            <Header></Header>
                            <MyLoginForm></MyLoginForm>
                        </div>
                    </div>
                )}>
                </Route>
                <Route path="/register" element={(
                    <div className="App flex justify-center space-y-4">
                        <div className="flex items-center flex-col justify-center w-5/6">
                            <Header></Header>
                            <MyRegisterForm></MyRegisterForm>
                        </div>
                    </div>
                )}>
                </Route>
                <Route path="/cardInformations">
                    <Route path=":id" element={(
                        <div className="App flex justify-center space-y-4">
                            <div className="flex items-center flex-col justify-center w-5/6">
                                <Header></Header>
                                <CardInfo listEvent={cardsList}></CardInfo>
                            </div>
                        </div>
                    )}>
                    </Route>
                </Route>
                <Route path="/clubs" element={
                    <div className="App flex justify-center space-y-4">
                        <div className="flex items-center flex-col justify-center w-5/6">
                            <Header></Header>
                        </div>
                    </div>}>
                </Route>
                <Route path="/quests" element={
                    <div className="App flex justify-center space-y-4">
                        <div className="flex items-center flex-col justify-center w-5/6">
                            <Header></Header>
                        </div>
                    </div>}>
                </Route>

            </Routes>
        </BrowserRouter>
    );
}

export default App;
