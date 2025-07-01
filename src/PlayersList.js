import React, { useState } from 'react';
import playersData from './players';
import Player from './Player';
import PlayerModal from './PlayerModal';
import { Container, Form, Row, Col } from 'react-bootstrap';

export default function PlayersList() {
  const [filter, setFilter] = useState('');
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleClick = (player) => {
    setSelectedPlayer(player);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const uniqueFilters = [...new Set(playersData.map(p => `${p.team} - ${p.nationality}`))];

  const filteredPlayers = filter
    ? playersData.filter(
        p => `${p.team} - ${p.nationality}`.toLowerCase() === filter.toLowerCase()
      )
    : playersData;

  return (
    <Container>
      <Form.Group as={Col} md="6" className="mx-auto mb-4">
        <Form.Label>Filtrer par équipe / nationalité</Form.Label>
        <Form.Select value={filter} onChange={e => setFilter(e.target.value)}>
          <option value="">Tous les joueurs</option>
          {uniqueFilters.map((f, i) => (
            <option key={i} value={f}>{f}</option>
          ))}
        </Form.Select>
      </Form.Group>

      <Row className="justify-content-center">
        {filteredPlayers.map((player, i) => (
          <Col key={i} xs={12} sm={6} md={4} lg={3}>
            <Player {...player} onClick={() => handleClick(player)} />
          </Col>
        ))}
      </Row>

      <PlayerModal show={showModal} handleClose={handleClose} player={selectedPlayer} />
    </Container>
  );
}
