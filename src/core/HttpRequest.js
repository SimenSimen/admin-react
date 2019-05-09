import axios from 'axios';
import _ from 'lodash';

class HttpRequest {
    constructor(config=null) {

        const axiosConfig = {}

        /** member variable */
        this.errorCallback = null;

        if (_.isObject(config)) {
            
        }
        
        this._axios = axios.create(axiosConfig);
    }
    
    /**
     * 
     * get method 
     * 
     * @param {String} url 
     * @param {Object} params 
     */
    get(url , params=null) {
        return this._buildAxios('get' , url , params);
    }

    /**
     * 
     * post method
     * 
     * @param {String} url 
     * @param {Object} data 
     */
    post(url , data=null) {
        return this._buildAxios('post' , url , data);
    }
    
    /**
     * 
     * delete method
     * 
     * @param {String} url 
     * @param {Object} params 
     */
    delete(url , params=null) {
        return this._buildAxios('delete' , url , params);
    }

    /**
     * 
     * put method
     * 
     * @param {String} url 
     * @param {Object} data 
     */
    put(url , data=null) {
        return this._buildAxios('put' , url , data);
    }


    /**
     * 
     * patch method
     * 
     * @param {String} url 
     * @param {Object} data 
     */
    patch(url , data=null) {
        return this._buildAxios('patch' , url , data);
    }

    /**
     * head method
     * 
     * @param {String} url 
     * @param {Object} params 
     */
    head(url , params=null) {
        return this._buildAxios('head' , url , params);
    }    

    /**
     * 
     * @param {Object} error 
     */
    _error(error) {
        if (!!this.errorCallback && _.isFunction(this.errorCallback)) {
            this.errorCallback.call(this , error , Date.now());
        }
        
        else {
            console.log(error);
        }
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