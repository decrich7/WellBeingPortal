import axios from "axios";


export const clientId = "888731677354-09dpmnh450d511958dgs5hrml7oj089b.apps.googleusercontent.com";


export  const onSuccess = async (res) => {
    console.log('succzddgsfgess:', res.accessToken);
    const user = {
        "grant_type": "convert_token",
        "client_id": "VG2Qh1ndtfmzIrQy19ZezZb8FsUueaJTcCbiqsiN",
        "client_secret": "ZcTInKJglrAJZAvk3dk6E5VHTSZqjcPvtRTZVytnl22ekU5TfqMlk1EoCVodVFoauqY6C22uz1FRmEldcc7GgbHkl4NQuzKeJ91EMvEYCj1SpzOWgu3i35R7vHWqwrO1",
        "backend": "google-oauth2",
        "token": res.accessToken
    };
    console.log(user)
    const {data} = await axios.post('http://localhost:8000/api-auth/auth/convert-token/', user, {
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

export  const onFailure = (err) => {
    console.log('failed:', err);
};
