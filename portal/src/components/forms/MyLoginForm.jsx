import React, {useState} from 'react';

import MyFormInput from "../UI/MyFormInput";
import MyButton from "../UI/buttons/MyButton";
import MyLabel from "../UI/label/MyLabel";
import MyInput from "../UI/inputs/MyInput";
import MyError from "../errors/MyError";

const MyLoginForm = () => {
    let [data, setData] = new useState({email: '', password: ''})
    let [error, setError] = new useState({
        email: '',
        password: ''
    });


    function changeEmail(e) {
        if (!e.target.value) {
            setError({...error, email:'Введите адрес электронной почты'});
        }
        else {
            setError({...error, email:''});
        }
        setData({...data, email: e.target.value})
    }

    function changePassword(e) {
        if (!e.target.value) {
            setError({...error, password:'Введите пароль'});
        }
        else {
            setError({...error, password:''});
        }
        setData({...data, password: e.target.value})
    }


    let handleSubmit = (e) => {
        e.preventDefault();
        console.log(data.email)
        console.log(data.password)
        // Submit(data, file, 0, "", "preview", getList);
    };
    return (
        <div className="container mx-auto max-w-sm py-32 sm:py-48 lg:py-56">
            <div className="flex flex-col space-y-5 w-full">
                <form>
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
                             placeholder={"Password"}
                             onChange={e => changePassword(e)}>
                        >
                    </MyInput>
                    <MyError error={error.password} value={error.password}></MyError>
                    <MyButton value={"Войти"}
                              color={"bg-yellow-400"}
                              type={"submit"}
                              onClick={handleSubmit}
                    >
                    </MyButton>
                </form>
            </div>
        </div>
    );
};

export default MyLoginForm;