    import React from 'react'
    import { format } from 'date-fns';
    import { Card } from 'react-bootstrap';
    import { Link } from 'react-router-dom';

    const Blogs = ({itemData}) => {
        const formattedDate = format(new Date(itemData.updatedAt), 'MMM dd, yyyy');
        
        return (
            <div className='nav-content-item'>
                    <div key={itemData.id} className="mb-4">
                        <Card>
                        <h5>{itemData.title}</h5>
                        <Link className="text-dark" to={`/articles/${itemData.slug}/${itemData._id}`} style={{ textDecoration: 'none' }}>
                            <Card.Img variant="top" src={itemData.image}/>
                            <Card.Body>
                                <Card.Text className="text-dark">{itemData.title}</Card.Text>
                                <Card.Text className="text-dark">Update on: {formattedDate}</Card.Text>
                            </Card.Body>
                        </Link>
                        </Card>
                    </div>
            </div>    
        );
    }

    export default Blogs;
