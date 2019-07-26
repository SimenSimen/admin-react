// FULLSCREEN
// -----------------------------------
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class AjaxForm extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {}

    componentWillUnmount() {}

    /**
     * elements in form validation event handler
     *
     * @param {object} e
     */
    handleValidate(e) {}

    /**
     * form submit event handler
     *
     * @param {object} e
     */
    handleSubmit(e) {
        e.preventDefault()

        return false
    }
    render() {
        return (
            <form className="w-100" onSubmit={this.handleSubmit.bind(this)}>
                {this.children}
            </form>
        )
    }
}

AjaxForm.propTypes = {
    url: PropTypes.string,
    method: PropTypes.string,
}
