import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HiChevronRight } from 'react-icons/hi2';

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
];
function Home() {
    return (
        <Container>
            <h5 className="my-4">
                EDITORS' CHOICES <HiChevronRight />
            </h5>
            <Row>
                {games.map((game, index) => (
                    <Col key={index} md={4} sm={6} xs={12} className="mb-4">
                        <Card>
                            <Link to={`/product-detail/${game.id}`} style={{ textDecoration: 'none' }}>
                                <Card.Img variant="top" src={game.image} alt={game.title} />
                                <Card.Body>
                                    <Card.Text className="text-dark">{game.version} • {game.modFeatures}</Card.Text>
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
        
        </Container>
    );
}

export default Home;
