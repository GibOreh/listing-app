import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apiGetGameDetail } from '~/apis/game';

function ItemDetail() {
  const { _id } = useParams();
  const [gameData, setGameData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
        const data = await apiGetGameDetail(_id);
        setGameData(data.data.gameData);
    };

    fetchData();
  }, [_id]);

  return (
    <div>
      <h2>{gameData.title}</h2>
      <p>Category: {gameData.category}</p>
      <p>Platform: {gameData.platform}</p>
    </div>
  );
}

export default ItemDetail;
