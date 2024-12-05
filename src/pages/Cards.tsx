import React from "react";

interface CardProps {
  image: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ image, title, description }) => {
  return (
    <div style={cardStyles}>
      <img src={image} alt={title} style={imageStyles} />
      <h2 style={titleStyles}>{title}</h2>
      <p style={descriptionStyles}>{description}</p>
    </div>
  );
};

// Define styles with correct types
const cardStyles: React.CSSProperties = {
  border: "1px solid #ccc",
  borderRadius: "8px",
  width: "300px",
  padding: "16px",
  textAlign: "center",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  margin: "10px"
};

const imageStyles: React.CSSProperties = {
  width: "100%",
  height: "auto",
  borderRadius: "4px"
};

const titleStyles: React.CSSProperties = {
  fontSize: "18px",
  margin: "12px 0"
};

const descriptionStyles: React.CSSProperties = {
  color: "#555"
};

export default Card;
