import Manager from './core/AjaxManager'
import store from './store/store'
import { userLogout } from './store/actions/auth.actions'

const defaultAjaxConfig = {}
const state = store.getState()

if (state.auth.login && state.auth.jwt) {
    defaultAjaxConfig.headers = {}
    defaultAjaxConfig.headers.Authorization = 'Bearer ' + state.auth.jwt
}

Manager.createInstance(defaultAjaxConfig)

const defaultAjaxInstance = Manager.getInstance()

defaultAjaxInstance.setErrorHandler(function(error, datetime) {
    const res = error.response
    if (res.status === 401 && res.data.msg === 'error_token') {
        store.dispatch(userLogout())
    }
})
