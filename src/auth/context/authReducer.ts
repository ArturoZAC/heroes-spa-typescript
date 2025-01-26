import {  InitialState } from "../interfaces/auth.interface";
import { Action } from "../types/types";

export const authReducer = ( state: InitialState, action: Action ) => {

  switch (action.type) {
    case "[AUTH] Login":
      return {
        ...state,
        logged: true,
        user: action.payload
      }
    
    case "[AUTH] Logout":
      return {
        logged: false,
        user: { id: "", name: "" },
      }

    default:
      return state;
  }

}
