import { createBrowserRouter, Navigate } from "react-router-dom";
import { HeroesApp } from "../HeroesApp";
import { LoginPage } from "../auth";
import { HeroesRouter } from "../heroes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: 
      <PrivateRoute>
        <HeroesApp />
      </PrivateRoute>
    ,
    children: [
      { path: '', element: <Navigate to="marvel" replace /> },
      ...HeroesRouter
    ]
  },
  {  path: '/login', element: 
    <PublicRoute>
      <LoginPage />
    </PublicRoute>
  },
  {  path: '/*', element: <Navigate to='/marvel' />},
],
{
  future: {
    v7_relativeSplatPath: true,
    // v7_startTransition: true
  }
}
);

