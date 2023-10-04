import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apiGetGameDetail } from '~/apis/game';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles.css'; 

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
    <Container className="mt-4">
      <Row>
        <Col lg={{ span: 8, offset: 2 }}>
          <div className="game-header text-center">
            <img src={gameData.image} alt={gameData.title} />
            <h2>{gameData.title} {gameData.modFeatures}</h2>
            <h2>{gameData.category}</h2>
            <Button variant="primary" href={gameData.downloadLink} target="_blank" className="full-width-button my-4">Download</Button>
          </div>
          <Container className="game-info mb-4">
            <Row>
              <Col className="game-info-item mt-4">Name</Col>
              <Col lg={6} xs={9} className="game-info-data mt-4">{gameData.title}</Col>
              <Col lg={6} xs={3} className="game-info-item mt-4">Category</Col>
              <Col lg={6} xs={9} className="game-info-data mt-4"><Link to={`/category/${gameData.category}`} className="link-without-underline">{gameData.category}</Link></Col>
              <Col lg={6} xs={3} className="game-info-item mt-4">Version</Col>
              <Col lg={6} xs={9} className="game-info-data mt-4">{gameData.version}</Col>
              <Col lg={6} xs={3} className="game-info-item mt-4">MOD</Col>
              <Col lg={6} xs={9} className="game-info-data red-text mt-4">{gameData.modFeatures}</Col>
              <Col lg={6} xs={3} className="game-info-item mt-4">Size</Col>
              <Col lg={6} xs={9} className="game-info-data mt-4">{gameData.size}</Col>
              <Col lg={6} xs={3} className="game-info-item mt-4">Platform</Col>
              <Col lg={6} xs={9} className="game-info-data mt-4">{gameData.platform}</Col>
              <Col lg={6} xs={3} className="game-info-item mt-4">Update</Col>
              <Col lg={6} xs={9} className="game-info-data mt-4 mb-4">{gameData.releaseDate}</Col>
            </Row>
          </Container>
          <div className="game-description">
            <p>{gameData.description}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ItemDetail;
