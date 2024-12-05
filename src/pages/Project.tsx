import React, { useState } from 'react';
import { Tabs, Tab, Container, Row, Col, Modal } from 'react-bootstrap';
import './Project.css'; // Import the new CSS file
import mob1 from '../assets/Project Images/Mobile Boxing mockup-min.png'
import mob2 from '../assets/Project Images/Mobile Calender mockup-min.png'
import mob3 from '../assets/Project Images/Mobile Cureya app-min.png'
import mob4 from '../assets/Project Images/Mobile Music palyer mockup-min.png'
import mob5 from '../assets/Project Images/Mobile Photography Mockup-min.png'
import mob6 from '../assets/Project Images/Mobile Pizza mockup-min.png'
import mob7 from '../assets/Project Images/Mobile Yoga mockup-min.png'
import mob8 from '../assets/Project Images/Mobile app Mockup-min.png'
import desk1 from '../assets/Project Images/Desktop Bitcon mockup-min.png'
import desk2 from '../assets/Project Images/Desktop Dashboard Mockup-min.png'
import desk3 from '../assets/Project Images/Desktop Finnect mockup-min.png'
import desk4 from '../assets/Project Images/Desktop Group 9multi window mockup-min.png'
import desk5 from '../assets/Project Images/Desktop Lancer Mockup-min.png'
import desk6 from '../assets/Project Images/Desktop dashboard 1 mockup-min.png'


// Interface to define the structure of a project card
// This helps TypeScript understand the expected properties of a project
interface ProjectCardData {
  id: number;        // Unique identifier for the project
  title: string;     // Title of the project
  description: string; // Detailed description of the project
  imageUrl: string;  // URL of the project's image
}

// Individual Project Card Component
// Responsible for rendering a single project card with interactive features
const ProjectCard: React.FC<{ 
  project: ProjectCardData;  // The project data to be displayed
  onMaximize: (project: ProjectCardData) => void  // Function to call when project is clicked
}> = ({ project, onMaximize }) => {
  return (
    // Responsive column with project card
    <Col xs={12} md={4} className="mb-4">
      {/* Project card wrapper with hover effects */}
      <div 
        className="project-card" 
        // When the card is clicked, call the onMaximize function with this project
        onClick={() => onMaximize(project)}
      >
        {/* Project image with fixed height and cover object-fit */}
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="project-image" 
        />
        
        {/* Overlay effect for project title */}
        <div className="project-overlay">
          <p className="project-title">{project.title}</p>
        </div>

      </div>
    </Col>
  );
};

// Main Multi-Tab Component
// Manages the entire project gallery with multiple tabs
const MultiTabComponent: React.FC = () => {
  // State to manage which tab is currently active
  const [key, setKey] = useState<string>('Mobile');
  
  // State to track which project is currently maximized
  const [maximizedProject, setMaximizedProject] = useState<ProjectCardData | null>(null);

  // Sample project data for Mobile tab
  const mobileProjects: ProjectCardData[] = [
    { 
      id: 1, 
      title: "Fitness App Design", 
      description: "Boxing app that let users learn the basics of boxing at their home hassle-free with a follow along video tutorial.", 
      imageUrl: mob1 
    },
    { 
      id: 2, 
      title: "Calendar App Design", 
      description: "A minimalistic calendar app that let users have a quick glance at their upcoming schedule.", 
      imageUrl: mob2
    },
    { 
      id: 3, 
      title: "Mental Health App Design", 
      description: "A Mental Health app for users to track their daily feelings and communicate with a councilor to get guidance.", 
      imageUrl: mob3
    },
    { 
      id: 4, 
      title: "Music Player App Design", 
      description: "A minimalistic music player design.", 
      imageUrl: mob4
    },
    { 
      id: 5, 
      title: "Photography Service App", 
      description: "A photography service application where people can hire photographers according to their needs. Users can filter out based on photographers availability, cost for service, user rating and portfolio.", 
      imageUrl: mob5
    },
    { 
      id: 6, 
      title: "Pizza Delivery App", 
      description: "A Pizza app that provides users to customize their pizza with their choice of toppings and sauces. Users can also select from a verity of chef special combinations from the app.", 
      imageUrl: mob6
    },
    { 
      id: 7, 
      title: "Yoga App Design", 
      description: "A yoga app for beginners to start their journey with simple and short yoga sessions. ", 
      imageUrl: mob7
    },
    { 
      id: 8, 
      title: "Discussion forum Design", 
      description: "A Discussion forum where people can post questions and answer them.", 
      imageUrl: mob8
    },
  ];

  // Sample project data for Desktop tab
  const desktopProjects: ProjectCardData[] = [
    { 
      id: 1, 
      title: "Landing Page Design", 
      description: "Concept design of a website that helps users buy bitcoin using their credit card.", 
      imageUrl: desk1 
    },
    { 
      id: 2, 
      title: "User Dashboard Design", 
      description: "A Comprehensive user dashboard design", 
      imageUrl: desk2 
    },
    { 
      id: 3, 
      title: "Finnect App Design", 
      description: "Concept design for a networking application.", 
      imageUrl: desk3
    },
    { 
      id: 4, 
      title: "Multi Window Website Design", 
      description: "A conceptual multiwindow webapp design", 
      imageUrl: desk4
    },
    { 
      id: 5, 
      title: "Landing page Design", 
      description: "Secondhand car dealer landing page that provides users with the model, make, and rating of the car.", 
      imageUrl: desk5 
    },
    { 
      id: 6, 
      title: "Dashboard Design", 
      description: "Freelance website dashboard that provides information on their monthly earnings, projects, recent transactions, ranking, and information about their peers.", 
      imageUrl: desk6 
    },
  ];

  // Function to maximize a project when its card is clicked
  const maximizeProject = (project: ProjectCardData) => {
    setMaximizedProject(project);
  };

  // Function to close the maximized project view
  const closeMaximizedView = () => {
    setMaximizedProject(null);
  };

  return (
    <Container fluid className="tabs-container">
      {/* Tabs component with centered layout */}
      <Tabs
        id="controlled-tab"
        activeKey={key}
        onSelect={(k) => setKey(k as string)}
        className="mb-3 justify-content-center"
      >
        {/* Mobile Projects Tab */}
        <Tab eventKey="Mobile" title="Mobile">
          <Container>
            <h2 className="text-keft my-4">Mobile Projects</h2>
            <Row>
              {/* Render Mobile project cards */}
              {mobileProjects.map((project) => (
                <ProjectCard 
                  key={project.id}
                  project={project}
                  onMaximize={maximizeProject}
                />
              ))}
            </Row>
          </Container>
        </Tab>
        
        {/* Desktop Projects Tab */}
        <Tab eventKey="Desktop" title="Desktop">
          <Container>
            <h2 className="text-left my-4">Desktop Projects</h2>
            <Row>
              {/* Render Desktop project cards */}
              {desktopProjects.map((project) => (
                <ProjectCard 
                  key={project.id}
                  project={project}
                  onMaximize={maximizeProject}
                />
              ))}
            </Row>
          </Container>
        </Tab>  
      </Tabs>

      {/* Modal for displaying the maximized project details */}
      <Modal 
        show={!!maximizedProject} 
        onHide={closeMaximizedView} 
        centered 
        size="lg"
      >
        {maximizedProject && (
          <>
            {/* Modal header with project title */}
            <Modal.Header closeButton>
              <Modal.Title>{maximizedProject.title}</Modal.Title>
            </Modal.Header>
            
            {/* Modal body with full project image and description */}
            <Modal.Body className="text-center">
              <img 
                src={maximizedProject.imageUrl} 
                alt={maximizedProject.title} 
                className="img-fluid"
              />
              <p className="mt-3">{maximizedProject.description}</p>
            </Modal.Body>
          </>
        )}
      </Modal>
    </Container>
  );
};

export default MultiTabComponent;