import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import './Blog.css';                                            // Importing CSS dependency            
import {Link} from "react-router-dom";                          // Used to route to different page                            
import photo from '../assets/photography.jpg'                   // importing photos used in this page        
import video from '../assets/videography.jpg'


// Main return function of Blog page

  export default function Blog() {
  return (
    <>
    <br />
    <Container>
    <h1>Blogs</h1>
    <br />
        <Row>

            <Col >
                <Link to="/Blog/PhotographyAssignment" className='no-underline'><Bigcard1/></Link>  
            </Col>
                
            <Col>
                <Link to="/Blog/VideoAssignment" className='no-underline'><Bigcard2/></Link> 
            </Col>

        </Row>
        <br /><br /><br /><br /><br /><br />
    </Container>
    </>
  );
}


// functions that displays individual blog card code (Taken from react bootstrap)

function Bigcard1() {
    return (
        <Card>
            <Card.Img variant="top" src={photo} />
            <Card.Body>
            <Card.Title  style={{fontSize:'xx-large'}}>Photography Assignment</Card.Title>
            <Card.Text>
                A fun activity where we had to capture three well composed images on a given topic.
            </Card.Text>
            </Card.Body>
        </Card>
    );
  }

  function Bigcard2() {
    return (
        <Card>
            <Card.Img variant="top" src={video} />
            <Card.Body>
            <Card.Title style={{fontSize:'xx-large'}}>Videography Assignment</Card.Title>
            <Card.Text>
                A fun activity where we had to conceptualize and produce a small product video as a team.
            </Card.Text>
            </Card.Body>
        </Card>
    );
  }

