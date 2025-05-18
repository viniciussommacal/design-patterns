"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LoggerStrategy_1 = require("../contracts/LoggerStrategy");
class ApiLogger {
    log(message, level = LoggerStrategy_1.LogLevel.INFO) {
        const timestamp = new Date().toISOString();
        console.log('[ApiLogger][Sending API...]', {
            message,
            level,
            timestamp: timestamp,
        });
    }
}
exports.default = ApiLogger;
