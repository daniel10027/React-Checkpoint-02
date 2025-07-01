import React from 'react';
import usePlayersApi from './hooks/usePlayersApi';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import Player from './Player';
import PlayerModal from './PlayerModal';

export default function PlayersList() {
  const { players, loading } = usePlayersApi();
  const [selectedPlayer, setSelectedPlayer] = React.useState(null);

  if (loading) {
    return <div className="text-center"><Spinner animation="border" /></div>;
  }

  return (
    <Container>
      <Row className="justify-content-center">
        {players.map((player, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <Player {...player} onClick={() => setSelectedPlayer(player)} />
          </Col>
        ))}
      </Row>
      <PlayerModal
        show={selectedPlayer !== null}
        player={selectedPlayer}
        handleClose={() => setSelectedPlayer(null)}
      />
    </Container>
  );
}
