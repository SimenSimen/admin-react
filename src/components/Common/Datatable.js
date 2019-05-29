import React, { Component } from 'react'
import PropTypes from 'prop-types'
import $ from 'jquery'

// Datatables
import 'datatables.net-bs'
import 'datatables.net-bs4/js/dataTables.bootstrap4.js'
import 'datatables.net-bs4/css/dataTables.bootstrap4.css'
import 'datatables.net-buttons'
import 'datatables.net-buttons-bs'
import 'datatables.net-responsive'
import 'datatables.net-responsive-bs'
import 'datatables.net-responsive-bs/css/responsive.bootstrap.css'
import 'datatables.net-buttons/js/buttons.colVis.js' // Column visibility
import 'datatables.net-buttons/js/buttons.html5.js' // HTML 5 file export
import 'datatables.net-buttons/js/buttons.flash.js' // Flash file export
import 'datatables.net-buttons/js/buttons.print.js' // Print view button
import 'datatables.net-keytable'
import 'datatables.net-keytable-bs/css/keyTable.bootstrap.css'
import 'jszip/dist/jszip.js'
import 'pdfmake/build/pdfmake.js'
import 'pdfmake/build/vfs_fonts.js'

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
