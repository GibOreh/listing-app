import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apiGetApps } from '~/apis/app';
import AppItem from '~/pages/AppItem/AppItem'
import { Container, Row, Col, Button } from 'react-bootstrap';

function AppCategoryDetail() {
  const { categoryName } = useParams();
  const [appsInCategory, setAppsInCategory] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = appsInCategory.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    const fetchData = async () => {
      const response = await apiGetApps({ category: categoryName });
      setAppsInCategory(response.data.apps);
    };

    fetchData();
  }, [categoryName]);

  return (
    <Container>
      <h5>Category Name: {categoryName}</h5>
        <Row>
        {appsInCategory.map((el, index) => (
                    <Col key={index} lg={4} xs={12}>
                        <AppItem key={el.id} itemData={el} />
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

export default AppCategoryDetail;
