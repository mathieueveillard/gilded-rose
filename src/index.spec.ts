import runGoldenMaster from "jest-golden-master"
import { GildedRose } from "."
import { Item } from './Items/item'

// si un article diminue deux fois plus rapidement une fois la date de vente passée.
test("Once the sell by date has passed, Quality degrades twice as fast", async () => {
  runGoldenMaster(async () => {
    const items = [new Item("Standard Item", 0, 20)];
    const gildedRose = new GildedRose(items);
    gildedRose.updateQuality();
  })
});

// si la qualité d'un article ne devient jamais négative.
test("The Quality of an item is never negative", async () => {
  runGoldenMaster(async () => {
    const items = [new Item("Standard Item", 10, 0)];
    const gildedRose = new GildedRose(items);
    gildedRose.updateQuality();
  })
});

//si la qualité de l'article "Aged Brie" augmente à mesure qu'il vieillit.
test("Aged Brie actually increases in Quality the older it gets", async () => {
  runGoldenMaster(async () => {
    const items = [new Item("Aged Brie", 10, 20)];
    const gildedRose = new GildedRose(items);
    gildedRose.updateQuality();
  })
});

// si la qualité d'un article ne dépasse jamais la valeur de 50.
test("The Quality of an item is never more than 50", async () => {
  runGoldenMaster(async () => {
    const items = [new Item("Standard Item", 10, 50)];
    const gildedRose = new GildedRose(items);
    gildedRose.updateQuality();
  })
});

// OK
test("Sulfuras being a legendary item, never has to be sold or decreases in Quality", async () => {
  runGoldenMaster(async () => {
    const gildedRose = new GildedRose([new Item("Sulfuras, Hand of Ragnaros", 20, 50)])
    gildedRose.updateQuality()
  })
})
// !
test("Backstage passes, increases in Quality as its SellIn value approaches 10 days or less", async () => {
  runGoldenMaster(async () => {
    const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 9, 10)])
    gildedRose.updateQuality()
  })
})
// !
test("Backstage passes, increases in Quality as its SellIn value approaches 5 days or less", async () => {
  runGoldenMaster(async () => {
    const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 4, 10)])
    gildedRose.updateQuality()
  })
})
// OK
test("Backstage passes, increases in Quality as its SellIn value approaches 0 day", async () => {
  runGoldenMaster(async () => {
    const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10)])
    gildedRose.updateQuality()
  })
})
