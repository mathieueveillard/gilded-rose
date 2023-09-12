import { GildedRose } from "./index"
import { Item } from "./Entity/item"


test("should update the quality and sellIn of items correctly", () => {
  const items = [
    new Item("Aged Brie", 10, 30),
    new Item("Backstage passes to a TAFKAL80ETC concert", 0, 25),
    new Item("Backstage passes to a TAFKAL80ETC concert", 15, 25),
    new Item("Backstage passes to a TAFKAL80ETC concert", 10, 25),
    new Item("Backstage passes to a TAFKAL80ETC concert", 5, 25),
    new Item("Random items", 0, 8),
    new Item("Sulfuras, Hand of Ragnaros", 0, 80),
    new Item("Random items", 10, 50),
    new Item("Random items", 15, 0),
    new Item("Conjured Item", 12, 16),
    new Item("Conjured Item", 0, 16),
  ]

  const gildedRose = new GildedRose(items)
  const updatedItems = gildedRose.updateItem()

  expect(updatedItems[0].sellIn).toBe(9)
  expect(updatedItems[0].quality).toBe(31)

  expect(updatedItems[1].sellIn).toBe(-1)
  expect(updatedItems[1].quality).toBe(0)

  expect(updatedItems[2].sellIn).toBe(14)
  expect(updatedItems[2].quality).toBe(26)

  expect(updatedItems[3].sellIn).toBe(9)
  expect(updatedItems[3].quality).toBe(27)

  expect(updatedItems[4].sellIn).toBe(4)
  expect(updatedItems[4].quality).toBe(28)

  expect(updatedItems[5].sellIn).toBe(-1)
  expect(updatedItems[5].quality).toBe(6)

  expect(updatedItems[6].sellIn).toBe(0)
  expect(updatedItems[6].quality).toBe(80)

  expect(updatedItems[7].sellIn).toBe(9)
  expect(updatedItems[7].quality).toBe(49)

  expect(updatedItems[8].sellIn).toBe(14)
  expect(updatedItems[8].quality).toBe(0)

  expect(updatedItems[9].sellIn).toBe(11)
  expect(updatedItems[9].quality).toBe(14)

  expect(updatedItems[10].sellIn).toBe(-1)
  expect(updatedItems[10].quality).toBe(14)
})
