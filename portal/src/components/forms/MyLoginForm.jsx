import React, {useState} from 'react';

import MyFormInput from "../UI/MyFormInput";
import MyButton from "../UI/buttons/MyButton";
import MyLabel from "../UI/label/MyLabel";
import MyInput from "../UI/inputs/MyInput";

const MyLoginForm = () => {
    let [data, setData] = new useState({email: '', password: ''})

    function changeData(e) {
        setData({...data, email: e.target.value})
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        // Submit(data, file, 0, "", "preview", getList);
    };
    return (
        <div className="container mx-auto max-w-sm py-32 sm:py-48 lg:py-56">
            <div className="flex flex-col space-y-5 w-full">
                <form>
                    <MyFormInput
                        labelValue={"Электронная почта"}
                        inputValue={data.email}
                        inputPlaceholder={"example@ban.su"}
                        onChange={e => changeData(e)}>
                    </MyFormInput>
                    <MyFormInput
                        labelValue={"Пароль"}
                        inputValue={""}
                        inputPlaceholder={"••••••"}
                        onChange={e => setData({...data, password: e.target.value})}
                    >
                    </MyFormInput>

                    <MyButton value={"Войти"}
                              color={"bg-yellow-400"}
                              type={"submit"}
                    >
                    </MyButton>
                </form>
            </div>
        </div>
    );
};

export default MyLoginForm;