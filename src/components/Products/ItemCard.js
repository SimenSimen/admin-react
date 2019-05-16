import React, { Component } from 'react';

import {
    Card,
    CardBody,
    CardHeader,
    CardFooter,
    CardTitle,
    CardText } from 'reactstrap';

class ItemCard extends Component {

    componentWillMount() {
    }

    componentWillUnmount() {
    }

    render() {

        return (
            <Card className="card-default">
                <CardHeader>Demo content</CardHeader>
                <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                </CardBody>
                <CardFooter>
                    <div className="text-sm text-muted">Last updated 3 mins ago</div>
                </CardFooter>
            </Card>
        );
    }

}

export default ItemCard;
