import React from 'react';
import MyLabel from "./label/MyLabel";
import MyInput from "./inputs/MyInput";

const MyFormInput = ({...props}) => {
    return (
        <div className="space-y-2">
            <MyLabel value={props.labelValue}
            ></MyLabel>
            <MyInput value={props.inputValue}
                     placeholder={props.inputPlaceholder}
            >
            </MyInput>
        </div>
    );
};

export default MyFormInput;