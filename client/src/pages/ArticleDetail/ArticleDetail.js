import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apiGetArticleDetail } from '~/apis/article';
import { Container, Row, Col} from 'react-bootstrap';
import './styles.css'; 

function ArticleDetail() {
  const { _id } = useParams();
  const [articleData, setArticleData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await apiGetArticleDetail(_id);
      setArticleData(data.data.articleData);
    };

    fetchData();
  }, [_id]);

  return (
    <Container>
      <Row>
        <Col lg={{ span: 8, offset: 2 }}>
         <h4>{articleData.title}</h4>
         <p>{articleData.description}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default ArticleDetail;
