import React, { Component } from 'react'

// import { Link } from 'react-router-dom';

import ContentWrapper from '../Layout/ContentWrapper'

import { request } from 'core/AjaxManager'
import { route } from 'core/RouteManager'

import $ from 'jquery';
// import Datatable from '../Common/Datatable'

export default class ItemPage extends Component {
    constructor(props) {
        super()

        this.state = {}
    }

    componentWillMount() {
        const _ajax = request()

        // _ajax.get(`${route('ajax.items')}?_today=1`).then((result) => {
        //     if (result.data) {
        //         this.setState({
        //             items: result.data.items
        //         });
        //     }
        // });
    }

    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">
                    <div>
                        商品列表
                        <small>她媽任你選</small>
                    </div>
                </div>

                <h4 className="mt-0 page-header">商品列表</h4>
            </ContentWrapper>
        )
    }
}
