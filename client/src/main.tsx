import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/react'
import WishListProvider from './context/WishlistContext.tsx'
import { JobsProvider } from './context/JobsContext.tsx'
import { CompanyProvider } from './context/CompanyContext.tsx'
import { InternshipsProvider } from './context/InternshipsContext.tsx'

const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
if (!publishableKey) throw new Error("VITE_CLERK_PUBLISHABLE_KEY is not set in .env");

createRoot(document.getElementById('root')!).render(
  
  <BrowserRouter>
   <WishListProvider>
   <ClerkProvider publishableKey={publishableKey}>
    <CompanyProvider>
      <InternshipsProvider>
    <JobsProvider>
    <App />
    </JobsProvider>
    </InternshipsProvider>
    </CompanyProvider>
   </ClerkProvider>
   </WishListProvider>
  </BrowserRouter>
)
