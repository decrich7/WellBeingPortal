import React from 'react';
import './output.css';
import Header from "./components/headers/Header";
import Body from "./components/body/Body";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MyEventList from "./components/lists/MyEventList";
import MyRegisterForm from "./components/forms/MyRegisterForm";
import MyLoginForm from "./components/forms/MyLoginForm";
import MySlider from "./components/sliders/MySlider";

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
                        <div className="flex items-center flex-wrap  justify-center w-5/6">
                            <Header></Header>
                            <MyLoginForm></MyLoginForm>
                        </div>
                    </div>
                )}>
                </Route>
                <Route path="/register" element={(
                    <div className="App flex justify-center space-y-4">
                        <div className="flex items-center flex-wrap  justify-center w-5/6">
                            <Header></Header>
                            <MyRegisterForm></MyRegisterForm>
                        </div>
                    </div>
                )}>
                </Route>
                <Route path="/clubs" element={(
                    <div className="App flex justify-center space-y-4">
                        <div className="flex items-center flex-wrap  justify-center w-5/6">
                            <Header></Header>
                        </div>
                    </div>
                )}>

                </Route>
                <Route path="/quests" element={(
                    <div className="App flex justify-center space-y-4">
                        <div className="flex items-center flex-wrap  justify-center w-5/6">
                            <Header></Header>
                        </div>
                    </div>
                )}>

                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
