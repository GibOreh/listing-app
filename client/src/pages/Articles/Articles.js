import React, { useState, useEffect } from 'react';
import './styles.css';
import { apiGetArticles } from '~/apis/article';
import Blog from '../Blog/Blog';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Article() {
        const [newreleases, setNewReleases] = useState([]);
        const [currentPage, setCurrentPage] = useState(1);
        const itemsPerPage = 3; 

        const fetchArticles = async () => {
            const response = await apiGetArticles({ sort: 'updateAt' });
            setNewReleases(response.data.articles);
        };

        useEffect(() => {
            fetchArticles();
        }, []);
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = newreleases.slice(indexOfFirstItem, indexOfLastItem);

        const paginate = (pageNumber) => setCurrentPage(pageNumber);

        return (
            <Container>
            <h2>Articles</h2>
            <Row>
                {currentItems.map((el) => (
                <Col lg={12} xs={12}>
                    <Blog key={el.id} itemData={el} />
                </Col>
                ))}
            </Row>
            <div className="pagination-container pb-4">
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

export default Article;
