import runGoldenMaster from "jest-golden-master"
import { Item, GildedRose } from "."
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
