import { createContext } from "react";
import { AuthContextProps } from "../interfaces/auth.interface";

export const AuthContext = createContext({} as AuthContextProps);