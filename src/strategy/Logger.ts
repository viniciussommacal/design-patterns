import LoggerStrategy from './contracts/LoggerStrategy';

class Logger {
  private strategy: LoggerStrategy;

  constructor(strategy: LoggerStrategy) {
    this.strategy = strategy
  }

  public setStrategy(strategy: LoggerStrategy) {
    this.strategy = strategy;
  }

  public log(message: string): void {
    this.strategy.log(message);
  }
}

export default Logger;
