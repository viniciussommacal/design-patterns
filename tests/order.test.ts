import Order from '../src/builder/Order';

describe('Teste Order Builder', () => {
  const address = 'Avenida Higyno Muzzi Filho, 1001';
  const coupon = 'UNIMAR20';

  it('Deve permitir o encadeamento dos dos metodos do builder', () => {
    const order = new Order();

    const result = order.setDeliveryAdress(address).setDiscountCoupon(coupon);

    expect(result).toBeInstanceOf(Order);
  });

  it('Deve construir um pedido com Endereço e Desconto corretos', () => {
    const order = new Order();
    order.setDeliveryAdress(address).setDiscountCoupon(coupon);

    expect(order.getDeliveryAddress()).toBe(address);
    expect(order.getDiscountCoupon()).toBe(coupon);
  });

  it('Deve adicionar itens corretamente', () => {
    const order = new Order();
    order.addItem('X-Bacon', 1).addItem('Coca Lata', 1);

    expect(order.getItems()).toHaveLength(2);
  });
});
