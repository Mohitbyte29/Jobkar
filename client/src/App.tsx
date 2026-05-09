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
      </Routes>
    </div>
  )
}

export default App
