import { RouteException } from './Error';

/**
 * route manager for ajax;
 */
class RouteManager {

    constructor() {
        this.routes = {};
    }

    /**
     * 
     * set route;
     * 
     * @param {String} method 
     * @param {String} url 
     * @param {String} name 
     * @returns {void}
     */
    set(method , url , name) {
        if (!!this.routes[name]) {
            throw new RouteException(`route's name is already set`);
        }

        this.routes[name] = [method , url];
    }

    /**
     * 
     * get route by it's name
     * 
     * @param {String} name
     * @returns {Array}
     */
    get(name) {
        
        if (!!this.routes[name]) {
            throw new RouteException(`trying to get undefined route`);
        }

        return this.routes[name];
    }
}

const manager = new RouteManager();

/**
 * 
 * Alias for manager.get with 1 param
 * Alias for manager.set with 3 params
 * 
 * @param {String} name 
 * @returns {Array|Void}
 */
export function route(name) {

    switch (arguments.length) {
        case 3:
            manager.set(arguments[0] , arguments[1] , arguments[2]);
            break;
        default:
            break;
    }

    return manager.get(name);
}

export default manager;