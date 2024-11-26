import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { MapPin, Mail, Phone, Printer } from 'lucide-react';
import './Contacts.css';

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
              <h2 className="fs-1 fw-bold mb-4">Contact Us</h2>
              
              <div className="d-flex flex-column gap-3">
                <div className="contact-item">
                  <MapPin size={24} />
                  <div>
                    52, Avenue ve Newyork<br/>
                    221094 Newyork
                  </div>
                </div>
                
                <div className="contact-item">
                  <Mail size={24} />
                  <a href="mailto:hello@loremipsum.com" className="contact-link">
                    hello@loremipsum.com
                  </a>
                </div>
                
                <div className="contact-item">
                  <Phone size={24} />
                  <a href="tel:+3356-1589-2105" className="contact-link">
                    +3356 1589 2105
                  </a>
                </div>
                
                <div className="contact-item">
                  <Printer size={24} />
                  <span>+3356 1589 2100</span>
                </div>
              </div>
            </div>
          </Col>

          <Col md={6}>
            <div className="contact-card contact-form p-4">
              <h2 className="fs-1 fw-bold text-dark mb-3">Get in Touch</h2>
              <p className="text-muted mb-4">Feel free to drop us a line below!</p>
              
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
                  variant="danger"
                  className="submit-button px-4 py-2 rounded-pill"
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