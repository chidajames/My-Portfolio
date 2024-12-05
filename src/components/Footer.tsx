import { Container, Row, Col } from 'react-bootstrap';
import { Github, Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    {/* First Column */}
                    <Col xs={12} md={4} className="footer-column text-start">
                        <h3 className="footer-title">Chidanand Gurudutt</h3>
                        <div className="social-links">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <Github size={24} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <Linkedin size={24} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <Twitter size={24} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <Instagram size={24} />
                            </a>
                        </div>
                        
                        <div className="contact-details">
                            
                            <div className="contact-item">
                                <Mail size={18} className="contact-icon" />    
                                <a href="24171441@studentmail.ul.ie" className="contact-link">
                                    24171441@studentmail.ul.ie
                                </a>
                                
                            </div>
                            <div className="contact-item">
                                <Phone size={18} className="contact-icon" />    
                                <a href="tel:+353892027330" className="contact-link">
                                    +353 892027330
                                </a>
                                
                            </div>
                            <div className="contact-item">
                                <MapPin size={18} className="contact-icon" />        
                                <span className="contact-text">Limerick, Ireland</span>
                                
                            </div>
                        </div>
                    </Col>

                    {/* Second Column */}
                    <Col xs={12} md={4} className="footer-column text-center">
                        
                    </Col>

                    {/* Third Column */}
                    <Col xs={12} md={4} className="footer-column text-end">
                    <h5 className="footer-section-title">Quick Links</h5>
                        <div className="quick-links">
                            <a href="#" className="footer-link">Home</a>
                            <a href="#aboutme" className="footer-link">AboutMe</a>
                            <a href="#Project" className="footer-link">Projects</a>
                            <a href="#Blog" className="footer-link">Blog</a>
                            <a href="#contact" className="footer-link">ContactMe</a>
                        </div>
                    </Col>
                </Row>

                <hr/>

                <Row className="justify-content-center align-items-center">
                    <Col xs="auto">
                        <p className="footer-copyright">
                            © {new Date().getFullYear()} Chidanand Gurdutt. All rights reserved.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;