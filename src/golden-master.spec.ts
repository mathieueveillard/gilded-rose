import runGoldenMaster from 'jest-golden-master'
import { Item, GildedRose } from '.'

test("Ceci est un test", async () => {
    runGoldenMaster(async () => {
        const item1 = new Item("Aged Brie", 10, 50);
        const itemsArray = [item1];
        const gr = new GildedRose()
    })
})