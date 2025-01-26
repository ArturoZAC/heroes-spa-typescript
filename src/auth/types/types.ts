import { User } from "../interfaces/auth.interface";

export type Action = 
  | { type: '[AUTH] Login', payload: User }
  | { type: '[AUTH] Logout' }
