import React from 'react';
import {clientId, onFailure, onSuccess} from "../../../tools/login";
import GoogleLogin from "react-google-login";

const GoogleAuth = () => {
    return (
        <GoogleLogin
            clientId={clientId}
            buttonText="Войти с помощью Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}

        />
    );
};

export default GoogleAuth;