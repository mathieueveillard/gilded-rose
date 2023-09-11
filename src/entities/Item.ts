class Item {
  private _name: string;
  private _sellIn: number;
  private _quality: number;

  constructor(name: string, sellIn: number, quality: number) {
    this._name = name;
    this._sellIn = sellIn;
    this._quality = quality;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get sellIn(): number {
    return this._sellIn;
  }

  set sellIn(value: number) {
    this._sellIn = value;
  }

  get quality(): number {
    return this._quality;
  }

  set quality(value: number) {
    this._quality = value;
  }
}

export default Item;
