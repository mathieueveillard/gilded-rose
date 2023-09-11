import { GildedRose, Item } from "./GildedRose";

describe("GildedRose", () => {
  it("should decrease the quality and sellIn for a normal item", () => {
    const gildedRose = new GildedRose([new Item("normal", 10, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(19);
  });

  it("should increase the quality for Aged Brie", () => {
    const gildedRose = new GildedRose([new Item("Aged Brie", 10, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(21);
  });

  it("should not change quality or sellIn for Sulfuras", () => {
    const gildedRose = new GildedRose([new Item("Sulfuras, Hand of Ragnaros", 10, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(10);
    expect(items[0].quality).toBe(20);
  });

  it("should decrease quality twice as fast when sellIn is below zero for a normal item", () => {
    const gildedRose = new GildedRose([new Item("normal", 0, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(18);
  });

  it("should never allow quality to go negative", () => {
    const gildedRose = new GildedRose([new Item("normal", 10, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it("should increase quality of Backstage passes by 2 when sellIn <= 10", () => {
    const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(22);
  });

  it("should increase quality of Backstage passes by 3 when sellIn <= 5", () => {
    const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(23);
  });

  it("should drop quality of Backstage passes to 0 after the concert (sellIn < 0)", () => {
    const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it("should never allow quality to be more than 50", () => {
    const gildedRose = new GildedRose([new Item("Aged Brie", 10, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });

  it("should not change quality for Sulfuras even when sellIn is negative", () => {
    const gildedRose = new GildedRose([new Item("Sulfuras, Hand of Ragnaros", -1, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(80);
  });

  it("should correctly update a list of various items", () => {
    const items = [
      new Item("normal", 15, 30),
      new Item("Aged Brie", 10, 25),
      new Item("Sulfuras, Hand of Ragnaros", 5, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 7, 20),
    ];
    const gildedRose = new GildedRose(items);
    const updatedItems = gildedRose.updateQuality();

    expect(updatedItems[0].sellIn).toBe(14);
    expect(updatedItems[0].quality).toBe(29);

    expect(updatedItems[1].sellIn).toBe(9);
    expect(updatedItems[1].quality).toBe(26);

    expect(updatedItems[2].sellIn).toBe(5);
    expect(updatedItems[2].quality).toBe(80);

    expect(updatedItems[3].sellIn).toBe(6);
    expect(updatedItems[3].quality).toBe(21);
  });
});
