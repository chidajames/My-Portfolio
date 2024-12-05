import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.css';          //important for bootstrap to load css
import "bootstrap/dist/css/bootstrap.min.css"       //important for bootstrap to load css
import "bootstrap/dist/js/bootstrap.js"
import './Topbar.css'                               //importing CSS dependency
import {NavLink} from "react-router-dom";           //For routing navbar elements to specific page
import ullogo from '../assets/UL-Logo-Dark.png'



function Topbar() {
  
  const location = useLocation();
  
  const isTransparent = location.pathname === '/';

  return (
    <>
    
    <Navbar expand="lg" data-bs-theme="light" className={isTransparent ? 'navbar-transparent py-3' : ('navbar-colored py-3')}>  {/* Navbar properties */}
        <Container fluid style={{'color':'black'}}>
            <img
                alt=""
                src={ullogo}
                width="100"
                height="45"
                className="d-inline-block align-top"
                />
          <Nav className='me'>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />   {/* To Collapse navbar to a hamburger menu  */}
            <Navbar.Collapse id="basic-navbar-nav">              {/* To Collapse navbar to a hamburger menu  */}

              {/* Linking all navbar elements to specific page */}
              
              <NavLink className="no-underline" to='/'>Home</NavLink>
              <NavLink className="no-underline" to='/AboutMe'>About Me</NavLink>
              <NavLink className="no-underline" to='/Gallery'>Gallery</NavLink>
              <NavLink className="no-underline" to='/Project'>Projects</NavLink>
              <NavLink className="no-underline" to='/Blog'>Blogs</NavLink>
              <NavLink className="no-underline" to='/Contact'>Contacts</NavLink>
            </Navbar.Collapse>
          </Nav>
        </Container>
      </Navbar> 
    

      
    </>
  )
}

export default Topbar;


