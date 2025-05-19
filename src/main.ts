import Logger from './strategy/Logger';
import ApiLogger from './strategy/strategies/ApiLogger';
import ConsoleLogger from './strategy/strategies/ConsoleLogger';
import CacheRegister from './singleton/CacheRegister';
import Order from './builder/Order';

// Strategy
const logger = new Logger(new ApiLogger());
logger.log('Mensagem com API Logger');

logger.setStrategy(new ConsoleLogger());
logger.log('Mensagem com Console Logger');

// Singleton
const registry = CacheRegister.getInstance();
registry.set(
  'user',
  JSON.stringify({
    name: 'Vinicius',
    age: 26,
    city: 'Marília',
    profession: 'Dev. Full Stack',
  }),
);

const registry2 = CacheRegister.getInstance();
const user = registry2.get('user');
console.log(user);

// construtor privado não permite instanciar.
// const registry3 = new CacheRegister();

// Builder
const order = new Order()
  .addItem('x-bacon', 2)
  .addItem('Coca Lata', 2)
  .setDeliveryAdress('Avenida Higyno Muzzi Filho, 1001')
  .setDiscountCoupon('UNIMAR20')
  .build();

console.log(JSON.stringify(order));
