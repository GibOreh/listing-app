import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './footer.css';

const Footer = () => {
    return (
        <footer bg="light" className="text-dark p-5">
            <Container>
                <Row>
                    <Col md={4} sm={6}>
                        <h5 className="mb-3">Who We Are?</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="/about" className="footer-link">
                                    About us
                                </a>
                            </li>
                            <li>
                                <a href="/policy" className="footer-link">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="/dmca" className="footer-link">
                                    DMCA Disclaimer
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={4} sm={6}>
                        <h5 className="mb-3">Trending</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#" className="footer-link">
                                    Spotify
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    Netflix
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    Minecraft
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    YouTube
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    Truecaller
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5 className="mb-3">Latest</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="/" className="footer-link">
                                    Stumble Guys x Pokemon
                                </a>
                            </li>
                            <li>
                                <a href="/" className="footer-link">
                                    Jojoy
                                </a>
                            </li>
                            <li>
                                <a href="/" className="footer-link">
                                    Reventure
                                </a>
                            </li>
                            <li>
                                <a href="/" className="footer-link">
                                    The Wonder Weeks
                                </a>
                            </li>
                            <li>
                                <a href="/" className="footer-link">
                                    NoxPlayer
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col>
                        <p className="text-center">Copyright © {new Date().getFullYear()} APKMODY.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
