export interface Item {
  item: string;
  quantity: number;
}

class Order {
  private items: Array<Item> = [];

  private deliveryAddress: string = '';

  private discountCoupon: string = '';

  constructor() {}

  public addItem(item: string, quantity: number) {
    this.items.push({
      item,
      quantity,
    });

    return this;
  }

  public setDeliveryAdress(item: string) {
    this.deliveryAddress = item;

    return this;
  }

  public setDiscountCoupon(coupon: string) {
    this.discountCoupon = coupon;

    return this;
  }

  public build() {
    return this;
  }
}

export default Order;
