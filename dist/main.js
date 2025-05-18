"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = __importDefault(require("./strategy/Logger"));
const ApiLogger_1 = __importDefault(require("./strategy/strategies/ApiLogger"));
const ConsoleLogger_1 = __importDefault(require("./strategy/strategies/ConsoleLogger"));
const logger = new Logger_1.default(new ApiLogger_1.default());
logger.log('Mensagem com API Logger');
logger.setStrategy(new ConsoleLogger_1.default());
logger.log('Mensagem com Console Logger');
