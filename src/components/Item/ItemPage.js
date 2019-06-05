import React, { Component } from 'react'

// import { Link } from 'react-router-dom';

import ContentWrapper from '../Layout/ContentWrapper'
import { route } from 'core/RouteManager'

import * as _ from 'lodash'
import { DATE, format } from 'utils/date'

import Datatable, { configServer } from '../Common/Datatable'

export default class ItemPage extends Component {
    constructor(props) {
        super()

        const ajaxSetting = {
            url: route('ajax.items.datatble'),
            data: data => {},
        }

        configServer.ajax = { ...configServer.ajax, ...ajaxSetting }

        configServer.order = [[3, 'desc']]
        configServer.columns = [
            {
                data: 'img',
                name: 'photo_links',
                width: '10%',
                render: (data, type, row, mata) => {
                    return `
                        <a class="text-decoration-none" href="${
                            row.photo_links
                        }" target="_blank">
                            <img class="img-thumbnail" src="${
                                row.photo_links
                            }_120x120q50.jpg" alt="${row.name}">
                        </a>
                        `
                },
            },
            {
                data: 'name',
                name: 'name',
                render: (data, type, row, mata) => {
                    return `
                        <a class="text-decoration-none" href="${
                            row.link
                        }" target="_blank">
                            <span>${row.name}</span>
                        </a>
                        <span class="float-md-right badge badge-danger">${
                            row.sale_amount
                        }</span>
                    `
                },
            },
            {
                data: 'price',
                name: 'price',
                render: (data, type, row, mata) => {
                    return `
                    <h3 class="text-muted">
                        <strong>${_.floor(row.price, 2)}</strong> RMB
                    </h3>
                `
                },
            },
            {
                data: 'created_date',
                name: 'created_date',
                render: (data, type, row, mata) => {
                    return format(row.created_date, DATE)
                },
            },
            {
                data: 'operation',
                render: (data, type, row, mata) => {
                    // console.log(data, type, row, mata)
                    return ''
                },
            },

            { data: 'id', name: 'id', visible: false },
            {
                data: 'sale_amount',
                name: 'sale_amount',
                visible: false,
            },
            {
                data: 'link',
                name: 'link',
                visible: false,
            },
        ]
        configServer.columnDefs = [{ targets: [0, 1, 4], orderable: false }]
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
                    <table className="table table-striped table-bordered my-4 w-100 ">
                        <thead>
                            <tr>
                                <th />
                                <th>名稱</th>
                                <th className="sort-numeric">價格</th>
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
