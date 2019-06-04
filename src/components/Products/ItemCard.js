import React, { Component } from 'react';
import { Row , Col } from 'reactstrap';

import {
    Card,
    CardBody,
    CardHeader,
    CardFooter,
    CardTitle,
    CardText } from 'reactstrap';

class ItemCard extends Component {
    render() {
        const item = this.props.item;
        
        return (
            <a href={ item.link } target="_blank">
                <Card className="card-default" style={{cursor: 'pointer'}}>
                    <CardHeader>
                        <h5 className="text-info mb-0">{ item.name }</h5>
                    </CardHeader>
                    <CardBody>
                        {/* <CardTitle>{ item.name }</CardTitle> */}
                        <Row>
                            <Col lg={ 7 } xl={ 6 }>
                                <img className="img-thumbnail" src={ item.photo_links } alt={ item.name  }/>
                            </Col>
                            
                            <Col lg={ 5 }>
                                <h3 className="text-danger pl-4">{ parseFloat(item.price).toFixed(2) } RMB</h3>
                                { item.description }
                            </Col>
                        </Row>
                    </CardBody>
                    <CardFooter>
                        <div className="text-sm text-muted">
                            <span className="float-right text-danger">{ item.created_date }</span>
                        </div>
                    </CardFooter>
                </Card>
            </a>
        );
    }

}

export default ItemCard;
