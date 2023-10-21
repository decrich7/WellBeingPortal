import React from 'react';
import './output.css';
import Header from "./components/headers/Header";
import MySlider from "./components/sliders/MySlider";

import MyEventList from "./components/lists/MyEventList";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MyLoginForm from "./components/forms/MyLoginForm";
import MyRegisterForm from "./components/forms/MyRegisterForm";
import Cards from "./components/cards/Cards";

function App() {
    return (
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
            </Routes>
        </BrowserRouter>
    )
        ;
}

export default App;
