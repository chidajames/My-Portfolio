import './App.css'
import Topbar from './components/Topbar';                                          // Importing all the pages in the project
import AboutMe from './pages/AboutMe';
import Blog from './pages/Blog';
import Home from './components/Home';
import Contact from './pages/Contact';
import Project from './pages/Project';
import PhotographyAssignment from './pages/PhotographyAssignment';    
import VideoAssignment from "./pages/VideoAssignment"                
import "bootstrap/dist/css/bootstrap.min.css";                                     // React bootstrap dependency
import { HashRouter, Route, Routes } from 'react-router-dom';                   // Routing requirements

function App() {
  

  return (
    <>
    <HashRouter>
    <Topbar/>
    <Routes>
      <Route index element={<Home/>} />
      <Route path='/AboutMe' element={<AboutMe/>} />
      <Route path='/Contact' element={<Contact/>} />
      <Route path='/Project' element={<Project/>} />
      <Route path='/Blog' element={<Blog/>} />
      <Route path='/Blog/PhotographyAssignment' element={<PhotographyAssignment/>} />
      <Route path='/Blog/VideoAssignment' element={<VideoAssignment/>} />
    </Routes>
    </HashRouter>
    
   
    </>
  )
}

export default App
