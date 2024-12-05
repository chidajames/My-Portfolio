import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import { FileDown, Code, Figma, Github, Linkedin, Mail,Telescope,Clapperboard,ChartPie,FileUser } from 'lucide-react';
import './AboutMe.css';
import '../index.css'
import profilimage from '../assets/headshot-thumnail.jpg';
import flipphoto from '../assets/Passion-photo-thumbnail.jpg'
import resumePDF from '../assets/Resume.pdf';

// Skill Card Data
const skillCardData = [
  {
    icon: Code,
    title: "Development",
    description: "Crafting seamless digital experiences through clean, efficient code, transforming design ideas into interactive realities."
  },
  {
    icon: Telescope,
    title: "Design",
    description: "Merging creativity and functionality to create visually engaging and user-centered solutions."
  },
  {
    icon: Figma,
    title: "Figma",
    description: "Leveraging the power of Figma to prototype, collaborate, and refine intuitive designs that bring concepts to life."
  },
  {
    icon: ChartPie ,
    title: "Data Visualization",
    description: "Turning complex data into compelling visual stories that inform, inspire, and drive decision-making."
  },
  {
    icon: Clapperboard,
    title: "UX/UI",
    description: "Delivering thoughtful user experiences and intuitive interfaces that prioritize accessibility, usability, and delight."
  },
  {
    icon: Figma,
    title: "Innovation",
    description: "Pioneering unique solutions that challenge conventions, blending creativity and technology to shape the future of interaction design."
  }
];

const AboutMe = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showPDFModal, setShowPDFModal] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.setAttribute('download', 'Chidanand_Resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewPDF = () => {
    setShowPDFModal(true);
  };

  const SkillCardReel = () => {
    return (
      <div className="skill-card-reel-container">
        <div className="skill-card-reel">
          {[...skillCardData, ...skillCardData].map((skill, index) => (
            <SkillCard 
              key={index}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </div>
      </div>
    );
  };

  const SkillCard = ({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) => (
    <div className="skill-card-reel-item">
      <div className="skill-card h-100 text-center p-3">
        <Icon size={32} color="#A35A32" className="text-primary mb-3" />
        <h5 className='secondary-text'>{title}</h5>
        <p className="secondary-text">{description}</p>
      </div>
    </div>
  );

  const SocialLink = ({ href, icon: Icon }: { href: string; icon: React.ElementType }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="social-icon secondary-text"
      style={{ fontSize: '1.5rem' }}
      
    >
      <Icon size={24} color="#A35A32" />
    </a>
  );

  return (
    <Container className="py-4 px-4">
      <Row className="align-items-center my-4 px-5">
        <Col md={5} className="text-center slide-in-right">
          <div 
            className={`profile-image-container ${isFlipped ? 'flipped' : ''}`}
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
          >
            <img
              src={profilimage}
              alt="Profile Front"
              className="profile-image front img-fluid rounded-circle"
              style={{ maxWidth: '300px', height: 'auto', objectFit: 'cover' }}
            />
            <img
              src={flipphoto}
              alt="Profile Back"
              className="profile-image back img-fluid rounded-circle"
              style={{ maxWidth: '300px', height: 'auto', objectFit: 'cover' }}
            />
          </div>
          <br />
          <div className="d-flex justify-content-center gap-3 mb-4">
            <SocialLink href="https://github.com/chidajames" icon={Github} />
            <SocialLink href="https://www.linkedin.com/in/chidanand-g-010a7b15a/" icon={Linkedin} />
            <SocialLink href="mailto:24171441@studentmail.ul.ie" icon={Mail} />
          </div>
        </Col>

        <Col md={7} className="fade-in-up">
          <h1 className="mb-3" style={{'fontWeight':'1000'}}>CHIDANAND GURUDUTT</h1>
          <h5 className="mb-4">Interaction and Experience Design Student</h5>
          <p className="mb-2">Hello!</p>
          <p className="mb-3">
            I'm an Interaction and Experience Design student from Bangalore, India, 
            with a passion for blending creativity and technology. 
            My journey has led me to become a hands-on DIY enthusiast, 
            where my attachment to technology fuels my drive to create innovative, user-centered solutions. 
            I thrive on solving complex problems, bringing together design and functionality to craft meaningful experiences.
          </p>
          <p className="mb-3">
            Outside the digital realm, you can often find me on the basketball court or exploring local food joints. 
            Whether I'm coding, brainstorming design ideas, or indulging in some street food, 
            I'm all about embracing new experiences and challenges. 
          </p>
          
          <div className="d-flex gap-2 mb-4">
            <Button 
             
              size="lg" 
              className="download-btn d-inline-flex align-items-center gap-2 primary-button"
              onClick={handleDownload}
            >
              <FileDown size={20} />
              Download Resume
            </Button>
            <Button 
            
              size="lg" 
              className="view-btn d-inline-flex align-items-center gap-2 secondary-button"
              onClick={handleViewPDF}
            >
              <FileUser size={20} />
              View Resume
            </Button>
          </div>
        </Col>
      </Row>
      <br />
      <div className="px-5 mb-5">
        <h3 className="text-center mb-4">My Skills</h3>
        <SkillCardReel />
      </div>

      {/* PDF Viewer Modal */}
      <Modal 
        show={showPDFModal} 
        onHide={() => setShowPDFModal(false)}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Resume Preview</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ width: '100%', height: '600px' }}>
            <object 
              data={resumePDF} 
              type="application/pdf" 
              width="100%" 
              height="100%"
            >
              <p>Your browser doesn't support PDF viewing. 
                <a href={resumePDF} download>Download the PDF</a> instead.</p>
            </object>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowPDFModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleDownload}>
            Download PDF
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AboutMe;