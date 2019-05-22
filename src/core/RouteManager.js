import { RouteException } from './Error';

const routes = {};

/**
 * route manager for ajax;
 */
class RouteManager {

    /**
     * set route;
     * 
     * @param {String} url 
     * @param {String} name 
     * @returns {void}
     */
    set(url , name) {
        if (!!routes[name]) {
            throw new RouteException(`route's name is already set`);
        }

        routes[name] = [url];
    }

    /**
     * 
     * get route by it's name
     * 
     * @param {String} name
     * @returns {Array}
     */
    get(name) {
        
        if (!routes[name]) {
            throw new RouteException(`trying to get undefined route`);
        }

        return routes[name];
    }

}

const manager = new RouteManager();

/**
 * 
 * Alias for manager.get with 1 param
 * Alias for manager.set with 3 params
 * 
 * @param { String } name 
 * @returns { Array | Void }
 */
export function route(name) {

    switch (arguments.length) {
        case 2:
            manager.set(arguments[0] , arguments[1]);
            return null;
        default:
            break;
    }

    return manager.get(name);
}


/**
 * get list of route
 * 
 * @returns { Object }
 */
export function list() {
    return routes;
}

export default manager;