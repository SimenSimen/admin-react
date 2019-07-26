// FULLSCREEN
// -----------------------------------
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { request } from 'core/AjaxManager'
import dotenv from 'dotenv'
import { fakeRequest } from 'utils/fakeRequest'

dotenv.config()

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

        const action = this.props.action ? this.props.action : null
        const method = this.props.method ? this.props.method : 'get'
        const error = this.props.error ? this.props.error : null
        const success = this.props.success ? this.props.success : null
        const proceses = this.props.proceses ? this.props.proceses : null
        const params = this.props.params ? this.props.params : {}

        if (!!action) {
            switch (process.env.NODE_ENV) {
                case global.ENV_DEV:
                    fakeRequest(action, params).then()
                    break
                case global.ENV_PROD:
                    request()
                        [method](action, params)
                        .then()
                    break

                default:
                    alert('env not implement')
                    break
            }
        }

        return false
    }
    render() {
        return (
            <form className="w-100" onSubmit={this.handleSubmit.bind(this)}>
                {this.props.children}
            </form>
        )
    }
}

AjaxForm.propTypes = {
    action: PropTypes.string,
    method: PropTypes.string,
    error: PropTypes.func,
    success: PropTypes.func,
    proceses: PropTypes.func,
    params: PropTypes.object,
}
