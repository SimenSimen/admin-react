import React, { Component } from 'react'
import PropTypes from 'prop-types'

import $ from 'jquery'

import { request } from 'core/AjaxManager'

$.fn.dataTable = require('datatables.net')()

// Datatables
require('datatables.net-bs')
require('datatables.net-bs4/js/dataTables.bootstrap4.js')
require('datatables.net-bs4/css/dataTables.bootstrap4.css')
require('datatables.net-buttons')
require('datatables.net-buttons-bs')
require('datatables.net-responsive')
require('datatables.net-responsive-bs')
require('datatables.net-responsive-bs/css/responsive.bootstrap.css')
// Column visibility
require('datatables.net-buttons/js/buttons.colVis.js')
// HTML 5 file export
require('datatables.net-buttons/js/buttons.html5.js')
// Flash file export
require('datatables.net-buttons/js/buttons.flash.js')
// Print view button
require('datatables.net-buttons/js/buttons.print.js')
require('datatables.net-keytable')
require('datatables.net-keytable-bs/css/keyTable.bootstrap.css')
require('jszip/dist/jszip.js')
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
        $(this.tableElement).dataTable({ destroy: true })
    }

    setRef = node => (this.tableElement = node)

    render() {
        return React.cloneElement(React.Children.only(this.props.children), {
            ref: this.setRef,
        })
    }
}

export const configServer = (() => {
    return {
        paging: true,
        ordering: false,
        info: true,
        responsive: true,
        serverSide: true,
        processing: true,
        ajax: {
            headers: { "Authorization": request()._axios.defaults.headers.Authorization }
        },
        // Text translation options
        // Note the required keywords between underscores (e.g _MENU_)
        oLanguage: {
            sSearch: '<em class="fa fa-search"></em>',
            sLengthMenu: '_MENU_ records per page',
            info: 'Showing page _PAGE_ of _PAGES_',
            zeroRecords: 'Nothing found - sorry',
            infoEmpty: 'No records available',
            infoFiltered: '(filtered from _MAX_ total records)',
            oPaginate: {
                sNext: '<em class="fa fa-caret-right"></em>',
                sPrevious: '<em class="fa fa-caret-left"></em>',
            },
        },
    }
})()
