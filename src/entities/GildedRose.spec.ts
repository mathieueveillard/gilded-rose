import runGoldenMaster from 'jest-golden-master';

import GildedRose from './GildedRose';
import Item from './Item';

describe('GildedRose', () => {

  it('should decrease SellIn and Quality for a normal item by 1', () => {
    runGoldenMaster(async () => {
      const store = new GildedRose([new Item('Normal Item', 10, 20)]);
      store.updateQuality();
      expect(store.items[0].sellIn).toBe(9);
      expect(store.items[0].quality).toBe(19);
    });
  });

  it('should degrade quality twice as fast once the sell by date has passed', () => {
    runGoldenMaster(async () => {
      const store = new GildedRose([new Item('Normal Item', 0, 20)]);
      store.updateQuality();
      expect(store.items[0].quality).toBe(18);
    });
  });

  it('should increase quality of Aged Brie as it gets older', () => {
    runGoldenMaster(async () => {
      const store = new GildedRose([new Item('Aged Brie', 10, 20)]);
      store.updateQuality();
      expect(store.items[0].quality).toBe(21);
    });
  });

  it('should not change quality or sellIn of Sulfuras', () => {
    runGoldenMaster(async () => {
      const store = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 10, 80)]);
      store.updateQuality();
      expect(store.items[0].quality).toBe(80);
      expect(store.items[0].sellIn).toBe(10);
    });
  });

  it('should increase quality of Backstage passes as SellIn approaches', () => {
    runGoldenMaster(async () => {
      const store = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20)]);
      store.updateQuality();
      expect(store.items[0].quality).toBe(21);
    });
  });

  it('should increase quality of Backstage passes by 2 when 10 days or less for SellIn', () => {
    runGoldenMaster(async () => {
      const store = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20)]);
      store.updateQuality();
      expect(store.items[0].quality).toBe(22);
    });
  });

  it('should increase quality of Backstage passes by 3 when 5 days or less for SellIn', () => {
    runGoldenMaster(async () => {
      const store = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20)]);
      store.updateQuality();
      expect(store.items[0].quality).toBe(23);
    });
  });

  it('should drop quality of Backstage passes to 0 after concert', () => {
    runGoldenMaster(async () => {
      const store = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20)]);
      store.updateQuality();
      expect(store.items[0].quality).toBe(0);
    });
  });

  it('should degrade quality of Conjured items twice as fast', () => {
    runGoldenMaster(async () => {
      const store = new GildedRose([new Item('Conjured', 10, 20)]);
      store.updateQuality();
      expect(store.items[0].quality).toBe(18);
    });
  });

  it('should not make quality negative', () => {
    runGoldenMaster(async () => {
      const store = new GildedRose([new Item('Normal Item', 10, 0)]);
      store.updateQuality();
      expect(store.items[0].quality).toBe(0);
    });
  });

  it('should not increase quality of any item above 50', () => {
    runGoldenMaster(async () => {
      const store = new GildedRose([new Item('Aged Brie', 10, 50)]);
      store.updateQuality();
      expect(store.items[0].quality).toBe(50);
    });
  });

  it('should degrade quality of Conjured items four times as fast after sell date', () => {
    runGoldenMaster(async () => {
      const store = new GildedRose([new Item('Conjured', 0, 20)]);
      store.updateQuality();
      expect(store.items[0].quality).toBe(16);
    });
  });

  it('should reset quality to 50 if it exceeds 50 for non-Sulfuras items', () => {
    runGoldenMaster(async () => {
      const store = new GildedRose([new Item('Aged Brie', -1, 51)]);
      store.updateQuality();
      expect(store.items[0].quality).toBe(50);
    });
  });

  it('should initialize GildedRose with empty items array using default constructor', () => {
    runGoldenMaster(async () => {
      const store = new GildedRose();
      expect(store.items.length).toBe(0);
    });
  });

  it('should set quality to 0 if an item\'s quality becomes negative', () => {
    runGoldenMaster(async () => {
      const store = new GildedRose([new Item('Test Item', 10, -5)]);
      store.updateQuality();
      expect(store.items[0].quality).toBe(0);
    });
  });

  it('should increase quality of Aged Brie by 2 when sellIn is negative and quality is less than 50', () => {
    runGoldenMaster(async () => {
      const store = new GildedRose([new Item('Aged Brie', -1, 48)]);
      store.updateQuality();
      expect(store.items[0].quality).toBe(50);
    });
  });

  it('should reset quality to 0 if a Conjured item goes below 0', () => {
    runGoldenMaster(async () => {
      const store = new GildedRose([new Item('Conjured', 10, 1)]);
      store.updateQuality();  // After updating, quality should be -1, but the check should reset it to 0
      expect(store.items[0].quality).toBe(0);
    });
  });


});
