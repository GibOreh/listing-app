import React, { useState, useEffect } from 'react';
import './styles.css';
import { apiGetGames } from '~/apis/game';
import Item from '../../Item';
import { Container, Row, Col, Button } from 'react-bootstrap';

function GameAllCategory() {
    const [allCategories, setAllCategories] = useState([]);
    const [currentCategory, setCurrentCategory] = useState(null);
    const [gamesInCategory, setGamesInCategory] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const fetchCategories = async () => {
        const response = await apiGetGames({ sort: 'category' });
        const categories = response.data.games.map((game) => game.category);
        const uniqueCategories = [...new Set(categories)];
        setAllCategories(uniqueCategories);
    };

    const fetchGamesInCategory = async (category) => {
        const response = await apiGetGames({ category });
        setGamesInCategory(response.data.games);
    };

    const handleCategoryClick = (category) => {
        setCurrentCategory(category);
        fetchGamesInCategory(category);
        setCurrentPage(1);
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = gamesInCategory.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <Container>
            <Row>
                <Col lg={12}>
                    <div className="categories-list">
                        {allCategories.map((category, index) => (
                            <Button
                                key={index}
                                variant="dark"
                                onClick={() => handleCategoryClick(category)}
                                className={category === currentCategory ? 'active' : ''}
                            >
                                {category}
                            </Button>
                        ))}
                    </div>
                </Col>
            </Row>
            <Row>
                {currentItems.map((el, index) => (
                    <Col key={index} lg={4} xs={12}>
                        <Item key={el.id} itemData={el} />
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

export default GameAllCategory;
