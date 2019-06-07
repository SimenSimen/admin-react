import React, { Component } from 'react'
import PropTypes from 'prop-types'

import $ from 'jquery'

import { request } from 'core/AjaxManager'

require('datatables.net')(window, $)
// Datatables
require('datatables.net-bs')(window, $)
require('datatables.net-bs4/js/dataTables.bootstrap4.js')(window, $)
require('datatables.net-bs4/css/dataTables.bootstrap4.css')
require('datatables.net-buttons')(window, $)
require('datatables.net-buttons-bs')(window, $)
require('datatables.net-responsive')(window, $)
require('datatables.net-responsive-bs')(window, $)
require('datatables.net-responsive-bs/css/responsive.bootstrap.css')
// Column visibility
require('datatables.net-buttons/js/buttons.colVis.js')(window, $)
// HTML 5 file export
require('datatables.net-buttons/js/buttons.html5.js')(window, $)
// Flash file export
require('datatables.net-buttons/js/buttons.flash.js')(window, $)
// Print view button
require('datatables.net-buttons/js/buttons.print.js')(window, $)
require('datatables.net-keytable')(window, $)
require('datatables.net-keytable-bs/css/keyTable.bootstrap.css')
require('jszip/dist/jszip.js')(window, $)
require('pdfmake/build/pdfmake.js')
require('pdfmake/build/vfs_fonts.js')

/**
 * Wrapper component for dataTable plugin
 * Only DOM child elements, componets are not supported (e.g. <Table>)
 */
export default class Datatable extends Component {
    static propTypes = {
        /** datatables options object */
        options: PropTypes.object,
        /** only one children allowed */
        children: PropTypes.element.isRequired,
        /** callback that receives the datatable instance as param */
        dtInstance: PropTypes.func,
    }

    static defaultProps = {
        options: {},
    }

    componentDidMount() {
        const dtInstance = $(this.tableElement).dataTable(this.props.options)

        if (this.props.dtInstance) this.props.dtInstance(dtInstance)
    }

    componentWillUnmount() {
        $(this.tableElement)
            .DataTable()
            .destroy(true)
    }

    setRef = node => (this.tableElement = node)

    render() {
        return React.cloneElement(React.Children.only(this.props.children), {
            ref: this.setRef,
        })
    }
}

export const configServer = (() => {
    const header = request()._axios.defaults.headers
    const auth = header.common.Authorization
        ? header.common.Authorization
        : header.Authorization

    return {
        paging: true,
        info: true,
        responsive: true,
        serverSide: true,
        processing: true,
        ajax: {
            headers: {
                Authorization: auth,
            },
        },
        // Text translation options
        // Note the required keywords between underscores (e.g _MENU_)
        language: {
            sSearch: '<em class="fa fa-search"></em>',
            sLengthMenu: '一頁 _MENU_ 筆',
            info: '第 _PAGE_ 頁 ， 總共 _PAGES_ 頁',
            zeroRecords: '目前查無資料',
            infoEmpty: 'No records available',
            infoFiltered: '(從 _MAX_ 筆資料過濾)',
            oPaginate: {
                sNext: '<em class="fa fa-caret-right"></em>',
                sPrevious: '<em class="fa fa-caret-left"></em>',
            },
        },
    }
})()
