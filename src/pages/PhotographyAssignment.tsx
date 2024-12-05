import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import passion from "../assets/Passion-photo-thumbnail.jpg";
import headshot from "../assets/headshot-thumnail.jpg";
import aesthetic from "../assets/aesthetic-dramatic-shot-thumb.jpg";

interface ExpandableImageProps {
  src: string;
  alt: string;
}

function ExpandableImage({ src, alt }: ExpandableImageProps) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Image 
        src={src} 
        alt={alt} 
        thumbnail 
        fluid 
        onClick={handleShow} 
        style={{ cursor: 'pointer' }} 
      />

      <Modal 
        show={show} 
        onHide={handleClose} 
        centered 
        size="xl"
      >
        <Modal.Body className="text-center">
          <Image 
            src={src} 
            alt={alt} 
            fluid 
            style={{ maxHeight: '90vh', maxWidth: '100%' }} 
          />
        </Modal.Body>
      </Modal>
    </>
  );
}

function Aestheticphoto() {
    return (
        <Container>
        <Row>
            <Col md={4} >
            <br /><br /><br /><br />
            <ExpandableImage src={aesthetic} alt="Aesthetic Shot" />
            </Col>    

            <Col>
            <h1>Aesthetic Photo</h1>
            <h5>Aperture (f/1.8) | ISO 20 | Shutter Speed (1/390 seconds) | Mobile Focal Length (4mm)</h5>
            <p>I wanted to capture the glory of years-old building nested in the heart of the bustling streets of Dublin, next to river Liffey, whispering stories, stories of the past demanding to be heard.</p>
            <p>I opted for the wide-angle lens on my phone to capture this magnificent building. 
                With the smaller f-stop, more light was allowed to fall on the sensor. 
                The f/1.8 aperture allowed for a greater intake of light, which paired beautifully with the golden hour's warm tones. 
                With ample natural light, I kept the ISO at a minimal 20 to maintain clarity and avoid noise. 
                Due to the movement of vehicles on the street, I used a fast shutter speed of 1/390 sec to freeze the motion and reduce any motion blur in the image. 
                Wide-angle lenses often introduce distortion at the edges, so I was mindful to leave space around the subject to retain a natural, undistorted composition.</p>
            <p>
                In post-processing, I wanted to preserve the natural colors captured in the image, so I didn't make significant adjustments to the subject. 
                To add some drama to the scene, I highlighted the clouds by adjusting the shadows. 
                I also adjusted the teal color of the dome to make it stand out against the background, as it appeared a bit dull in the original image.
            </p>    
            </Col>
        </Row>
        </Container>
    );
}

function Passionphoto() {
    return (
        <Container>
        <Row>
            <Col className="text-end">
            <h1>Passion photography</h1>
            <h5>Aperture (f/1.65) | ISO 640 | Shutter Speed (1/50 seconds) | Mobile Focal Length (6.19mm)</h5>
            <p>This image was shot in a dimly lit indoor space. 
                So, I opted to use a mobile camera with an aperture of f/1.65 as it is capable of allowing more light to fall on the sensor. 
                Because of the wide aperture a natural and pleasing bokeh effect was produced that subtly blurs the foreground while keeping the background in focus. 
                The shutter speed was set to 1/15 sec to allow more light to fall on the image. 
                I couldn't lower the shutter speed furthermore as it was a handheld shot, I tried lowering the shutter speed but the images taken were blurred because it was not steadily held. 
                Because of this I increased the ISO and played around a bit to finally settled with ISO 640 which produced a balanced shot.
            </p>
            <p>In post-processing, I cropped the original ultra-wide shot to recompose the image, 
                ensuring the subject was positioned at an intersection point following the rule of thirds. 
                I emphasized the colors of the basketball to make it pop against a darker background, 
                which removed distractions and guided the viewer's eye. The lines on the basketball serve as leading elements, 
                directing attention from the ball toward the subject, 
                adding a subtle visual path for the viewer to follow through in the image.
            </p>
            </Col>
            
            <Col md={4} >
            <ExpandableImage src={passion} alt="Passion Photography" />
            </Col>  
        </Row>
        </Container>
    );
}

function Facephoto() {
    return (
        <Container>
        <Row>
            <Col md={4} >
            <br />
            <ExpandableImage src={headshot} alt="Headshot" />
            </Col>    

            <Col>
            <h1>Headshot</h1>
            <h5>Aperture (f/2.8) | ISO 100 | Shutter Speed (1/15 seconds) | Focal Length (18mm)</h5>
            <p>For this shot, I used the Sony ZV-1 at f/2.8, which allowed for a shallow depth of field and brought in ample light to capture intricate details.
                 I set the focal length to 18mm, which gave a natural perspective on the subject without introducing any distortion.
            </p>
            <p>
            I was working in a dimly lit room with two ring lights which had to be kept at medium intensity as it was overexposing the image, 
            I mounted the camera on a tripod to avoid any shake. This setup allowed me to drop the shutter speed to 1/15 sec, maximizing light intake and enhancing detail capture without blur. 
            Because the shutter was open for a longer period, I kept the ISO at 100 to reduce the sensitivity of the sensor to capture a clear and noise-free image. 
            After the shoot when I came back home and saw the images, I got to know that I had kept the ND filter on while capturing the image, 
            and because of that my shutter had to be opened for a longer period to allow more light. 
            </p>
            <p>
            In post-processing, I used Snapseed to refine my skin tone and remove minor imperfections. 
            I then used Adobe Lightroom to add a dual-tone effect to the background, 
            creating depth through two linear gradient masks to emphasize the subject further. 
            Since it was a straightforward headshot, I cropped the frame just below the shoulders to keep the focus entirely on the face, 
            enhancing the image's simplicity and intimacy. 
            </p>
            </Col>
        </Row>
        <br /><br /><br />
        </Container>
    );
}

export default function PhotographyAssignment() {
  return (
    <>
    <Container>
    <br />
    <h1>Photography Assignment</h1>
    <br /><br />
        <Row>
            <Aestheticphoto/>
        </Row>
            <br /><br /><br />
        <Row>
            <Passionphoto/>
        </Row>
            <br /><br /><br />
        <Row>
            <Facephoto/>
        </Row>
    </Container>
    </>
  );
}