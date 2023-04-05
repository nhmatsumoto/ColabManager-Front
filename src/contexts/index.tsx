// import { createContext, useEffect, useState } from "react";
// import { IContext, IUser, IAuthProvider } from "../types/types";
// import { LoginRequest, getUserCookies, setUserCookies } from "./utils";

// export const AuthContext = createContext<IContext>({} as IContext);
 
// export const AuthProvider = ({ children } : IAuthProvider) => {

//     const [user, setUser] = useState<IUser | null>();

//     useEffect(() => {
//         const user = getUserCookies() as IUser;

//         if(user) {
//             setUserCookies(user.accessToken, user.refreshToken);
//         }

//     }, []) 


//     async function authenticate(username: string, password: string) {

//         const response = await LoginRequest(username, password);

//         if(response)
//         {
//             setUserCookies(response.accessToken, response.refreshToken);    

//             setUser({
//                 userId: response.userId,
//                 accessToken: response.accessToken,
//                 refreshToken: response.refreshToken 
//             })
//         }        
//     }

//     function logOut() {
//         setUser(null);
        
//         //Clean cookies;

//     }

//     return (
//         <AuthContext.Provider value={{...user, authenticate, logOut}}>
//             { children }
//         </AuthContext.Provider>
//     )
// } 