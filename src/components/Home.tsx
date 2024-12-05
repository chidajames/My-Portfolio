import  { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';
import '../index.css'
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function Home() {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    if (el.current) {
      const typed = new Typed(el.current, {
        strings: [
          'Hello World!!', 
          'Bonjour Monde!!', 
          'こんにちは世界!!', 
          'Hola Mundo!!', 
          'Ciao Mondo!!', 
          'Olá Mundo!!', 
          '안녕하세요 세계!!'
        ],
        typeSpeed: 50,      // Faster typing
        backSpeed: 25,      // Faster deleting
        backDelay: 1500,    // Shorter pause between cycles
        cursorChar: '|',     // Customizable cursor
        loop: true
      });

      // Destroy Typed instance on unmounting to prevent memory leaks
      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <div className='page-background'>
      <Container>
        <Row className="home-content">
          <Col xs={19} md={11} lg={7}></Col>
          <Col xs={5} md={5} lg={5} className="text-center">
            <h1 
              className='Home-color'
              style={{
                fontWeight: 'bold', 
                position: 'relative', 
                display: 'inline-block',
              }}
            >
              <span ref={el} className="typed-cursor-container"></span>
            </h1>
            <p className='welcome-text Home-color'>
              A cheerful UI/UX designer who loves crafting intuitive user experiences. 
              Dive into my work and discover how I blend creativity with functionality. 
              Let's collaborate and bring your vision to life in a fun and vibrant way!
            </p>
            <Link to="/AboutMe" className='no-underline'>
              <Button className='primary-button'>
                Know More
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home;