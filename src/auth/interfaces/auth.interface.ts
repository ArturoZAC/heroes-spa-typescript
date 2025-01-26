export interface User {
  id: string;
  name: string;
}

export interface InitialState {
  user: User
  logged: boolean
}

export interface AuthContextProps {
  logout: () => void;
  login: (name: string) => void;
  authState: InitialState;
}