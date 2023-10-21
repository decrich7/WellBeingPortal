import React from 'react';
import MyButton from "../UI/buttons/MyButton";
import MyRouteButton from "../UI/buttons/MyRouteButton";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="w-[75%] flex flex-wrap p-5 flex-col md:flex-row justify-center items-center">
            <div className="min-w-1 w-1/6 ml-2 min-w-[120px] min-h-[27px]">
                <Link to={"/"} className="flex title-font font-medium items-center mb-4 md:mb-0">
                    <img
                        className=""
                        src="https://oggetto.design/images/layout/oggetto-logo/rus-2x.png"
                        alt="href-logo"/>
                </Link>
            </div>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center space-x-5">
                <div className="hover:text-gray-900">
                    <MyRouteButton value={"Квесты"} href={"/quests"}></MyRouteButton>
                </div>
                <div className="hover:text-gray-900">
                    <MyRouteButton value={"Клубы"} href={"/clubs"}></MyRouteButton>
                </div>
                <div className="p-2">
                    <a href={"/login"}>
                        <MyButton value={"Войти"} color={"bg-yellow-500"}/>
                    </a>
                </div>
                <div className="p-1">
                    <a href={"/register"}>
                        <MyButton value={"Зарегистрироваться"} color={"bg-yellow-500"}/>
                    </a>
                </div>
            </nav>

        </div>
    )
}

export default Header;