import React from 'react'
import { Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Items = ({itemData}) => {
    return (
        <div className='nav-content-item'>
                <div key={itemData.id} className="mb-4">
                    <Card>
                    <Link className="text-dark" to={`/item-detail/${itemData.id}`} style={{ textDecoration: 'none' }}>
                        <Card.Img variant="top" src={itemData.image} alt={itemData.title} />
                        <Card.Body>
                        <Card.Text className="text-dark">{itemData.version} • {itemData.modFeatures}</Card.Text>
                            {itemData.isAPK && (
                                <Badge pill bg="success" className="mr-3 text-light px-3">
                                    APK
                                </Badge>
                            )}
                            {itemData.isMod && ( 
                                <Badge pill bg="danger" className="mr-3 text-light px-3">
                                    MOD
                                </Badge>
                            )}
                        </Card.Body>
                    </Link>
                    </Card>
                </div>
        </div>    
    );
}

export default Items;
