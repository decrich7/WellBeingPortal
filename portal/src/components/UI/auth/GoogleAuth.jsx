import axios from "axios";
import GoogleLogin from "react-google-login";
import {useEffect} from "react";


const GoogleAuth = () => {
    const clientId = "888731677354-09dpmnh450d511958dgs5hrml7oj089b.apps.googleusercontent.com";

    const onSuccess = async (res) => {
        console.log('succzddgsfgess:', res.accessToken);
        const user = {
            "grant_type": "convert_token",
            "client_id": "6NGQtyzymASrfsaC6VKOjmCo9eavkOgmRC9onshG",
            "client_secret": "I32vpeOhrLImeRU8LFxSbqUl110Dbl9mXyvfCqfHatpLSVvL88PJ7r42bq4O8dNMrTgjabDV5Rr1UkDoHhs2U6zTFa0jmnsRtynw91hsApx2gNuJylwOjvjleWd6eISl",
            "backend": "google-oauth2",
            "token": res.accessToken
        };
        console.log(user)

        const {data} = await axios.post('http://127.0.0.1:8000/api-auth/auth/convert-token/', user, {
            headers: {
                'Content-Type': 'application/json'
            }
        }, {withCredentials: true});

        console.log(data, data['access_token'])
        axios.defaults.headers.common['Authorization'] = `Bearer ${data['access_token']}`;
        localStorage.clear();
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('refresh_token', data.refresh_token);
        window.location.href = '/'
    }

    const onFailure = (err) => {
        console.log('failed:', err);
    };


    return (
        <div className="Auth-form-container">
            <GoogleLogin
                clientId={clientId}
                buttonText="Sign in with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}

            />
        </div>

    )
}

export default GoogleAuth