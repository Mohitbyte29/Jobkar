import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home  from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Categories from './pages/Category';
import Companies from './pages/company/Companies';
import { Internships } from './pages/internships/Internships';
import Resources from './pages/Resources';
import { Jobs } from './pages/jobs/Jobs';
import { JobsCategory } from './pages/jobs/JobsCategory';
import WishList from './pages/WishList';
import { PostJob } from './pages/jobs/PostJob';
import JobPage from './pages/jobs/JobPage';
import CompanyPage from './pages/company/CompanyPage';
import SavedJob from './pages/jobs/SavedJob';
import { InternshipsCategory } from './pages/internships/InternshipsCategory';
import InternshipPage from './pages/internships/InternshipPage';
import CompanyCategories from './pages/company/CompanyCategories';
import JobManagement from './pages/admin/JobManagement';
import CompanyManagement from './pages/admin/CompanyManagement';
import Analytics from './pages/admin/Analytics';
import Payment from './pages/admin/Payment';
import UserManagement from './pages/admin/UserManagement';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/companies' element={<Companies />} />
        <Route path='/companies/search' element={<CompanyCategories />} />
        <Route path='/internships' element={<Internships />} />
        <Route path='/internships/search' element={<InternshipsCategory />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/jobs/search' element={<JobsCategory />} />
        <Route path='/jobs/search/:category' element={<JobPage />} />
        <Route path='/internships/search/:category' element={<InternshipPage />} />
        <Route path='/wishlist' element={<WishList />} />
        <Route path='/postJob' element={<PostJob />} />
        <Route path='/company/:companyName' element={<CompanyPage />} />
        <Route path='/savedJobs' element={<SavedJob/>} />
        <Route path='/admin/jobs' element={<JobManagement/>} />
        <Route path='/admin/companies' element={<CompanyManagement/>} />
        <Route path='/admin/analytics' element={<Analytics/>} />
        <Route path='/admin/payments' element={<Payment/>} />
        <Route path='/admin/users' element={<UserManagement/>} />
      </Routes>
    </div>
  )
}
  
export default App
