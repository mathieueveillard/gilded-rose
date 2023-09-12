import runGoldenMaster from 'jest-golden-master'
import { Item, GildedRose } from '.'

test("Ceci est un test", async () => {
    runGoldenMaster(async () => {
        const item1 = new Item("Aged Brie", 10, 30);
        const itemsArray = [item1];
        const gr = new GildedRose(itemsArray)
        gr.updateQuality()
    })
})

test("sellIn inférieur à 0", async () => {
    runGoldenMaster(async () => {
        const item1 = new Item("Aged Brie", -1, 60);
        const itemsArray = [item1];
        const gr = new GildedRose(itemsArray)
        gr.updateQuality()
    })
})

test("sellIn inférieur à 0 et nom != Brie/TAFKAL80ETC/Sulfuras", async () => {
    runGoldenMaster(async () => {
        const item1 = new Item("Different", -1, 0);
        const itemsArray = [item1];
        const gr = new GildedRose(itemsArray)
        gr.updateQuality()
    })
})
test("sellIn inférieur à 0, nom =! sulfuras et quality > 0", async () => {
    runGoldenMaster(async () => {
        const item1 = new Item("Different", -1, 60);
        const itemsArray = [item1];
        const gr = new GildedRose(itemsArray)
        gr.updateQuality()
    })
})

test("sellIn inférieur à 0, nom = TAFKAL80ETC", async () => {
    runGoldenMaster(async () => {
        const item1 = new Item("Backstage passes to a TAFKAL80ETC concert", -1, 60);
        const itemsArray = [item1];
        const gr = new GildedRose(itemsArray)
        gr.updateQuality()
    })
})

test("sellIn inférieur à 0, nom != TAFKAL80ETC et quality <50", async () => {
    runGoldenMaster(async () => {
        const item1 = new Item("Backstage passes to a TAFKAL80ETC concert", -1, 40);
        const itemsArray = [item1];
        const gr = new GildedRose(itemsArray)
        gr.updateQuality()
    })
})