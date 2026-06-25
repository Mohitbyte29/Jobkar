import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home  from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Categories from './pages/Category';
import Companies from './pages/Companies';
import Internships from './pages/Internships';
import Resources from './pages/Resources';
import { Jobs } from './pages/Jobs';
import { JobsCategory } from './pages/JobsCategory';
import WishList from './pages/WishList';
import { PostJob } from './pages/PostJob';
import JobPage from './pages/JobPage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/companies' element={<Companies />} />
        <Route path='/internships' element={<Internships />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/jobs/search' element={<JobsCategory />} />
        <Route path='/jobs/search/:category' element={<JobPage />} />
        <Route path='/wishlist' element={<WishList />} />
        <Route path='/postJob' element={<PostJob />} />
        {/* <Route path='' */}
      </Routes>
    </div>
  )
}
  
export default App
