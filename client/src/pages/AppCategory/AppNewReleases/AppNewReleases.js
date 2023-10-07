import React, { useState, useEffect } from 'react';
import './styles.css';
import { apiGetApps } from '~/apis/app';
import AppItem from '../../AppItem/AppItem';
import { Container, Row, Col, Button } from 'react-bootstrap';

function AppNewReleases() {
        const [newreleases, setNewReleases] = useState([]);
        const [currentPage, setCurrentPage] = useState(1);
        const itemsPerPage = 6; 

        const fetchApps = async () => {
            const response = await apiGetApps({ sort: 'version' });
            setNewReleases(response.data.apps);
        };

        useEffect(() => {
            fetchApps();
        }, []);

        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = newreleases.slice(indexOfFirstItem, indexOfLastItem);

        const paginate = (pageNumber) => setCurrentPage(pageNumber);

        return (
            <Container>
            <Row>
                {currentItems.map((el) => (
                <Col lg={4} xs={12}>
                    <AppItem key={el.id} itemData={el} />
                </Col>
                ))}
            </Row>
            <div className="pagination-container">
                {Array.from({ length: Math.ceil(newreleases.length / itemsPerPage) }).map((_, index) => (
                <Button 
                    key={index} onClick={() => paginate(index + 1)}  
                    className={`mr-2 ${currentPage === index + 1 ? 'active' : ''}`}
                >
                    {index + 1}
                </Button>
                ))}
            </div>
            </Container>
        );
}
export default AppNewReleases;
