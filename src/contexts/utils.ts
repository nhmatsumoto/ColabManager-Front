// import { Api } from "../../services/api";
// import { getCookie, setCookie } from "typescript-cookie";
// import { decodeJwt, DecodedToken } from "./tokenDecode";

// export function setUserCookies(accessToken: string, refreshToken: string){

//     const expiresDate = new Date(Date.now() + 60 * 60 * 1000); //1 hr
//     setCookie('jwt-access-token',  accessToken, { expires: expiresDate, sameSite: 'none', secure: true, path: '/' });
//     setCookie('jwt-refresh-token', refreshToken, { expires: expiresDate, sameSite: 'none', secure: true, path: '/' });

// }

// export function getUserCookies(){

//     const token = getCookie('jwt-access-token') as string;

//     const decoded: DecodedToken | null = decodeJwt(token);

//     const user = JSON.stringify(decoded);

//     if(!user)
//     {
//         return null;
//     }

//     return user ?? null;    
// }

// export async function LoginRequest(username: string, password: string){
//     try {

//         const request = await Api.post('/auth/login', { username, password })
//         return request.data.value;

//     }catch(error){
//         return null;    
//     }
// }