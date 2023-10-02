import React, { useState, useEffect } from 'react';
import { apiGetApps } from '~/apis/app';
import Item from '../../Item';
import { HiChevronRight } from 'react-icons/hi2';
import { Container, Row, Col } from 'react-bootstrap';

function AppUpdate() {
    const [update, setUpdate] = useState([]);
    const updateDisplay = update.slice(0, 6);

    const fetchGames = async () => {
        const response = await apiGetApps({ sort: 'updatedAt' });
        setUpdate(response.data.apps);
    };

    useEffect(() => {
        fetchGames();
    }, []);

    return (
        <Container>
            <h4 className="my-4">LATEST UPDATED APPS <HiChevronRight /></h4>
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

export default AppUpdate;
