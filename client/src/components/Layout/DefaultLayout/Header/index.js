import React, { useState } from 'react';
import { Navbar, Nav, Container, FormControl, Button } from 'react-bootstrap';

function Header() {
    const [expanded, setExpanded] = useState(true);

    const handleToggle = () => {
        setExpanded(!expanded);
    };
    return (
        <Navbar bg="light" variant="light" expand="lg">
            <Container>
                <Navbar.Brand href="/" className="text-dark">
                    APKMODY
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarNav" onClick={handleToggle} aria-expanded={expanded} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/game-category" className="text-dark mx-3">
                            Games
                        </Nav.Link>
                        <Nav.Link href="/app-category" className="text-dark mx-3">
                            Apps
                        </Nav.Link>
                        <Nav.Link href="/articles" className="text-dark mx-3">
                            Articles
                        </Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                        <FormControl type="text" placeholder="Search..." className="mr-sm-2 " />
                        <Button variant="light" className="mt-2 mt-lg-0">
                            Search
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
