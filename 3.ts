interface Observer {
  update(drink: string): void;
}

class PromotionSystem implements Observer {
  update(drink: string): void {
    console.log(`Promotion: Enjoy a discount on ${drink}s!`);
  }
}

class DrinkOrder {
  observers: Observer[] = [];

  addObserver(observer: Observer) {
    this.observers.push(observer);
  }

  serveDrink(drink: string) {
    console.log(`Serving: ${drink}`);
    this.observers.forEach(o => o.update(drink));
  }
}

const promo = new PromotionSystem();
const order = new DrinkOrder();
order.addObserver(promo);
order.serveDrink("Latte");
