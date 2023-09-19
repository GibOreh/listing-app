import React, { useState } from 'react';
import { Navbar, Nav, Container, FormControl, Button } from 'react-bootstrap';

function Header() {
    const [expanded, setExpanded] = useState(true);

    // Hàm xử lý sự kiện khi nhấn vào Navbar.Toggle
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

// import React, { useState } from 'react';
// import { Navbar, Nav, Container } from 'react-bootstrap';
// import { FaSearch } from 'react-icons/fa';

// function Header()
//     const [expanded, setExpanded] = useState(true);

//     // Hàm xử lý sự kiện khi nhấn vào Navbar.Toggle
//     const handleToggle = () => {
//         setExpanded(!expanded);
//     };
//     return (
//         <Navbar bg="light" expand="lg" className="py-3">
//             <Container>
//                 <div className="d-flex mx-auto">
//                     <div className="order-2 order-lg-1 px-5 ">
//                         <Navbar.Brand href="/">APKMODY</Navbar.Brand>
//                     </div>
//                     <Navbar.Toggle
//                         aria-controls="navbarNav"
//                         className="order-1 order-lg-2"
//                         onClick={handleToggle}
//                         aria-expanded={expanded}
//                     />
//                     <Navbar.Collapse id="navbarNav" className="order-3 order-lg-3 px-5">
//                         <Nav className="ml-auto px-5 `sidenav ${isOpen ? 'sidenav-open' : ''}`">
//                             <Nav.Item>
//                                 <Nav.Link href="/game-category" className="text-dark">
//                                     Games
//                                 </Nav.Link>
//                             </Nav.Item>
//                             <Nav.Item>
//                                 <Nav.Link href="/app-category" className="text-dark">
//                                     Apps
//                                 </Nav.Link>
//                             </Nav.Item>
//                             <Nav.Item>
//                                 <Nav.Link href="/articles" className="text-dark">
//                                     Articles
//                                 </Nav.Link>
//                             </Nav.Item>
//                         </Nav>
//                     </Navbar.Collapse>
//                     <div className="order-4 order-lg-4 ml-auto px-5 ml-5">
//                         <Nav className="ml-auto ">
//                             <Nav.Item>
//                                 <Nav.Link href="/search" className="text-dark">
//                                     <FaSearch />
//                                 </Nav.Link>
//                             </Nav.Item>
//                         </Nav>
//                     </div>
//                 </div>
//             </Container>
//         </Navbar>
//     );
// }

// export default Header;
