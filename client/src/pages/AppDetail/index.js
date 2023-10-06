import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apiGetAppDetail } from '~/apis/app';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles.css'; 

function AppDetail() {
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
    <Container className="bg-gray">
      <Row>
        <Col lg={{ span: 8, offset: 2 }}>
          <Container className="app-header text-center">
          <Row>
            <Col lg={2} xs={3} className="text-center">
              <div className="app-header">
                <img src={appData.image} alt={appData.title} />
              </div>
            </Col>
            <Col lg={10} xs={9}>
              <div className="app-header text-left">
                <h4>{appData.title} {appData.modFeatures}</h4>
                <p>{appData.category}</p>
              </div>
            </Col>  
          </Row>
          </Container>
          <Button variant="primary" href={appData.downloadLink} target="_blank" className="full-width-button my-4">Download</Button>
          <Container className="app-info mb-4">
            <Row>
              <Col className="app-info-item mt-4">Name</Col>
              <Col lg={6} xs={9} className="app-info-data mt-4">{appData.title}</Col>
              <Col lg={6} xs={3} className="app-info-item mt-4">Category</Col>
              <Col lg={6} xs={9} className="app-info-data mt-4"><Link to={`/category/${appData.category}`} className="link-without-underline">{appData.category}</Link></Col>
              <Col lg={6} xs={3} className="app-info-item mt-4">Version</Col>
              <Col lg={6} xs={9} className="app-info-data mt-4">{appData.version}</Col>
              <Col lg={6} xs={3} className="app-info-item mt-4">MOD</Col>
              <Col lg={6} xs={9} className="app-info-data red-text mt-4">{appData.modFeatures}</Col>
              <Col lg={6} xs={3} className="app-info-item mt-4">Size</Col>
              <Col lg={6} xs={9} className="app-info-data mt-4">{appData.size}</Col>
              <Col lg={6} xs={3} className="app-info-item mt-4">Platform</Col>
              <Col lg={6} xs={9} className="app-info-data mt-4">{appData.platform}</Col>
              <Col lg={6} xs={3} className="app-info-item mt-4">Update</Col>
              <Col lg={6} xs={9} className="app-info-data mt-4 mb-4">{appData.releaseDate}</Col>
            </Row>
          </Container>
          <div className="app-description">
            <p>{appData.description}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AppDetail;
