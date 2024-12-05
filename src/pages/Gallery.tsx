import React, { useState } from 'react';
import { Tabs, Tab, Container, Row, Col, Modal } from 'react-bootstrap';
import './Gallery.css';
import './Project.css';
import Img1 from '../assets/Img_Gal_1.jpeg';
import Img2 from '../assets/Img_Gal_2.jpeg';
import Img3 from '../assets/Img_Gal_3.jpeg';
import Img4 from '../assets/Img_Gal_4.jpeg';
import Img5 from '../assets/Img_Gal_5.jpeg';
import Img7 from '../assets/Img_Gal_7.jpeg';
import VideoFile from '../assets/Product-Demo-Video.webm';
import VideoCover from '../assets/videography cover.png'

// Define the structure of an image/video object
interface MediaData {
  id: number;        // Unique identifier 
  coverUrl: string;  // URL of the video cover/thumbnail
  videoUrl: string;  // URL of the actual video file
  title: string;     // Title/name of the media
  description: string; // Detailed description
  type: 'image' | 'video'; // Type of media
}

// Individual Media Item Component
const MediaItem: React.FC<{ 
  media: MediaData;  // The media data to be displayed
  onMaximize: (media: MediaData) => void  // Function to call when media is clicked
}> = ({ media, onMaximize }) => {
  return (
    // Responsive column with media card
    <Col xs={12} md={4} className="mb-4">
      {/* Media card wrapper with hover effects */}
      <div 
        className="project-card" 
        // When the card is clicked, call the onMaximize function with this media
        onClick={() => onMaximize(media)}
      >
        {/* Media with fixed height and cover object-fit */}
        <img 
          src={media.type === 'video' ? media.coverUrl : media.videoUrl} 
          alt={media.title} 
          className="project-image" 
        />
        
        {/* Overlay effect for media title */}
        <div className="project-overlay">
          <p className="project-title">{media.title}</p>
        </div>
      </div>
    </Col>
  );
};

// Main Gallery Component with Tabs
const MultiTabGallery: React.FC = () => {
  // State to manage which tab is currently active
  const [key, setKey] = useState<string>('Images');
  
  // State to track which media is currently maximized
  const [maximizedMedia, setMaximizedMedia] = useState<MediaData | null>(null);

  // Sample image data 
  const imageProjects: MediaData[] = [
    { 
      id: 1, 
      title: "Green Abundance", 
      description: "Lush green leaves of a tropical plant, showcasing the vibrant colors and textures of nature.", 
      videoUrl: Img1,
      coverUrl: Img1,
      type: 'image'
    },
    { 
      id: 2, 
      title: "Academic Sanctuary", 
      description: "A photograph taken from a low angle, partially obscured by lush green foliage, reveals a grand, multi-story building with neoclassical architecture.", 
      videoUrl: Img2,
      coverUrl: Img2,
      type: 'image'
    },
    { 
      id: 3, 
      title: "Solitary Blossom", 
      description: "A single, delicate white flower with a vibrant yellow center blooms amidst lush, dark green foliage. The soft focus on the background emphasizes the flower's delicate beauty and the vibrant contrast of colors.", 
      videoUrl: Img3,
      coverUrl: Img3,
      type: 'image'
    },
    { 
      id: 4, 
      title: "Forest Path", 
      description: "A tranquil dirt path winds through a lush green forest, creating a natural tunnel of trees. Two deer-like animals are visible in the distance, adding a sense of serenity and wildness to the scene.", 
      videoUrl: Img4,
      coverUrl: Img4,
      type: 'image'
    },
    { 
      id: 5, 
      title: "Plumeria Cluster", 
      description: "A close-up shot captures a cluster of Plumeria flowers, their pristine white petals delicately contrasted by vibrant yellow centers.", 
      videoUrl: Img5,
      coverUrl: Img5,
      type: 'image'
    },
    { 
      id: 6, 
      title: "Stone Corridor", 
      description: "The photograph depicts a long, narrow corridor constructed of stone.", 
      videoUrl: Img7,
      coverUrl: Img7,
      type: 'image'
    }
  ];

  // Sample video data 
  const videoProjects: MediaData[] = [
    { 
      id: 1, 
      title: "Venture Bags Product Video", 
      description: "A short product video demonstrating the features of the product", 
      coverUrl: VideoCover, // Video thumbnail/cover image
      videoUrl: VideoFile, // Actual video file
      type: 'video'
    }
  ];

  // Function to maximize a media item when its card is clicked
  const maximizeMedia = (media: MediaData) => {
    setMaximizedMedia(media);
  };

  // Function to close the maximized media view
  const closeMaximizedView = () => {
    setMaximizedMedia(null);
  };

  return (
    <Container fluid className="tabs-container">
      {/* Tabs component with centered layout */}
      <Tabs
        id="controlled-tab-gallery"
        activeKey={key}
        onSelect={(k) => setKey(k as string)}
        className="mb-3 justify-content-center"
      >
        {/* Images Tab */}
        <Tab eventKey="Images" title="Images">
          <Container>
            <h2 className="my-4">Image Gallery</h2>
            <Row>
              {/* Render Image project cards */}
              {imageProjects.map((image) => (
                <MediaItem 
                  key={image.id}
                  media={image}
                  onMaximize={maximizeMedia}
                />
              ))}
            </Row>
          </Container>
        </Tab>
        
        {/* Videos Tab */}
        <Tab eventKey="Videos" title="Videos">
          <Container>
            <h2 className="my-4">Video Gallery</h2>
            <Row>
              {/* Render Video project cards */}
              {videoProjects.map((video) => (
                <MediaItem 
                  key={video.id}
                  media={video}
                  onMaximize={maximizeMedia}
                />
              ))}
            </Row>
          </Container>
        </Tab>
      </Tabs>

      {/* Modal for displaying the maximized media details */}
      <Modal 
        show={!!maximizedMedia} 
        onHide={closeMaximizedView} 
        centered 
        size="lg"
      >
        {maximizedMedia && (
          <>
            {/* Modal header with media title */}
            <Modal.Header closeButton>
              <Modal.Title>{maximizedMedia.title}</Modal.Title>
            </Modal.Header>
            
            {/* Modal body with full media image or video and description */}
            <Modal.Body className="text-center">
              {maximizedMedia.type === 'image' ? (
                <img 
                  src={maximizedMedia.videoUrl} 
                  alt={maximizedMedia.title} 
                  className="img-fluid"
                />
              ) : (
                <video 
                  controls 
                  autoPlay 
                  className="img-fluid"
                  style={{ maxWidth: '100%', height: 'auto' }}
                >
                  <source src={maximizedMedia.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              <p className="mt-3">{maximizedMedia.description}</p>
            </Modal.Body>
          </>
        )}
      </Modal>
    </Container>
  );
};

export default MultiTabGallery;