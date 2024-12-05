
import Col from 'react-bootstrap/Col';                                      // React bootstrap dependency
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import img1 from "../assets/video img1.jpeg";                // Importing photos to be displayed
import img2 from "../assets/video img2.jpeg";
import img3 from "../assets/Video img3.jpeg";
import img4 from "../assets/video img4.jpeg";
import Coverimage from "../assets/videography cover - Copy.png";

  // Main function that returns to App.tsx

  export default function PhotographyAssignment() {
  return (
    <>
    
    <Container>
    <br /><br />
    <h1>Videography Assignment</h1>
    <br /><br />
        <Row>
        <Col>
        <Image src={Coverimage} thumbnail />
        <br /><br />
        <h1>Introduction:</h1>
            
            <p>As a postgraduate student studying Interaction and Experience Design, 
                I recently had the opportunity to participate in creating a product demo video. 
                This project aimed to showcase our creativity and technical skills using the resources available to us. 
                Our team of five members divided responsibilities into specific roles: 
                Director, Cinematographer, Lighting, Sound, and Continuity. 
                I decided to take on the role of the Lighting person—a crucial position responsible for setting the mood, focus, and aesthetic appeal of the video.
            </p>
            <p>
            To begin, we held a brainstorming session where each team member presented a product idea, 
            explaining its features and sharing a creative vision for its demo. After discussion, 
            we selected the Venture Bag, a compact travel bag, as our hero product. 
            The goal was to create a visually engaging video that effectively showcased 
            its features in real-world scenarios. 
            </p>

            {/* ----------------------x------------------------------------ */}
            
            <h1>Pre-Production:</h1>
            <p>Understanding that most of us had different class schedules, 
                we prioritized creating a well-structured shooting plan to optimize our time. 
                In our pre-production discussions, we identified the key features of the Venture Bag that needed to be highlighted.
                We also visualized how it would be presented in realistic scenarios.
            </p>
            <p>
            To stay organized, we developed a detailed storyboard outlining each scene, its composition, 
            and the mood we aimed to convey. This served as a valuable guide during the shoot. 
            As the Lighting person, I collaborated closely with the Director and Cinematographer 
            to understand their vision and ensure the lighting complemented the mood and highlighted the bag's
            features effectively.
            </p>
            <p>
            Recognizing the technical challenges of lighting, 
            I also did some research to familiarize myself with different techniques. 
            I learned how to manipulate light to direct the viewer's attention to the bag’s most attractive elements. 
            Our shoot was split into two parts:
            </p>
            <h5>1.	Outdoor scenes during the day, where we worked with natural light.</h5>
            <h5>2.	Indoor scenes with a controlled lighting setup.</h5>
            <br />
            {/* ----------------------x------------------------------------ */}

            <h1>Shoot Day:</h1>
            <h3>Day 1 (Outdoor Shoot):</h3>
            <p>
            The outdoor shoot focused on capturing the bag in action, 
            carried by a student with various items like a laptop, shoes, water bottles, and books. 
            Our university campus provided an ideal backdrop, lending authenticity and continuity to the story.
            </p>
            <p>
            We were fortunate to have a sunny day with light clouds—rare for Irish winters. 
            The clouds naturally diffused the sunlight, creating soft, even lighting and eliminating harsh shadows. 
            Interestingly, I was also chosen to act in the video, which added an unexpected layer of complexity to my role. 
            Since I couldn’t manage both acting and lighting simultaneously, 
            we used a body double with a similar skin tone for lighting tests. 
            This dual role was both fun and challenging, pushing me to think on my feet.
            </p>
            <br />
            {/* ----------------------x------------------------------------ */}
            
            <h3>Day 2 (Indoor Shoot):</h3>
            <p>The indoor shoot aimed to create a dramatic spotlight on the bag, 
                set against a black background. We initially attempted a three-point lighting system to enhance the product’s 
                features. However, this setup resulted in harsh lighting, and the camera captured distracting background details.
            </p>
            <p>
            Given the limited time available I had to look for a quick fix and found a white cloth present in the room, 
            I improvised by using the white cloth as a diffuser. Placing a light behind the cloth softened the effect, 
            creating a clean, focused look. For additional emphasis on the product features, 
            I used a portable light wrapped in white fabric, 
            which created a subtle glow on the bag and highlighted areas of focus. 
            This quick thinking saved the shoot, and the entire team was thrilled with the final results.
            </p>
            <br />
            {/* ----------------------x------------------------------------ */}

            <h1>Post-Production:</h1>
            <p>
            In the post-production phase, I collaborated with the editor, 
            providing my feedback on lighting and color grading to ensure that the final video matched the Director’s vision. 
            This step brought everything together, emphasizing the mood and details we had meticulously planned during the shoot.
            </p>
            <br />
            {/* ----------------------x------------------------------------ */}

            <h1>Reflection:</h1>
            <p>
            This project was a perfect blend of learning and problem-solving. 
            As someone with limited experience in video production, 
            I gained valuable insights into the role of lighting in storytelling. 
            Balancing technical challenges, time constraints, 
            and team collaboration taught me how to adapt and improvise under pressure.
            </p>
            <p>
            Looking back, this experience not only strengthened my technical skills but also 
            gave me a deeper appreciation for the creative and logistical efforts behind every frame 
            of a product demo video. It was a fulfilling journey that I am excited to replicate in future projects!
            </p>
            <Link to="/Gallery" className='no-underline'>
              <Button className='primary-button'>
              Click to Watch Video
              </Button>
            </Link>
           
            </Col>
        </Row>
        <br />
        <Row>
            <Col>
                <Image src={img1} thumbnail />
            </Col>
            <Col>
                <Image src={img2} thumbnail />
            </Col>
            
        </Row>
        <br />
        <Row>
            <Col>
                <Image src={img3} thumbnail />
            </Col>
            <Col>
                <Image src={img4} thumbnail />
            </Col>
            
        </Row>
        <br /><br />
        {/* <Row>
            <Col></Col>
            <Col thumbnail={true}>
            <iframe 
            style={{"height":"300px","width":"500px"}} 
            src="https://www.youtube.com/embed/_vJaTqmc09s" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
            </Col>
            <Col></Col>
        <div className="video-box">
          
        </div>
        </Row> */}

    <br />
    
    </Container>

    
    
    </>
    
  );
}
