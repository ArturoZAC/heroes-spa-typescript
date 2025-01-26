import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { RouterProvider } from 'react-router-dom'
import { AppRouter } from './router/AppRouter'
import { AuthProvider } from './auth'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={AppRouter}/>
    </AuthProvider>
  </StrictMode>,
)
