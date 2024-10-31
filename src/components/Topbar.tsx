import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.css';          //important for bootstrap to load css
import "bootstrap/dist/css/bootstrap.min.css"       //important for bootstrap to load css
import "bootstrap/dist/js/bootstrap.js"
import './Topbar.css'                               //importing CSS dependency
import {NavLink} from "react-router-dom";           //For routing navbar elements to specific page
import ullogo from '../assets/UL-Logo.png'



function Topbar() {
  

  return (
    <>
    
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" className='py-4 '>  {/* Navbar properties */}
        <Container>
            <img
                alt=""
                src={ullogo}
                width="120"
                height="50"
                className="d-inline-block align-top"
                />
          <Nav className="me" >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />   {/* To Collapse navbar to a hamburger menu  */}
            <Navbar.Collapse id="basic-navbar-nav">              {/* To Collapse navbar to a hamburger menu  */}

              {/* Linking all navbar elements to specific page */}
              
              <Nav.Link><NavLink className="no-underline" to='/'>Home</NavLink></Nav.Link>
              <Nav.Link><NavLink className="no-underline" to='/AboutMe'>About Me</NavLink></Nav.Link>
              <Nav.Link><NavLink className="no-underline" to='/Project'>Projects</NavLink></Nav.Link>
              <Nav.Link><NavLink className="no-underline" to='/Blog'>Blogs</NavLink></Nav.Link>
              <Nav.Link><NavLink className="no-underline" to='/Contact'>Contacts</NavLink></Nav.Link>
            </Navbar.Collapse>
          </Nav>
        </Container>
      </Navbar> 


      
    </>
  )
}

export default Topbar;


