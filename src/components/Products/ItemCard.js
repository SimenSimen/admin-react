import React, { Component } from 'react';

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
        );
    }

}

export default ItemCard;
