import React , { Component } from 'react';

// import { Link } from 'react-router-dom';

// import { withNamespaces, Trans } from 'react-i18next';
import ContentWrapper from '../Layout/ContentWrapper';
import { Row, Col } from 'reactstrap';

class Dashboard extends Component {
    render() {
        return  (
            <ContentWrapper>
                <div className="content-heading">
                </div>
                <Row>
                    <Col xs={12} className="text-center">
                        <h2 className="text-thin">Single view content</h2>
                        <p>
                            This project is an application skeleton. You can use it to quickly bootstrap your ReactJS webapp projects and dev environment for these projects.
                            <br/>
                            The seed app doesn't do much and has most of the feature removed so you can add theme as per your needs just following the demo app examples.
                        </p>
                    </Col>
                </Row>
            </ContentWrapper>
        )
    }
}

export default Dashboard;
