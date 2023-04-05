import jwtDecode from "jwt-decode";

export interface DecodedToken {
  [key: string]: any;
}

export function decodeJwt(token: string): DecodedToken | null {
  try {
    return jwtDecode(token);
  } catch (error) {
    return null;
  }
}