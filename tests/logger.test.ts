import Logger from '../src/strategy/Logger';
import ConsoleLogger from '../src/strategy/strategies/ConsoleLogger';
import ApiLogger from '../src/strategy/strategies/ApiLogger';
import { LogLevel } from '../src/strategy/contracts/LoggerStrategy';

describe('Teste Loggers', () => {
  it('Deve exibir a mensagem correta no console - ConsoleLogger', () => {
    const logger = new Logger(new ConsoleLogger());
    const message = 'testando logs console... :)';
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    logger.log(message);

    const loggedMessage = consoleSpy.mock.calls[0][0];
    const messagePattern = new RegExp(/\[ConsoleLogger\]\[.*\]:\s.*/, 'gi');

    expect(loggedMessage).toMatch(messagePattern);
  });

  it('Deve exibir os valores corretos enviados para Api - ApiLogger', () => {
    const logger = new Logger(new ApiLogger());
    const message = 'testando logs Api... :)';
    const level = LogLevel.INFO;

    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    logger.log(message, level);

    expect(consoleSpy).toHaveBeenCalledWith('[ApiLogger][Sended to API]', {
      message,
      level,
      timestamp: expect.any(String),
    });

    consoleSpy.mockRestore();
  });
});
