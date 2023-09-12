export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      console.log(`Before update, ${this.items[i].name} has this quality : ${this.items[i].quality} and this sellin : ${this.items[i].sellIn}.`)
      if (this.items[i].name != "Aged Brie" && this.items[i].name != "Backstage passes to a TAFKAL80ETC concert") {
        if (this.items[i].quality > 0) {
          if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
            this.items[i].quality = this.items[i].quality - 1;
            // console.log(`This item : ${this.items[i].name} got removed 1 quality number and now has the following quality: ${this.items[i].quality}.`)
          }
        }
      } else {
        if (this.items[i].quality < 50) {
          if (this.items[i].name == "Backstage passes to a TAFKAL80ETC concert") {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 2;
                // console.log(`This item : ${this.items[i]} got added 1 quality number and now has the following quality: ${this.items[i].quality}.`)
              }
            }
            if (this.items[i].sellIn < 6) {
              console.log(`${this.items[i].name}`)
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
                // console.log(`This item : ${this.items[i].name} got added 1 quality number and now has the following quality: ${this.items[i].quality}.`)
              }
            }
          }
        }
      }
      if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
        this.items[i].sellIn = this.items[i].sellIn - 1;
        // console.log(`This item : ${this.items[i].name} got removed 1 sellin number and now has the following sellin: ${this.items[i].sellIn}.`)
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != "Aged Brie") {
          if (this.items[i].name != "Backstage passes to a TAFKAL80ETC concert") {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
                this.items[i].quality = this.items[i].quality - 1;
                // console.log(`This item : ${this.items[i].name} got removed 1 quality number and now has the following quality: ${this.items[i].quality}.`)
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
            // console.log(`This item : ${this.items[i].name} got added 1 quality number and now has the following quality: ${this.items[i].quality}.`)
          }
        }
      }
      console.log(`After update, ${this.items[i].name} has this quality : ${this.items[i].quality} and this sellin : ${this.items[i].sellIn}.`)
    }

    return this.items;
  }
}
