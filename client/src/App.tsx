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
import Dashboard from './pages/employer/Dashboard';
import CompanyProfile from './pages/employer/CompanyProfile';
import JobPosting from './pages/employer/JobPosting';
import TeamManagement from './pages/employer/TeamManagement';
import Applicants from './pages/employer/Applicants';
import AuthSuccess from './pages/AuthSuccess';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import First from './pages/flowPages/first';
import Third from './pages/flowPages/third';
import Fourth from './pages/flowPages/fourth';
import Second from './pages/flowPages/second';
import Profile from './pages/user/Profile';
import EditProfile from './pages/user/EditProfile';
import Projects from './pages/user/Projects';

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
        <Route path='/employer/dashboard' element={<Dashboard/>} />
        <Route path='/employer/companies' element={<CompanyProfile/>} />
        <Route path='/employer/job-postings' element={<JobPosting/>} />
        <Route path='/employer/team-management' element={<TeamManagement/>} />
        <Route path='/employer/applicants' element={<Applicants/>} />
        <Route path = '/auth-success' element={<AuthSuccess />} />
        <Route path='/first' element={<First/>} />
        <Route path='/second' element={<Second/>} />
        <Route path='/third' element={<Third/>} />
        <Route path='/fourth' element={<Fourth/>} />
        <Route path='/terms' element={<Terms/>}/>
        <Route path='/policy' element={<Privacy/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/edit-profile' element={<EditProfile />}/>
        <Route path='/projects' element={<Projects/>} />
      </Routes>
    </div>
  )
}
  
export default App
