import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apiGetGames } from '~/apis/game';
import GameItem from '~/pages/GameItem/GameItem'
import { Container, Row, Col, Button } from 'react-bootstrap';

function CategoryDetail() {
  const { categoryName } = useParams();
  const [gamesInCategory, setGamesInCategory] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = gamesInCategory.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    const fetchData = async () => {
      const response = await apiGetGames({ category: categoryName });
      setGamesInCategory(response.data.games);
    };

    fetchData();
  }, [categoryName]);

  return (
    <Container>
      <h5>Category Name: {categoryName}</h5>
        <Row>
        {gamesInCategory.map((el, index) => (
                    <Col key={index} lg={4} xs={12}>
                        <GameItem key={el.id} itemData={el} />
                    </Col>
                ))}
        </Row>
        <Row>
            <Col lg={12}>
                <div className="pagination-container">
                        {Array.from({ length: Math.ceil(gamesInCategory.length / itemsPerPage) }).map((_, index) => (
                            <Button
                                key={index}
                                onClick={() => paginate(index + 1)}
                                className={`mr-2 ${currentPage === index + 1 ? 'active' : ''}`}
                            >
                                {index + 1}
                            </Button>
                        ))}
                </div>
            </Col>
        </Row>
    </Container>
  );
}

export default CategoryDetail;
