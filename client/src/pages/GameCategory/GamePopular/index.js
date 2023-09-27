import React, { useState, useEffect  } from 'react';
import './styles.css';
import { apiGetGames } from '~/apis/game';
import Item from '../../Item';
import { Container, Row, Col, Button } from 'react-bootstrap';

function GamePopular() {
        const [popular, setPopular] = useState([]);
        const [currentPage, setCurrentPage] = useState(1);
        const itemsPerPage = 6; 

        const fetchGames = async () => {
            const response = await apiGetGames({ sort: 'releaseDate' });
            setPopular(response.data.games);
        };

        useEffect(() => {
            fetchGames();
        }, []);

        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = popular.slice(indexOfFirstItem, indexOfLastItem);

        const paginate = (pageNumber) => setCurrentPage(pageNumber);

        return (
            <Container>
            <Row>
                {currentItems.map((el) => (
                <Col lg={4} xs={12}>
                    <Item key={el.id} itemData={el} />
                </Col>
                ))}
            </Row>
            <div className="pagination-container">
                {Array.from({ length: Math.ceil(popular.length / itemsPerPage) }).map((_, index) => (
                <Button 
                    key={index} onClick={() => paginate(index + 1)}  
                    className = {`mr-2 ${currentPage === index + 1 ? 'active' : ''}`}
                >
                    {index + 1}
                </Button>
                ))}
            </div>
            </Container>
        );
}

export default GamePopular;
