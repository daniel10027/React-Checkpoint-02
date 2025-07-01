import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#">⚽ Football Stars</Navbar.Brand>
      </Container>
    </Navbar>
  );
}
