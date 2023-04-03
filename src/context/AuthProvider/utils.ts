import { Cookies, useCookies } from "react-cookie";
import { Api } from "../../services/api";


export function setUserCookies(accessToken: string, refreshToken: string) {

    const [cookies, setCookie, removeCookie] = useCookies(['jwt-access-token', 'jwt-refresh-token']);
    //1 hora.
    const expiresDate = new Date(Date.now() + 60 * 60 * 1000);


    console.log("SET USER COOKIES", accessToken, "Refresh:", refreshToken)

    setCookie('jwt-access-token',  accessToken, { expires: expiresDate, sameSite: 'none', secure: true, path: '/' });
    setCookie('jwt-refresh-token', refreshToken, { expires: expiresDate, sameSite: 'none', secure: true, path: '/' });
}

export function getUserCookies(){

    const cookies = new Cookies();

    const json = cookies.get("jwt-access-token");
    // useCookies(['jwt-access-token', 'jwt-refresh-token']);

    if(!json){  
        return null;
    }

    const user = JSON.parse(json);

    return user ?? null;
}

export async function LoginRequest(username: string, password: string){
    try {

    const request = await Api.post('/auth/login', { username, password })
    
    return request.data;

    }catch(error){
        return null;    
    }
}