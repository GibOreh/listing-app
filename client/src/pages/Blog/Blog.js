    import React from 'react'
    import { Card } from 'react-bootstrap';
    import { Link } from 'react-router-dom';

    const Blogs = ({itemData}) => {
        return (
            <div className='nav-content-item'>
                    <div key={itemData.id} className="mb-4">
                        <Card>
                        <Link className="text-dark" to={`/item/${itemData.slug}/${itemData._id}`} style={{ textDecoration: 'none' }}>
                            <Card.Img variant="top" src={itemData.image} alt={itemData.title} />
                            <Card.Body>
                                <Card.Text className="text-dark">{itemData.releasesDate}</Card.Text>
                            </Card.Body>
                        </Link>
                        </Card>
                    </div>
            </div>    
        );
    }

    export default Blogs;
