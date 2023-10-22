import React from "react";
import postcssValueParser from "tailwindcss/src/value-parser";
import MyInput from "../UI/inputs/MyInput";
import MyButton from "../UI/buttons/MyButton";

const MyQuestionsForm = (onSubmit) => {
    return (
        <div className={"flex flex-col rounded-lg overflow-hidden sm:flex-row bg-amber-200"}>
            <MyInput/>
            <MyButton value={"Отправить"} onClick={onSubmit} type={"submit"}/>
        </div>
    )
}

export default MyQuestionsForm;
