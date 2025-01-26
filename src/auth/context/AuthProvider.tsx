import { useReducer } from "react"
import { AuthContext } from "./AuthContex"
import { authReducer } from "./authReducer"
import { InitialState } from "../interfaces/auth.interface"

const initialState: InitialState = {
  logged: false,
  user: {
    id: '',
    name: ''
  }
}

const init = () => {
  const user = JSON.parse(localStorage.getItem('user') || 'null');

  return {
    logged: !!user,
    user: user 
  }
}


export const AuthProvider = ({ children } : { children: React.ReactNode}) => {

  const [ authState, dispatch ] = useReducer( authReducer, initialState, init);

  const login = ( name: string = '') => {

    const user = { id: 'ABC', name: name }

    localStorage.setItem('user', JSON.stringify(user))

    dispatch( {type: "[AUTH] Login", payload: user});
  }

  const logout = () => {
    localStorage.removeItem('user')
    dispatch( {type: "[AUTH] Logout" });
  }
  
  return (
    <AuthContext.Provider value={{ authState, login, logout}}>
      { children }
    </AuthContext.Provider>
  )
}
