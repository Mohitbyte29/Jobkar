import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/react'

const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
if (!publishableKey) throw new Error("VITE_CLERK_PUBLISHABLE_KEY is not set in .env");

createRoot(document.getElementById('root')!).render(
  
  <BrowserRouter>
   <ClerkProvider publishableKey={publishableKey}>
    <App />
   </ClerkProvider>
  </BrowserRouter>
)
