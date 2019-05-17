import React , { Component } from 'react';

// import { Link } from 'react-router-dom';

import ContentWrapper from '../Layout/ContentWrapper';
import { Row , Col } from 'reactstrap';
import ItemCard from '../Products/ItemCard';

import { request } from '../../core/AjaxManager';
import { route } from '../../core/RouteManager';

class Dashboard extends Component {

    constructor(props) {
        super();

        this.state = {
            page: 1,
            items: [],
        }
    }
    
    componentWillMount() {
        const itemRoute = route('ajax.items');
        const _ajax = request();
        
        _ajax[itemRoute[0]](itemRoute[1]).then((result) => {
            if (result.data) {
                this.setState({
                    items: result.data.items
                });
            }
        });
    }
    

    render() {
        return  (
            <ContentWrapper>
                <div className="content-heading">
                    <div>
                        Console
                        <small>Oub admin</small>
                    </div>
                </div>

                <h4 className="mt-0 page-header">今日精選</h4>

                <Row>
                    { this.state.items.map((item , index) => {
                        return (
                            <Col lg={ 4 } key={index}>
                                <ItemCard item={item}/>
                            </Col>
                        );
                    }) }
                </Row>
            </ContentWrapper>
        )
    }
}

export default Dashboard;
