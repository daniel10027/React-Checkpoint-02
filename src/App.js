import React from 'react';
import './App.css';
import PlayersList from './PlayersList';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <div className="overlay">
        <h1 className="text-center mt-4 mb-5">🌍 Nos Joueurs Internationaux</h1>
        <PlayersList />
      </div>
      <Footer />
    </>
  );
}

export default App;
