import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apiSearchGame } from '~/apis/game';
import Item from '../Item';
import { Container, Row, Col } from 'react-bootstrap';

function Results() {
    const { searchTerm } = useParams();
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        apiSearchGame(searchTerm)
            .then((response) => {
                setSearchResults(response.data.gameData);
            })
            .catch((error) => {
                console.error('Error fetching games:', error);
            });
    }, [searchTerm]);

    return (
    <Container>
        <h3>Search results for "{searchTerm}"</h3>
        {searchResults.length === 0 ? (
            <p>No results found.</p>
        ) : (
            <Row>
                {searchResults.map((el) => (
                    <Col lg={4} xs={12} key={el.id}>
                        <Item itemData={el} />
                    </Col>
                ))}
            </Row>
        )}
    </Container>
);
}

export default Results;
