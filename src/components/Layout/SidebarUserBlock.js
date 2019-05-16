import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Collapse, Button } from 'reactstrap';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../store/actions/actions';

class SidebarUserBlock extends Component {

    state = {
        showUserBlock: false
    }

    componentWillReceiveProps(newProps) {
        if (newProps.showUserBlock !== this.props.showUserBlock) {
            this.setState({ showUserBlock: newProps.showUserBlock })
        }
    }

    handleLogout = e => {
        this.props.actions.userLogout();
    }

    render() {
        return (
            <Collapse id="user-block" isOpen={ this.state.showUserBlock }>
                <div>
                    <div className="item user-block">
                       {/* User picture */}
                       <div className="user-block-picture">
                            <div className="user-block-status">
                                {/* <img className="img-thumbnail rounded-circle" src="img/user/02.jpg" alt="Avatar" width="60" height="60" /> */}
                                {/* <div className="circle bg-success circle-lg"></div> */}
                            </div>
                        </div>
                       {/* Name and Job */}
                       <div className="user-block-info">
                            <span className="user-block-name">Hello, { this.props.auth.userInfo.name }</span>
                            <span className="user-block-role">{ this.props.auth.userInfo.email }</span>
                          
                            <Button outline className="mt-3 mb-1 btn-xs" color="primary" type="button" onClick={this.handleLogout.bind(this)}>登出</Button>
                       </div>
                    </div>
                </div>
            </Collapse>
        )
    }
}

SidebarUserBlock.propTypes = {
    showUserBlock: PropTypes.bool
};

const mapStateToProps = state => ({ showUserBlock: state.settings.showUserBlock , auth: state.auth})
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) })

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SidebarUserBlock);