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
        console.log(item);
        return (
<<<<<<< HEAD
            <a href={ item.link } target="_blank">
                <Card className="card-default" style={{cursor: 'pointer'}}>
                    <CardHeader>
                        <h5 className="text-info mb-0">{ item.name }</h5>
                    </CardHeader>
                    <CardBody>
                        {/* <CardTitle>{ item.name }</CardTitle> */}
                        <CardText>
                            <Row>
                                <Col lg={ 7 } xl={ 6 }>
                                    <img src={ item.photo_links } alt=""/>
                                </Col>
                                
                                <Col lg={ 5 }>
                                    <h3 class="text-danger pl-4">{ parseFloat(item.price).toFixed(2) } RMB</h3>
                                    { item.description }
                                </Col>
                            </Row>
                        </CardText>
                    </CardBody>
                    <CardFooter>
                        <div className="text-sm text-muted">
                            <span className="float-right text-danger">{ item.created_time }</span>
                        </div>
                    </CardFooter>
                </Card>
            </a>
=======
            <Card className="card-default" style={{cursor: 'pointer'}}>
                <CardHeader>
                    <h3 className="text-info mb-0">{ item.name }</h3>
                </CardHeader>
                <CardBody>
                    <CardTitle>{ item.name }</CardTitle>
                    <CardText>
                        { item.description }
                        <p>Price: { item.price }</p>
                        <p>
                            <a href={ item.link} >Link</a>
                        </p>
                    </CardText>
                </CardBody>
                <CardFooter>
                    <div className="text-sm text-muted">Last updated 3 mins ago</div>
                </CardFooter>
            </Card>
>>>>>>> simen201905211239
        );
    }

}

export default ItemCard;
