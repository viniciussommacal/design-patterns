import Logger from './strategy/Logger';
import ApiLogger from './strategy/strategies/ApiLogger';
import ConsoleLogger from './strategy/strategies/ConsoleLogger';

const logger = new Logger(new ApiLogger());
logger.log('Mensagem com API Logger');

logger.setStrategy(new ConsoleLogger());
logger.log('Mensagem com Console Logger');
