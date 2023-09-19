import React,  { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

const articlesPerPage = 6;

const articles = [
    {
        title: 'Article 1',
        author: 'Author 1',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        image: 'image1.jpg', 
    },
    {
        title: 'Article 2',
        author: 'Author 2',
        content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas...',
        image: 'image2.jpg', // Đường dẫn đến ảnh cho bài viết này
    },
    {
        title: 'Article 3',
        author: 'Author 3',
        content: 'Vestibulum venenatis nunc id libero cursus, nec luctus tellus congue...',
        image: 'image3.jpg', // Đường dẫn đến ảnh cho bài viết này
    },
];

function Articles() {
    const [currentPage, setCurrentPage] = useState(0); 

    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };

    const offset = currentPage * articlesPerPage;
    const currentArticles = articles.slice(offset, offset + articlesPerPage);
    return (
        <Container>
            <h1 className="my-4">Articles</h1>
            {articles.map((article, index) => (
                <Row key={index} className="mb-4">
                    <Col>
                        <Card>
                            <Link to={`/articles/`} style={{ textDecoration: 'none' }}>
                                <Card.Img variant="top" src={article.image} alt={article.title} />
                                <Card.Body>
                                    <Card.Title className="text-dark">{article.title}</Card.Title>
                                    <Card.Title>{article.title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{article.author}</Card.Subtitle>
                                    <Card.Text>{article.content}</Card.Text>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                </Row>
            ))}
            <Container className="text-center">
                <ReactPaginate
                    previousLabel={'Previous'}
                    nextLabel={'Next'}
                    pageCount={Math.ceil(articles.length / articlesPerPage)}
                    onPageChange={handlePageChange}
                    containerClassName={'pagination justify-content-center'}
                    activeClassName={'active'}
                />
            </Container>
        </Container>
    );
}

export default Articles;
