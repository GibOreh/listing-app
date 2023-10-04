import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apiGetAppDetail } from '~/apis/app';

function ItemDetail() {
  const { _id } = useParams();
  const [appData, setAppData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
        const data = await apiGetAppDetail(_id);
        setAppData(data.data.appData);
    };

    fetchData();
  }, [_id]);

  return (
    <div>
      <h2>{appData.title}</h2>
      <p>Category: {appData.category}</p>
      <p>Platform: {appData.platform}</p>
    </div>
  );
}

export default ItemDetail;
