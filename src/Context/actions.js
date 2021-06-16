import jwt_decode from "jwt-decode";
const ROOT_URL = 'http://127.0.0.1:5000';

export async function loginUser(dispatch, loginPayload) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginPayload),
    };

    try {
        dispatch({ type: 'REQUEST_LOGIN' });
        let response = await fetch(`${ROOT_URL}/login`, requestOptions);

        let data = await response.json();
     
        // let token = data.token;
       
        

        if (data) {
            dispatch({ type: 'LOGIN_SUCCESS', payload: data });

           var datadecode = await jwt_decode(data.token)
            localStorage.setItem('token', (data.token));
            localStorage.setItem('user_name',JSON.stringify(datadecode.user_name));
            localStorage.setItem('data', JSON.stringify(datadecode.privilage_list));
           
            return data;
        }

    } catch (error) {
        // dispatch({ type: 'LOGIN_ERROR', error: error });
        console.log('hi' ,error);
    }
}

export async function logout(dispatch) {
    dispatch({ type: 'LOGOUT' });

    localStorage.removeItem('token');
}
