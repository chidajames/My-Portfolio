import './App.css'
import Topbar from './components/Topbar';                                          // Importing all the pages in the project
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import Blog from './pages/Blog';
import Home from './components/Home';
import Contact from './pages/Contact';
import Project from './pages/Project';
import Gallery from './pages/Gallery'
import PhotographyAssignment from './pages/PhotographyAssignment';    
import VideoAssignment from "./pages/VideoAssignment"                
import "bootstrap/dist/css/bootstrap.min.css";                                     // React bootstrap dependency
import { HashRouter, Route, Routes } from 'react-router-dom';                   // Routing requirements
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../src/Store';


const App: React.FC = () => {
  

  return (
    <>
    <Provider store={store}>
    <HashRouter>
    <Topbar/>
    <Routes>
      <Route index element={<Home/>} />
      <Route path='/AboutMe' element={<AboutMe/>} />
      <Route path='/Contact' element={<Contact/>} />
      <Route path='/Project' element={<Project/>} />
      <Route path='/Blog' element={<Blog/>} />
      <Route path='/Gallery' element={<Gallery/>} />
      <Route path='/Blog/PhotographyAssignment' element={<PhotographyAssignment/>} />
      <Route path='/Blog/VideoAssignment' element={<VideoAssignment/>} />
    </Routes>
    <Footer/>
    </HashRouter>
    </Provider>
   
    </>
  )
}

export default App
