class Cache {
    constructor() {
        this.caches = {};
        
        /**
         * set the time to regenerate new data;
         * @var {int} expiredTime
         */
        this.expiredTime = 10;
    }
    /**
     * To get the cache value
     * @param {string} name 
     * 
     * @returns {any}
     */
    get(name) {
        
    }

    /**
     * Set the value by key name
     * 
     * @param {string} name 
     * @param {any} value 
     * 
     * @returns {void}
     */
    set(name , value){}

    /**
     * clear all caches
     * 
     * @returns {void}
     */
    clear() {

    }

    /**
     * remove cache data by key
     * 
     * @param string name 
     * @returns {void}
     */
    remove(name) {}

    /**
     * 
     * 
     * @param {string} name 
     * @param {function} callback 
     * 
     * @return {any}
     */
    remember(name , callback) {}
}

export default new Cache;