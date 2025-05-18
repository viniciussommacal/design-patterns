"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LoggerStrategy_1 = require("../contracts/LoggerStrategy");
class ConsoleLogger {
    log(message, logLevel) {
        const timestamp = new Date().toISOString();
        const loggerFn = this.getConsoleMethod(logLevel);
        loggerFn(`[ConsoleLogger][${timestamp}]: ${message}`);
    }
    getConsoleMethod(level) {
        switch (level) {
            case LoggerStrategy_1.LogLevel.TRACE:
                return console.trace;
            case LoggerStrategy_1.LogLevel.DEBUG:
                return console.debug;
            case LoggerStrategy_1.LogLevel.INFO:
            case LoggerStrategy_1.LogLevel.NOTICE:
                return console.info;
            case LoggerStrategy_1.LogLevel.WARN:
                return console.warn;
            case LoggerStrategy_1.LogLevel.ERROR:
            case LoggerStrategy_1.LogLevel.CRITICAL:
            case LoggerStrategy_1.LogLevel.FATAL:
                return console.error;
            default:
                return console.log;
        }
    }
}
exports.default = ConsoleLogger;
