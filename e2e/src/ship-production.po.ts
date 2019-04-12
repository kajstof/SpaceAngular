import { element, by, browser } from 'protractor';

export class ShipProduction {
  nagivateTo() {
    browser.get('/space');
  }

  setShipQuantity(number: number) {
    const input = element(by.name('shipsCount'));
    input.clear().then(() => input.sendKeys(number));
  }

  setFighterType() {
    element.all(by.css(`[name="shipType"]`)).first().click();
  }

  submitProduceForm() {
    element(by.buttonText('Produkuj')).click();
  }

  getShipsCount() {
    const shipCount = element.all(by.css('app-space-ship')).count();
    expect(shipCount).toEqual(1);
  }
}