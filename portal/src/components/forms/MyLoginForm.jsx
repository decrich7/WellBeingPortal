import React from 'react';

import MyFormInput from "../UI/MyFormInput";
import MyButton from "../UI/buttons/MyButton";

const MyLoginForm = () => {
    return (
        <div className="flex flex-col space-y-4">
            <MyFormInput
                labelValue={"Электронная почта"}
                inputValue={""}
                inputPlaceholder={"example@ban.su"}
            >
            </MyFormInput>

            <MyFormInput
                labelValue={"Пароль"}
                inputValue={""}
                inputPlaceholder={"••••••"}
            >
            </MyFormInput>

            <MyButton value={"Войти"}
                      color={"bg-blue-600"}
                      type={"submit"}
            >
            </MyButton>
        </div>
    );
};

export default MyLoginForm;