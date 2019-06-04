import React, { Component } from 'react'

// import { Link } from 'react-router-dom';

import ContentWrapper from '../Layout/ContentWrapper'

import { request } from 'core/AjaxManager'
import { route } from 'core/RouteManager'

import Datatable, { configServer } from '../Common/Datatable'

export default class ItemPage extends Component {
    constructor(props) {
        super()

        const ajaxSetting = {
            url: route('ajax.items.datatble'),
            data: data => {},
        }

        configServer.ajax = { ...configServer.ajax, ...ajaxSetting }

        configServer.ordering = true
        configServer.columns = [
            {
                data: 'img',
                name: 'photo_links',
                orderable: false,
                render: (data, type, row, mata) => {
                    return `
                        <a href="${row.photo_links}" target="_blank">
                            <img class="img-thumbnail" src="${
                                row.photo_links
                            }_120x120q50.jpg" alt="${row.name}">
                        </a>
                        `
                },
            },
            { data: 'id', name: 'id' },
            { data: 'name', name: 'name' },
            { data: 'price', name: 'price' },
            {
                data: 'sale_amount',
                name: 'sale_amount',
            },
            { data: 'created_date', name: 'created_date' },
            {
                data: 'operation',
                render: (data, type, row, mata) => {
                    // console.log(data, type, row, mata)
                    return ''
                },
            },
        ]

        configServer.columnDefs = [
            { targets: [1, 2, 3, 4, 5], orderable: false },
        ]

        this.state = {
            datatableConfig: configServer,
        }
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

                <Datatable options={this.state.datatableConfig}>
                    <table className="table table-striped my-4 w-100">
                        <thead>
                            <tr>
                                <th />
                                <th data-priority="1">ID</th>
                                <th>名稱</th>
                                <th className="sort-numeric">價格</th>
                                <th>熱度</th>
                                <th>日期</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody />
                    </table>
                </Datatable>
            </ContentWrapper>
        )
    }
}
