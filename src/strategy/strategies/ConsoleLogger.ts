import LoggerStrategy, { LogLevel } from '../contracts/LoggerStrategy';

class ConsoleLogger implements LoggerStrategy {
  log(message: string, logLevel: LogLevel): void {
    const timestamp = new Date().toISOString();
    const loggerFn = this.getConsoleMethod(logLevel);

    loggerFn(`[ConsoleLogger][${timestamp}]: ${message}`);
  }

  getConsoleMethod(level: LogLevel): (...args: any[]) => void {
    switch (level) {
      case LogLevel.TRACE:
        return console.trace;
      case LogLevel.DEBUG:
        return console.debug;
      case LogLevel.INFO:
      case LogLevel.NOTICE:
        return console.info;
      case LogLevel.WARN:
        return console.warn;
      case LogLevel.ERROR:
      case LogLevel.CRITICAL:
      case LogLevel.FATAL:
        return console.error;
      default:
        return console.log;
    }
  }
}

export default ConsoleLogger;
