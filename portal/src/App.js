import React from 'react';
import './output.css';
import MyButton from "./components/UI/buttons/MyButton";

import MyFormInput from "./components/UI/MyFormInput";
import MyLoginForm from "./components/forms/MyLoginForm";
import MyRegisterForm from "./components/forms/MyRegisterForm";

function App() {
    return (
        <div className="App">
            <div className="flex items-center flex-col flex-wrap">
                <MyButton value={"Подтверждено"}
                          color={"bg-green-600"}
                          type={"submit"}
                >

                </MyButton>

                <MyFormInput
                    labelValue={"Абоба"}
                    inputValue={""}
                    inputPlaceholder={"Почта"}
                >
                </MyFormInput>
                <MyLoginForm></MyLoginForm>
                <MyRegisterForm></MyRegisterForm>
            </div>
        </div>
    );
}

export default App;
