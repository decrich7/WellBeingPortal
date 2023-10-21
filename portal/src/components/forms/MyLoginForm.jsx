import React from 'react';

import MyFormInput from "../UI/MyFormInput";
import MyButton from "../UI/buttons/MyButton";

const MyLoginForm = () => {
    return (
        <div className="flex flex-wrap items-center">
            <div className="rounded-lg flex flex-col w-full">
                <div className="relative">
                    <MyFormInput
                        labelValue={"Электронная почта"}
                        inputValue={""}
                        inputPlaceholder={"example@ban.su"}
                    >
                    </MyFormInput>
                </div>
                <div className="relative">
                    <MyFormInput
                        labelValue={"Пароль"}
                        inputValue={""}
                        inputPlaceholder={"••••••"}
                    >
                    </MyFormInput>
                </div>
                <MyButton value={"Войти"}
                          color={"bg-blue-600"}
                          type={"submit"}
                >
                </MyButton>
            </div>
        </div>
    );
};

export default MyLoginForm;