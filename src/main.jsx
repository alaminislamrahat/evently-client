import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import { router } from './routes/Route.jsx'
import { Toaster } from 'react-hot-toast'
import AuthProviders from './providers/AuthProviders.jsx'
import { RouterProvider } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProviders>
     
        <RouterProvider router={router} />
        <Toaster />
    
    </AuthProviders>
  </StrictMode>,
)
