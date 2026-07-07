import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import WishListProvider from './context/WishlistContext.tsx'
import { JobsProvider } from './context/JobsContext.tsx'
import { CompanyProvider } from './context/CompanyContext.tsx'
import { InternshipsProvider } from './context/InternshipsContext.tsx'
import { UserProvider } from './context/UserContext.tsx'


createRoot(document.getElementById('root')!).render(
  
  <BrowserRouter>
  <UserProvider>
    <CompanyProvider>
      <InternshipsProvider>
    <JobsProvider>
    <App />
    </JobsProvider>
    </InternshipsProvider>
    </CompanyProvider>
    </UserProvider>
  </BrowserRouter>
)
