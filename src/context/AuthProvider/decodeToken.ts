import jwtDecode from 'jwt-decode';
import { IUser } from './types';

const decodeToken = (token: string) => {
  try {
    const decodedToken = jwtDecode<IUser>(token);
    return decodedToken;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default decodeToken;