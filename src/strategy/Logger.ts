import LoggerStrategy, { LogLevel } from './contracts/LoggerStrategy';

class Logger {
  private strategy: LoggerStrategy;

  constructor(strategy: LoggerStrategy) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: LoggerStrategy) {
    this.strategy = strategy;
  }

  public log(message: string, level?: LogLevel): void {
    this.strategy.log(message, level);
  }
}

export default Logger;
