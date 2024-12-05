import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { MapPin, Mail, Phone, Linkedin,Github } from 'lucide-react';
import './Contacts.css';
import '../index.css'

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Container fluid className="contact-container">
      <Container className="py-5">
        <Row className="g-4">
          <Col md={6}>
            <div className="contact-card contact-info p-4">
              <h2 className="fs-1 fw-bold mb-4">Connect with me</h2>
              
              <div className="d-flex flex-column gap-3">
                <div className="contact-item">
                  <MapPin size={24} />
                  <div>
                    Thomond Village, Castletroy<br/>
                    Limerick, Ireland.
                  </div>
                </div>
                
                <div className="contact-item" >
                  <Mail size={24} />
                  <a href="mailto:24171441@studentmail.ul.ie" style={{color:'white'}}>
                  24171441@studentmail.ul.ie
                  </a>
                </div>
                
                <div className="contact-item">
                  <Phone size={24} />
                  <a href="tel:+3356-1589-2105" style={{color:'white'}}>
                    +3356 1589 2105
                  </a>
                </div>

               

                <div className="contact-item">
                  <Linkedin size={24} />
                  <a href="https://www.linkedin.com/in/chidanand-g-010a7b15a/" style={{color:'white'}}>
                    Chidanand G
                  </a>
                </div>

                <div className="contact-item">
                  <Github size={24} />
                  <a href="https://github.com/chidajames" style={{color:'white'}}>
                    Chidajames
                  </a>
                </div>
              </div>
            </div>
          </Col>

          <Col md={6}>
            <div className="contact-card contact-form p-4">
              <h2 className="fs-1 fw-bold mb-3">Drop In!!</h2>
              <p className="mb-4">Drop your details below to get in touch</p>
              
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                  />
                </Form.Group>
                
                <Form.Group className="mb-4">
                  <Form.Control
                    as="textarea"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here..."
                    rows={4}
                    required
                  />
                </Form.Group>
                
                <Button
                  type="submit"
                  className="primary-button"
                >
                  SEND
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Contact;