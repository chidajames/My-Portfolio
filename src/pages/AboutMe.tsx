import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';                      // importing all react bootstrap dependecy                                    
import headshot from '../assets/headshot.jpg';                  // importing main image
import './AboutMe.css';                                         // importing CSS depencency


export default function AboutMe() {
    return (
      <>
      
      <Container>
          <Row >
              <br /><br /><br />
              <Col style={{justifyContent: 'center'}}>
              <br /><br />
                    <div className='main'>                      {/* Usind div to add animation in CSS */}
                        <div className='frame'></div>       
                        <div className='frame'>
                        <Image src={headshot} style={{height:"400px" , width:"400px"}}/>
                        </div>
                    </div>
              </Col>

                  
              <Col>
              <br /><br /><br /><br /><br />
                <h1 className='textbackground'>Hello!! 👋</h1>
                <br />
                <p className='aboutme-text'>I'm an Interaction and Experience Design student from Bangalore, India, with a passion for blending creativity and technology. My journey has led me to become a hands-on DIY enthusiast, where my attachment to technology fuels my drive to create innovative, user-centered solutions. I thrive on solving complex problems, bringing together design and functionality to craft meaningful experiences.</p>
                <p className='aboutme-text'>Outside the digital realm, you can often find me on the basketball court or exploring local food joints. Whether I'm coding, brainstorming design ideas, or indulging in some street food, I’m all about embracing new experiences and challenges. </p>
              </Col>
  
          </Row>
          <br /><br /><br /><br /><br /><br />
      </Container>
      
      </>
      
    );
  }
  