import axios from 'axios';

import api from '../config/api';
let totalConfig = { api };

export const routes = {
    'api.auth.login': '/login',
    'api.auth.logout': '/logout',

    'api.data.menu': '/menu'
};

class HttpRequest {
    constructor(config=null) {
        switch (config) {
            case 'api':
                config = totalConfig[config];
                break;
            default:
                config = {};
                break;
        };
        
        this._axios = axios.create(config);

    }
    /**
     * get method 
     */
    get(url , params=null) {
        if (this._checkRoutes(url)) {
            url = routes[url]; 
        }

        return this._buildAxios('get' , url , params);
    }
    /**
     * post method
     */
    post(url , data=null) {
        if (this._checkRoutes(url)) {
            url = routes[url]; 
        }

        return this._buildAxios('post' , url , data);
    }

    delete(url , params=null) {
        if (this._checkRoutes(url)) {
            url = routes[url]; 
        }

        return this._buildAxios('delete' , url , params);

    }

    put(url , data=null) {
        if (this._checkRoutes(url)) {
            url = routes[url]; 
        }

        return this._buildAxios('put' , url , data);
    }

    patch(url , data=null) {
        if (this._checkRoutes(url)) {
            url = routes[url]; 
        }

        return this._buildAxios('patch' , url , data);
    }

    head(url , params=null) {
        if (this._checkRoutes(url)) {
            url = routes[url]; 
        }

        return this._buildAxios('head' , url , params);
    }
    /**
     * do something by method name
     * @param {*} method 
     * @param {*} params 
     * @param {*} callback 
     */
    do(method , params=[] , callback) {

    }

    _checkRoutes(urlName) {
        return !! routes[urlName];
    }
    _error(error) {
        console.log(error);
    }

    _buildAxios(method , url , data=null) {
        let config = {
            url: url,
            method: method
        };
        if (!!data) {
            switch (method) {
                case 'get':
                case 'head':
                case 'delete':
                    config.params = data;
                    break;
                case 'post':
                case 'patch':
                case 'put':
                    config.data = data;
                    break;
                default:
                    break;
            }
        }

        return this._axios(config).catch(this._error);

    }
}

export default HttpRequest;