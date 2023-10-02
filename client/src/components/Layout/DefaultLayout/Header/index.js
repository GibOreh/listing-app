import React, { useState, useEffect, useRef } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'; 
import Search from '~/pages/Home/Search';
import './styles.css'; 

function Header() {
    const [showNav, setShowNav] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const location = useLocation(); 
    const navRef = useRef(null); 

    const handleToggle = () => {
        setShowNav(!showNav);
    };

    const handleSearchClick = () => {
        setShowSearch(!showSearch);
        setShowNav(false); 
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setShowNav(false);
            }
        };
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        setShowNav(false);
        setShowSearch(false);
    }, [location.pathname]); 

    return (
        <Container>
            {showNav && <div className="overlay"></div>}
            <div>
                <Navbar
                    expand="lg"
                    variant="light"
                    className="my-4 navbar-custom"
                    expanded={showNav}
                    ref={navRef} 
                >
                    <Navbar.Brand href="/" className="text-dark">
                        APKMODY
                    </Navbar.Brand>
                    <Navbar.Toggle onClick={handleToggle}></Navbar.Toggle>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className={`ml-auto flex-column flex-lg-row ${showNav ? 'show-nav' : ''}`}>
                            <Nav.Link href="/game-category" className={`text-dark mx-3 ${location.pathname === '/game-category' ? 'actived' : ''}`}>
                                Games
                            </Nav.Link>
                            <Nav.Link href="/app-category" className={`text-dark mx-3 ${location.pathname === '/app-category' ? 'actived' : ''}`}>
                                Apps
                            </Nav.Link>
                            <Nav.Link href="/articles" className={`text-dark mx-3 ${location.pathname === '/articles' ? 'actived' : ''}`}>
                                Articles
                            </Nav.Link>
                            <Nav.Link onClick={handleSearchClick} className="text-dark mx-3">
                                Search
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
            <div className={`search-overlay ${showSearch ? 'show-search-bar' : ''}`} onClick={handleSearchClick}></div>
            <Container className={`search-bar-container ${showSearch ? 'show-search-bar' : ''}`}>
                <Search onSearch={(searchTerm) => console.log(searchTerm)} />
            </Container>
        </Container>
    );
}

export default Header;
    