import LoggerStrategy, { LogLevel } from '../contracts/LoggerStrategy';

class ApiLogger implements LoggerStrategy {
  log(message: string, level: LogLevel = LogLevel.INFO): void {
    const timestamp = new Date().toISOString();

    console.log('[ApiLogger][Sending API...]', {
      message,
      level,
      timestamp: timestamp,
    });
  }
}

export default ApiLogger;
