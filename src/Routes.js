import React, { Suspense, lazy } from 'react'
import { withRouter, Switch, Route, Redirect } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

/* loader component for Suspense*/
import PageLoader from './components/Common/PageLoader'

import Base from './components/Layout/Base'
import BasePage from './components/Layout/BasePage'

// import BaseHorizontal from './components/Layout/BaseHorizontal';

import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux';

/* Used to render a lazy component with react-router */
const waitFor = Tag => props => <Tag {...props} />

const Login = lazy(() => import('./components/Pages/Login'))
const Dashboard = lazy(() => import('./components/Pages/Dashboard'))
const ItemPage = lazy(() => import('./components/Item/ItemPage'))

// List of routes that uses the page layout
// listed here to Switch between layouts
// depending on the current pathname
const listofPages = [
    /* See full project for reference */
]

const pagesNoNeedAuth = ['/login']

const Routes = ({ location, auth }) => {
    const currentKey = location.pathname.split('/')[1] || '/'
    const timeout = { enter: 500, exit: 500 }

    // Animations supported
    //      'rag-fadeIn'
    //      'rag-fadeInRight'
    //      'rag-fadeInLeft'

    const animationName = 'rag-fadeIn'
    // pages no need auth

    const login = auth.login
    if (pagesNoNeedAuth.indexOf(location.pathname) > -1) {
        return (
            <BasePage>
                <Suspense fallback={<PageLoader />}>
                    <Switch location={location}>
                        {/* See full project for reference */}
                        <Route path="/login" component={waitFor(Login)} />
                    </Switch>
                </Suspense>
            </BasePage>
        )
    }

    // check login state

    if (!login) {
        return (
            <Switch location={location}>
                <Redirect to="/login" />
            </Switch>
        )
    }

    if (listofPages.indexOf(location.pathname) > -1) {
        return (
            // Page Layout component wrapper
            <BasePage>
                <Suspense fallback={<PageLoader />}>
                    <Switch location={location}>
                        {/* See full project for reference */}
                    </Switch>
                </Suspense>
            </BasePage>
        )
    } else {
        return (
            // Layout component wrapper
            // Use <BaseHorizontal> to change layout
            <Base>
                <TransitionGroup>
                    <CSSTransition
                        key={currentKey}
                        timeout={timeout}
                        classNames={animationName}
                        exit={false}
                    >
                        <div>
                            <Suspense fallback={<PageLoader />}>
                                <Switch location={location}>
                                    <Route
                                        exact
                                        path="/"
                                        component={waitFor(Dashboard)}
                                    />

                                    <Route
                                        exact
                                        path="/item"
                                        component={waitFor(ItemPage)}
                                    />
                                    <Redirect to="/" />
                                </Switch>
                            </Suspense>
                        </div>
                    </CSSTransition>
                </TransitionGroup>
            </Base>
        )
    }
}

const mapStateToProps = state => ({ auth: state.auth })
const mapDispatchToProps = dispatch => ({})

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Routes)
)
