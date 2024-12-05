import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../Store/hooks';
import { likeBlog, dislikeBlog } from '../Store/blogSlice';
import photo from '../assets/photography.jpg';
import video from '../assets/videography.jpg';
import './Blog.css';
import '../index.css';

type BlogCategory = 'photography' | 'videography';

interface BlogCardData {
  id: BlogCategory;
  title: string;
  description: string;
  imageUrl: string;
  path: string;
}

const BlogCard: React.FC<{ blog: BlogCardData }> = ({ blog }) => {
  const dispatch = useAppDispatch();
  const { likes, dislikes } = useAppSelector(state => state.blog[blog.id]);

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(likeBlog(blog.id as BlogCategory));
  };

  const handleDislike = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(dislikeBlog(blog.id as BlogCategory));
  };

  return (
    <Col xs={12} md={6} className="mb-4">
      <Card>
        <Card.Img variant="top" src={blog.imageUrl} />
        <Card.Body>
          <Card.Title>{blog.title}</Card.Title>
          <p style={{color:'#A35A324A',fontSize:'14px'}}>Author : Chidanand</p>
          <Card.Text>{blog.description}</Card.Text>
          <div className="d-flex justify-content-between align-items-center">
            <Link to={blog.path}>
              <Button variant="primary" className='primary-button'>Read More</Button>
            </Link>
            <div className="d-flex">
              <Button 
                variant="outline-success" 
                className="me-2 d-flex align-items-center reaction"
                onClick={handleLike}
              >
                <ThumbsUp className="me-1" size={20} /> 
                {likes}
              </Button>
              <Button 
                variant="outline-danger" 
                className="d-flex align-items-center reaction"
                onClick={handleDislike}
              >
                <ThumbsDown className="me-1" size={20} /> 
                {dislikes}
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default function Blog() {
  const blogs: BlogCardData[] = [
    { 
      id: 'photography', 
      title: "Photography Assignment", 
      description: "A fun activity where we had to capture three well composed images on a given topic.", 
      imageUrl: photo,
      path: "/Blog/PhotographyAssignment"
    },
    { 
      id: 'videography', 
      title: "Videography Assignment", 
      description: "A fun activity where we had to conceptualize and produce a small product video as a team.", 
      imageUrl: video,
      path: "/Blog/VideoAssignment"
    }
  ];

  return (
    <Container fluid className="tabs-container">
      <Container>
        <h1 className="my-4">Blogs</h1>
        <Row>
          {blogs.map((blog) => (
            <BlogCard 
              key={blog.id}
              blog={blog}
            />
          ))}
        </Row>
      </Container>
    </Container>
  );
}