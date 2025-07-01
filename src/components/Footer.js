import React from 'react';
import { Container } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 fixed-bottom">
      <Container>
        &copy; {new Date().getFullYear()} Football Stars. Tous droits réservés.
      </Container>
    </footer>
  );
}
