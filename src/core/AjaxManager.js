import HttpRequest from './HttpRequest';
import { Exception } from './Error';

const instance = {};

class AjaxManager {

    /**
     * create an instnace for axios
     * 
     * @param { Object } config 
     * @param { String } name 
     * @returns { Void }
     */
    createInstance(config , name='default') {
        instance[name] = new HttpRequest(config);
    }

    /**
     * get instance of HttpRequest
     * 
     * @param { String } name 
     * @throws call error
     * 
     * @returns { HttpReqeust }
     */
    getInstance(name='default') {
        if (!instance[name]) throw new Exception('there is no ajax instance you called');

        return instance[name];
    }
}

const Manager = new AjaxManager();

/**
 * @returns {HttpRequest}
 */
export function request(name='default') {
    return Manager.getInstance(name);
}

export default Manager;