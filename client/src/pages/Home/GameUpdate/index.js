import React, { useState, useEffect } from 'react';
import { apiGetGames } from '~/apis/game';
import Item from '../../GameItem';
import { HiChevronRight } from 'react-icons/hi2';
import { Container, Row, Col } from 'react-bootstrap';

function GameUpdate() {
    const [update, setUpdate] = useState([]);
    const updateDisplay = update.slice(0, 6);

    const fetchGames = async () => {
        const response = await apiGetGames({ sort: 'updatedAt' });
        setUpdate(response.data.games);
    };

    useEffect(() => {
        fetchGames();
    }, []);

    return (
        <Container>
            <h4 className="my-4">LATEST UPDATED GAMES <HiChevronRight /></h4>
            <Row>
                {updateDisplay.map((el) => (
                    <Col lg={4} xs={12} key={el.id}>
                        <Item itemData={el} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default GameUpdate;
