import Item from './contracts/Item';

class Order {
  private items: Array<Item> = [];

  private deliveryAddress: string = '';

  private discountCoupon: string = '';

  constructor() {}

  public getItems(): Array<Item> {
    return this.items;
  }

  public addItem(item: string, quantity: number): this {
    this.items.push({
      item,
      quantity,
    });

    return this;
  }

  public getDeliveryAddress(): string {
    return this.deliveryAddress;
  }

  public setDeliveryAdress(item: string): this {
    this.deliveryAddress = item;

    return this;
  }

  public getDiscountCoupon(): string {
    return this.discountCoupon;
  }

  public setDiscountCoupon(coupon: string): this {
    this.discountCoupon = coupon;

    return this;
  }
}

export default Order;
