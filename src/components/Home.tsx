import 'bootstrap/dist/css/bootstrap.css';                        // important for bootstrap to load css
import './Home.css'                                               // importing CSS dependency
import Container from 'react-bootstrap/Container';                // react bootstrap grid system requirements
import { Row,Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";

function Home() {
  

  return (
    <>  
        <div className='page-background'>    {/* applying page background style*/}
        <br /><br /><br /><br /><br />
        <Container >
            <Row>
              <Col><br /><br /><br /><br /><br /></Col>
            </Row>
            <Row>
                <Col xs={8}></Col>            {/* specifying the column split 8 and 4*/}
                <Col xs={4}>
                    <h1 style={{fontWeight:'bolder'}}>Hello World!!</h1> 
                    <p className='welcome-text'>
                      A cheerful UI/UX designer who loves crafting intuitive user experiences. 
                      Dive into my work and discover how I blend creativity with functionality. 
                      Let’s collaborate and bring your vision to life in a fun and vibrant way!
                    </p>
                    <br />
                    <Link to="/AboutMe" className='no-underline'><Button variant="dark">Learn More</Button></Link>   {/* routing the button to a specific page*/}
                    
                </Col>

            </Row>
        </Container>
        </div>      
    </>
  )
}

export default Home;
