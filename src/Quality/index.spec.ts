import Quality from "."
import { Item } from "../Items/index"

test("Should increase quality for Aged Brie", () => {
  const item = new Item("Standard Item", 10, 20)
  const quality = new Quality(item)
  quality.QualityAgedBrie()
  expect(item.quality).toBe(21)
})

test("Should update quality for Backstage Passes", () => {

  const item1 = new Item("Backstage Passes", 15, 30);
  const item2 = new Item("Backstage Passes", 8, 30);
  const item3 = new Item("Backstage Passes", 3, 30);
  const item4 = new Item("Backstage Passes", 0, 30);

  const quality1 = new Quality(item1);
  const quality2 = new Quality(item2);
  const quality3 = new Quality(item3);
  const quality4 = new Quality(item4);

  quality1.QualityBackstagePasses();
  quality2.QualityBackstagePasses();
  quality3.QualityBackstagePasses();
  quality4.QualityBackstagePasses();

  expect(item1.quality).toBe(31);
  expect(item2.quality).toBe(32);
  expect(item3.quality).toBe(33);
  expect(item4.quality).toBe(0);
})

test("Should decrease quality for Regular Item", () => {
  const item = new Item("Regular Item", 5, 20)
  const quality = new Quality(item);

  quality.QualityRegularItem()
  expect(item.quality).toBe(19)
});