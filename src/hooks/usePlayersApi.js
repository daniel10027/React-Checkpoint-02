import { useState, useEffect } from 'react';
import axios from 'axios';

const usePlayersApi = () => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiKey = 'ef34e57fdf086bc7eaf4d189e2fe33ff'; 

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await axios.get('https://v3.football.api-sports.io/players?league=39&season=2023&page=1', {
          headers: {
            'x-apisports-key': apiKey
          }
        });

        const data = response.data.response;
        const transformed = data.map(p => ({
          name: `${p.player.firstname} ${p.player.lastname}`,
          team: p.statistics[0]?.team?.name || 'Unknown',
          nationality: p.player.nationality,
          jerseyNumber: p.statistics[0]?.games?.number || 'N/A',
          age: p.player.age,
          image: p.player.photo
        }));

        setPlayers(transformed);
        setLoading(false);
      } catch (error) {
        console.error("Erreur API :", error);
        setLoading(false);
      }
    };

    fetchPlayers();
  }, []);

  return { players, loading };
};

export default usePlayersApi;
