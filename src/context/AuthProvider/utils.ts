import { Api } from "../../services/api";
import { getCookie, setCookie } from "typescript-cookie";

export function setUserCookies(accessToken: string, refreshToken: string){

    //1 hora.
    const expiresDate = new Date(Date.now() + 60 * 60 * 1000);


    console.log("SET USER COOKIES", accessToken, "Refresh:", refreshToken)

    setCookie('jwt-access-token',  accessToken, { expires: expiresDate, sameSite: 'none', secure: true, path: '/' });
    setCookie('jwt-refresh-token', refreshToken, { expires: expiresDate, sameSite: 'none', secure: true, path: '/' });
}

export function getUserCookies(){


    const token = getCookie('jwt-access-token');
    const refresh = getCookie('jwt-refresh-token');

    const user = {
        accessToken: token,
        refreshToken: refresh,
    }

    console.log("user", user);
    
    if(!user){  
        return null;
    }

    return user ?? null;    
}

export async function LoginRequest(username: string, password: string){
    try {

        const request = await Api.post('/auth/login', { username, password })
        return request.data.value;
        
    }catch(error){
        return null;    
    }
}