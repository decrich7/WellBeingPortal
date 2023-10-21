import React, {useState} from 'react';

import MyButton from "../UI/buttons/MyButton";
import MyLabel from "../UI/label/MyLabel";
import MyInput from "../UI/inputs/MyInput";
import MyError from "../errors/MyError";

import GoogleAuth from "../UI/auth/GoogleAuth";


const MyRegisterForm = () => {
    let [data, setData] = new useState({email: '', password: '', confirmPassword: ''})
    let [error, setError] = new useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    function changeEmail(e) {
        if ((!e.target.value) || !(/\S+@\S+\.\S+/.test(e.target.value))) {
            setError({...error, email: 'Неверный адрес электронной почты'});
        } else {
            setError({...error, email: ''});
        }
        setData({...data, email: e.target.value})
    }

    function changePassword(e) {
        if ((!e.target.value) || !(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(e.target.value))) {
            setError({...error, password: 'Неверный пароль'});
        } else {
            setError({...error, password: ''});
        }
        setData({...data, password: e.target.value})
    }

    function checkPassword(e) {
        if (!(data.password === e.target.value)) {
            setError({...error, confirmPassword: 'Пароли не совпадают'})
        } else {
            setError({...error, confirmPassword: ''});
        }
        setData({...data, confirmPassword: e.target.value})
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        if (error.email === '' && error.password === '' && error.confirmPassword === '') {
            console.log(data.password)
            console.log(data.email)
        }
        // Submit(data, file, 0, "", "preview", getList);
    };
    return (
        <div className="container mx-auto max-w-sm py-12 sm:py-12 lg:py-12">
            <div className="flex flex-col space-y-4">
                <MyLabel value={"Электронная почта"}
                ></MyLabel>
                <MyInput value={data.email}
                         type={"email"}
                         placeholder={"example@ban.su"}
                         onChange={e => changeEmail(e)}>
                    >
                </MyInput>
                <MyError error={error.email} value={error.email}></MyError>
                <MyError></MyError>
                <MyLabel value={"Пароль"}
                ></MyLabel>
                <MyInput value={data.password}
                         type={"password"}
                         placeholder={"Пароль"}
                         onChange={e => changePassword(e)}>
                    >
                </MyInput>
                <MyError error={error.password} value={error.password}></MyError>
                <MyLabel value={"Пароль (еще раз)"}
                ></MyLabel>
                <MyInput value={data.confirmPassword}
                         type={"password"}
                         placeholder={"Повторите пароль"}
                         onChange={e => checkPassword(e)}>
                    >
                </MyInput>
                <MyError error={error.confirmPassword} value={error.confirmPassword}></MyError>
                <MyButton value={"Зарегистрироваться"}
                          color={"bg-yellow-400"}
                          type={"submit"}
                          onClick={handleSubmit}
                >
                </MyButton>
                <p className={"text-center text-gray-500"}>или</p>
                <GoogleAuth></GoogleAuth>

            </div>
        </div>
    );
};

export default MyRegisterForm;