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
      const item = this.items[i];
      console.log("Pour chaque objet avec: " + this.items[i].name + " " + this.items[i].sellIn + " " + this.items[i].quality);
      if (
        item.name !== "Aged Brie" &&
        item.name !== "Backstage passes to a TAFKAL80ETC concert" &&
        item.quality > 0 &&
        item.name !== "Sulfuras, Hand of Ragnaros"
      ) {
        console.log("Si l'objet n'est pas un Aged Brie ou un Backstage passes to a TAFKAL80ETC concert et que la qualité est supérieure à 0 et que l'objet n'est pas un Sulfuras, Hand of Ragnaros")

        item.quality -= 1;
        console.log("On décrémente la qualité de 1");
      } else if (
        (item.name === "Aged Brie" || item.name === "Backstage passes to a TAFKAL80ETC concert") &&
        item.quality < 50
      ) {
        console.log("Si l'objet est un Aged Brie ou un Backstage passes to a TAFKAL80ETC concert");

        item.quality += 1;
        console.log("On incrémente la qualité de 1");

        if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
          console.log("Si l'objet est un Backstage passes to a TAFKAL80ETC concert");

          if (item.sellIn < 11 && item.quality < 50) {
            console.log("Si le sellIn est inférieur à 11");

            item.quality += 1;
            console.log("On incrémente la qualité de 1");
          }

          if (item.sellIn < 6 && item.quality < 50) {
            console.log("Si le sellIn est inférieur à 6");

            item.quality += 1;
            console.log("On incrémente la qualité de 1");
          }
        }
      }
      if (item.name !== "Sulfuras, Hand of Ragnaros") {
        console.log("Si l'objet n'est pas un Sulfuras, Hand of Ragnaros");

        item.sellIn -= 1;
        console.log("On décrémente le sellIn de 1");
      }
      if (item.sellIn < 0) {
        console.log("Si le sellIn est inférieur à 0");
        switch (item.name) {
          case "Aged Brie":
            console.log("Si l'objet est un Aged Brie");
            if (item.quality < 50) {
              console.log("Si la qualité est inférieure à 50");

              item.quality += 1;
              console.log("On incrémente la qualité de 1");
            }
            break;
          case "Backstage passes to a TAFKAL80ETC concert":
            console.log("Si l'objet est un Backstage passes to a TAFKAL80ETC concert");
            item.quality = 0;

            console.log("On décrémente la qualité de la qualité");
            break;
          default:
            console.log("Si l'objet n'est ni Aged Brie ni Backstage passes");
            if (item.quality > 0 && item.name !== "Sulfuras, Hand of Ragnaros") {
              console.log("Si la qualité est supérieure à 0 et n'est pas Sulfuras");

              item.quality -= 1;
              console.log("On décrémente la qualité de 1");
            }
            break;
        }
      }
    }

    return this.items;
  }
}
