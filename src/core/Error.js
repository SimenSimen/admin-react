export class RouteException {
    constructor(message) {
        this.message = message;
        this.name = 'RouteException';
    }
}

export class Exception {
    constructor(message) {
        this.message = message;
        this.name = 'NormalException';
    }
}