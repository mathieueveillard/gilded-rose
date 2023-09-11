import runGoldenMaster from 'jest-golden-master';

import Item from './Item';

describe('Item', () => {
  it('should initialize correctly', () => {
    runGoldenMaster(async () => {
      const item = new Item('Test Item', 10, 20);
      expect(item.name).toBe('Test Item');
      expect(item.sellIn).toBe(10);
      expect(item.quality).toBe(20);
    });
  });

  it('should set and get properties correctly', () => {
    runGoldenMaster(async () => {
      const item = new Item('Test Item', 10, 20);
      item.name = 'New Test Item';
      item.sellIn = 5;
      item.quality = 25;
      expect(item.name).toBe('New Test Item');
      expect(item.sellIn).toBe(5);
      expect(item.quality).toBe(25);
    });
  });
});
