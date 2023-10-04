import React, { useState, useEffect } from 'react';
import './styles.css';
import { apiGetApps } from '~/apis/app';
import Item from '../../Item';
import { Container, Row, Col, Button } from 'react-bootstrap';

function AppAllCategory() {
    const [allCategories, setAllCategories] = useState([]);
    const [currentCategory, setCurrentCategory] = useState(null);
    const [appsInCategory, setAppsInCategory] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const fetchCategories = async () => {
        const response = await apiGetApps({ sort: 'category' });
        const categories = response.data.apps.map((app) => app.category);
        const uniqueCategories = [...new Set(categories)];
        setAllCategories(uniqueCategories);
    };

    const fetchAppsInCategory = async (category) => {
        const response = await apiGetApps({ category });
        setAppsInCategory(response.data.apps);
    };

    const handleCategoryClick = (category) => {
        setCurrentCategory(category);
        fetchAppsInCategory(category);
        setCurrentPage(1);
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = appsInCategory.slice(indexOfFirstItem, indexOfLastItem);

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
                        {Array.from({ length: Math.ceil(appsInCategory.length / itemsPerPage) }).map((_, index) => (
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

export default AppAllCategory;
