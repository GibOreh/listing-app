import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiGetApps } from '~/apis/app';
import { Container, Row, Col, Button } from 'react-bootstrap';

function AppAllCategory() {
    const [allCategories, setAllCategories] = useState([]);
    const [currentCategory, setCurrentCategory] = useState(null);
    const [appsInCategory, setAppsInCategory] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const navigate = useNavigate();

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
        navigate(`/app-category/${category}`);
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
        </Container>
    );
}

export default AppAllCategory;
