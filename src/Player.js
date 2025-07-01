import React from 'react';
import { Card } from 'react-bootstrap';
import 'animate.css';

export default function Player({ name, team, nationality, jerseyNumber, age, image, onClick }) {
  return (
    <Card
      className="m-3 shadow card-custom animate__animated animate__fadeIn"
      style={{ width: '18rem', cursor: 'pointer' }}
      onClick={onClick}
    >
      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '10px' }}>
        <img src={image} alt={name} height="200" style={{ borderRadius: '10px' }} />
      </div>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text><strong>Team:</strong> {team}</Card.Text>
        <Card.Text><strong>Nationality:</strong> {nationality}</Card.Text>
      </Card.Body>
    </Card>
  );
}
