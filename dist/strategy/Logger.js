"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Logger {
    constructor(strategy) {
        this.strategy = strategy;
    }
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    log(message) {
        this.strategy.log(message);
    }
}
exports.default = Logger;
