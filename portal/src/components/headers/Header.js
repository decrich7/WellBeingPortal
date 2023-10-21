import React from 'react';
import MyButton from "../UI/buttons/MyButton";

const Header = () => {
    return (
        <div className="w-[100%] flex flex-row text-center place-items-center mt-5" >
            <div className="w-1/6 ml-2">
                <a href="/" className="">
                   <img
                       className=""
                        src="https://oggetto.design/images/layout/oggetto-logo/rus-2x.png"
                        alt="href-logo"/>
                </a>
            </div>
            <div className="w-1/5 ">
                <a className=""
                    href="/">
                    Квесты
                </a>
            </div >
                <div className="w-1/5">
                    <a
                        href="/">
                        Клубы
                    </a>
                </div>
            <div className="w-1/5 ">
                {/*<a*/}
                {/*    href="/">*/}
                {/*    Войти*/}
                {/*</a>*/}
                <MyButton value={"Войти"} color={"bg-yellow-500"}/>
            </div>
            <div className="w-1/5">
                <MyButton value={"Зарегистрироваться"} color={"bg-yellow-500"}/>
            </div>
        </div>
    )
}

export default Header;