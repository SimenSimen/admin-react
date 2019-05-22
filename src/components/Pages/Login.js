import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input } from 'reactstrap';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeLoginState } from '../../store/actions/actions';

import FormValidator from '../Forms/FormValidator.js';

import { request } from '../../core/AjaxManager';
import { route } from '../../core/RouteManager';

import Loading from '../Common/Loading';

class Login extends Component {

    constructor(props) {
        super();
    }

    state = {
        formLogin: {
            account: '',
            password: '',
            account_min: 8,
        },
        loading: false
    }

     /**
      * Validate input using onChange event
      * @param  {String} formName The name of the form in the state object
      * @return {Function} a function used for the event
      */
    validateOnChange = event => {
        const input = event.target;
        const form = input.form
        const value = input.type === 'checkbox' ? input.checked : input.value;

        const result = FormValidator.validate(input);

        this.setState({
            [form.name]: {
                ...this.state[form.name],
                [input.name]: value,
                errors: {
                    ...this.state[form.name].errors,
                    [input.name]: result
                }
            }
        });
    }

    onSubmit = e => {
        const form = e.target;
        const inputs = [...form.elements].filter(i => ['INPUT', 'SELECT'].includes(i.nodeName))

        const { errors, hasError } = FormValidator.bulkValidate(inputs)
        const self = this;
        e.preventDefault()

        if (hasError) {
            return this.setState({
                [form.name]: {
                    ...this.state[form.name],
                    errors
                }
            });
        }

        const data = {
            account: this.state[form.name].account,
            password: this.state[form.name].password
        }

        this.setState({
            loading: true
        })
        
        request().post(route('ajax.login') , data).then((result) => {
            if (!result) {
                alert('連線有問題！');
            }
            
            else if (result.data && result.data.status) {
                
                return self.props.actions.changeLoginState({
                    login: true,
                    userInfo: result.data.data.user,
                    jwt: result.data.data.jwt
                })
            }
            else {
                alert(result.data && result.data.error ? result.data.error : '發生錯誤!');
            }

            self.setState({
                loading: false
            })
        });
    }

    /* Simplify error check */
    hasError = (formName, inputName, method) => {
        return  this.state[formName] &&
                this.state[formName].errors &&
                this.state[formName].errors[inputName] &&
                this.state[formName].errors[inputName][method]
    }

    render() {
        const year = (new Date()).getFullYear();
        
        return (
            <div className="block-center mt-4 wd-xl">
                <div className="card card-flat">
                    <div className="card-header text-center bg-dark">
                        <a href="">
                            <img className="block-center rounded" src="img/logo.png" alt="Logo"/>
                        </a>
                    </div>
                    <div className="card-body">
                        <div className="text-center py-2">
                            { !this.state.loading && <p>登入以繼續</p> }
                            { this.state.loading && <Loading/> }
                        </div>
                        <form className="mb-3" name="formLogin" onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <div className="input-group with-focus">
                                    <Input 
                                        type="text"
                                        name="account"
                                        className="border-right-0"
                                        placeholder="帳號"
                                        invalid={this.hasError('formLogin','account','required') || this.hasError('formLogin','account','minlen')}
                                        onChange={this.validateOnChange}
                                        data-validate='["required", "minlen"]'
                                        data-param={this.state.formLogin.account_min}
                                        value={this.state.formLogin.email}/>
                                    <div className="input-group-append">
                                        <span className="input-group-text text-muted bg-transparent border-left-0">
                                            <em className="fa fa-envelope"></em>
                                        </span>
                                    </div>
                                    { this.hasError('formLogin','account','required') && <span className="invalid-feedback">請勿空白</span> }
                                    { this.hasError('formLogin','account','minlen') && <span className="invalid-feedback">至少輸入 {this.state.formLogin.account_min} 字元</span> }
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group with-focus">
                                    <Input type="password"
                                        id="id-password"
                                        name="password"
                                        className="border-right-0"
                                        placeholder="密碼"
                                        invalid={this.hasError('formLogin','password','required')}
                                        onChange={this.validateOnChange}
                                        data-validate='["required"]'
                                        value={this.state.formLogin.password}
                                    />
                                    <div className="input-group-append">
                                        <span className="input-group-text text-muted bg-transparent border-left-0">
                                            <em className="fa fa-lock"></em>
                                        </span>
                                    </div>
                                    <span className="invalid-feedback">請輸入密碼</span>
                                </div>
                            </div>
                            <div className="clearfix">
                                <div className="checkbox c-checkbox float-left mt-0">
                                    <label>
                                        <input type="checkbox" value="" name="remember"/>
                                        <span className="fa fa-check"></span>記住我</label>
                                </div>
                                <div className="float-right">
                                    <Link to="recover" className="text-muted">是否忘記密碼?</Link>
                                </div>
                            </div>
                            <button className="btn btn-block btn-primary mt-3" type="submit">登入</button>
                        </form>
                        <p className="pt-3 text-center">註冊請洽管理員</p>
                    </div>
                </div>
                <div className="p-3 text-center">
                    <span className="mr-2">&copy;</span>
                    <span>{ year }</span>
                    <span className="mx-2">-</span>
                    <span>Oub</span>
                    <br/>
                    <span>Oub Merchant Console</span>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({ auth: state.auth });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators({ changeLoginState }, dispatch) });

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
