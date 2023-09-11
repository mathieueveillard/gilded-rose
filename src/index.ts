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
      console.log("Pour chaque objet avec: " + this.items[i].name + " " + this.items[i].sellIn + " " + this.items[i].quality);
      if (
        this.items[i].name != "Aged Brie" &&
        this.items[i].name != "Backstage passes to a TAFKAL80ETC concert") {
        console.log("Si l'objet n'est pas un Aged Brie ou un Backstage passes to a TAFKAL80ETC concert")
        if (this.items[i].quality > 0) {
          console.log("Si la qualité est supérieure à 0")
          if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
            console.log("Si l'objet n'est pas un Sulfuras, Hand of Ragnaros")
            this.items[i].quality = this.items[i].quality - 1;
            console.log("On décrémente la qualité de 1");
          }
        }
      } else {
        console.log("Si l'objet est un Aged Brie ou un Backstage passes to a TAFKAL80ETC concert")
        if (this.items[i].quality < 50) {
          console.log("Si la qualité est inférieure à 50")
          this.items[i].quality = this.items[i].quality + 1;
          console.log("On incrémente la qualité de 1");
          if (this.items[i].name == "Backstage passes to a TAFKAL80ETC concert") {
            console.log("Si l'objet est un Backstage passes to a TAFKAL80ETC concert")
            if (this.items[i].sellIn < 11) {
              console.log("Si le sellIn est inférieur à 11")
              if (this.items[i].quality < 50) {
                console.log("Si la qualité est inférieure à 50")
                this.items[i].quality = this.items[i].quality + 1;
                console.log("On incrémente la qualité de 1");
              }
            }
            if (this.items[i].sellIn < 6) {
              console.log("Si le sellIn est inférieur à 6")
              if (this.items[i].quality < 50) {
                console.log("Si la qualité est inférieure à 50")
                this.items[i].quality = this.items[i].quality + 1;
                console.log("On incrémente la qualité de 1");
              }
            }
          }
        }
      }
      if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
        console.log("Si l'objet n'est pas un Sulfuras, Hand of Ragnaros")
        this.items[i].sellIn = this.items[i].sellIn - 1;
        console.log("On décrémente le sellIn de 1");
      }
      if (this.items[i].sellIn < 0) {
        console.log("Si le sellIn est inférieur à 0")
        if (this.items[i].name != "Aged Brie") {
          console.log("Si l'objet n'est pas un Aged Brie")
          if (this.items[i].name != "Backstage passes to a TAFKAL80ETC concert") {
            console.log("Si l'objet n'est pas un Backstage passes to a TAFKAL80ETC concert")
            if (this.items[i].quality > 0) {
              console.log("Si la qualité est supérieure à 0")
              if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
                console.log("Si l'objet n'est pas un Sulfuras, Hand of Ragnaros")
                this.items[i].quality = this.items[i].quality - 1;
                console.log("On décrémente la qualité de 1");
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
            console.log("On décrémente la qualité de la qualité");
          }
        } else {
          console.log("Si l'objet est un Aged Brie")
          if (this.items[i].quality < 50) {
            console.log("Si la qualité est inférieure à 50")
            this.items[i].quality = this.items[i].quality + 1;
            console.log("On incrémente la qualité de 1");
          }
        }
      }
    }

    return this.items;
  }
}
