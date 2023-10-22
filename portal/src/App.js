import React from 'react';
import './output.css';
import Header from "./components/headers/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MyEventList from "./components/lists/MyEventList";
import MyClubList from "./components/lists/MyClubList";
import MyQuestsList from "./components/lists/MyQuestsList";
import MyRegisterForm from "./components/forms/MyRegisterForm";
import MyLoginForm from "./components/forms/MyLoginForm";
import MySlider from "./components/sliders/MySlider";
import CardInfo from "./components/cards/CardInfo";




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
                            <MyEventList></MyEventList>

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
                                <CardInfo ></CardInfo>
                            </div>
                        </div>
                    )}>
                    </Route>
                </Route>
                <Route path="/clubs" element={
                    <div className="App flex justify-center space-y-4">
                        <div className="flex items-center flex-col justify-center w-5/6">
                            <Header></Header>
                            <MyClubList></MyClubList>
                        </div>
                    </div>}>
                </Route>
                <Route path="/quests" element={
                    <div className="App flex justify-center space-y-4">
                        <div className="flex items-center flex-col justify-center w-5/6">
                            <Header></Header>
                            <MyQuestsList></MyQuestsList>
                        </div>
                    </div>}>
                </Route>

            </Routes>
        </BrowserRouter>
    );
}

export default App;
