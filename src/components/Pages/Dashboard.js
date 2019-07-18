import React, { Component } from 'react'

// import { Link } from 'react-router-dom';

import ContentWrapper from '../Layout/ContentWrapper'
import { Row, Col } from 'reactstrap'
import ItemCard from '../Products/ItemCard'

import { request } from 'core/AjaxManager'
import { route } from 'core/RouteManager'

class Dashboard extends Component {
    constructor(props) {
        super()

        this.state = {
            page: 1,
            items: [],
        }
    }

    componentWillMount() {
    }

    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">
                    <div>
                        儀錶板
                        <small>任挑任選阿勇伯</small>
                    </div>
                </div>


                <Row>
                </Row>
            </ContentWrapper>
        )
    }
}

export default Dashboard
