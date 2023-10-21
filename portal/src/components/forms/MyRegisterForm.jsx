import React from 'react';
import MyFormInput from "../UI/MyFormInput";
import MyButton from "../UI/buttons/MyButton";

const MyRegisterForm = () => {
    return (
        <div className="container mx-auto max-w-sm py-32 sm:py-48 lg:py-56">
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
                <MyFormInput
                    labelValue={"Повторите пароль"}
                    inputValue={""}
                    inputPlaceholder={"••••••"}
                >
                </MyFormInput>
                <MyButton value={"Зарегистрироваться"}
                          color={"bg-yellow-400"}
                          type={"submit"}
                >
                </MyButton>
            </div>
        </div>
    );
};

export default MyRegisterForm;