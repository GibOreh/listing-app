import React, { useState } from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import './styles.css';

const gamesPerPage = 6;

const games = [
    {
        title: 'Game 1',
        description: 'Description of Game 1...',
        image: 'game1.jpg',
    },
    {
        title: 'Game 2',
        description: 'Description of Game 2...',
        image: 'game2.jpg',
    },
    {
        title: 'Game 2',
        description: 'Description of Game 2...',
        image: 'game2.jpg',
    },
    {
        title: 'Game 2',
        description: 'Description of Game 2...',
        image: 'game2.jpg',
    },
    {
        title: 'Game 2',
        description: 'Description of Game 2...',
        image: 'game2.jpg',
    },
    {
        title: 'Game 2',
        description: 'Description of Game 2...',
        image: 'game2.jpg',
    },
    {
        title: 'Game 2',
        description: 'Description of Game 2...',
        image: 'game2.jpg',
    },
];
function GameUpdate() {
    const [currentPage, setCurrentPage] = useState(0); // Page index bắt đầu từ 0
    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };
    const offset = currentPage * gamesPerPage;
    const currentGames = games.slice(offset, offset + gamesPerPage);
    

    return (
        <Container>
            <h2>Game Category</h2>
            <p>
                For us, enthusiasts, the love for games never changes. And to keep that love burning, we created this
                category to store the best MOD APK, Paid APK & Original APK games, as a premise to build a “so deep”
                playground for gamers. When participating in this journey, you will discover a new game world, a new
                land that you have never known. There are countless attractive, unique, and worth-playing titles shared
                every day. And a part of them are MOD APK games that serve the growing needs of many players. Especially
                we don’t charge anything!
            </p>
            <nav>
                <ul className="list-inline">
                    <li className="list-inline-item px-2 col-2 d-inline">
                        <Link to="/game-category/update">Update</Link>
                    </li>
                    <li className="list-inline-item px-2 col-2 d-inline">
                        <Link to="/game-category/new-releases">New Releases</Link>
                    </li>
                    <li className="list-inline-item px-2 col-2 d-inline">
                        <Link to="/game-category/popular">Popular</Link>
                    </li>
                    <li className="list-inline-item px-2 col-2 d-inline">
                        <Link to="/game-category/all-category">All Category</Link>
                    </li>
                </ul>
            </nav>
            <Row>
                {currentGames.map((game, index) => (
                    <Col key={index} md={4} sm={6} xs={12} className="mb-4">
                        <Card>
                            <Link to={`/product-detail/${game.id}`} style={{ textDecoration: 'none' }}>
                                <Card.Img variant="top" src={game.image} alt={game.title} />
                                <Card.Body>
                                    <Card.Title className="text-dark">{game.title}</Card.Title>
                                    <Card.Text className="text-dark">{game.description}</Card.Text>
                                    <Badge pill bg="success" className="mr-3 text-light px-3">
                                        APK
                                    </Badge>
                                    <Badge pill bg="danger text-light px-3">
                                        MOD
                                    </Badge>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                ))}
            </Row>

            <Container className="text-center">
                <ReactPaginate
                    previousLabel={'Previous'}
                    nextLabel={'Next'}
                    pageCount={Math.ceil(games.length / gamesPerPage)}
                    onPageChange={handlePageChange}
                    containerClassName={'pagination justify-content-center'}
                    activeClassName={'active'}
                />
            </Container>
        </Container>
    );
}

export default GameUpdate;
