import { GildedRose } from '../app/gilded-rose';
import { Item } from '../app/item';

describe('Gilded Rose', () => {
  it('Should add new item', () => {
    const gildedRose = new GildedRose([new Item('foo', 4, 10)]);
    const added = gildedRose.items[0];
    expect(added.name).toEqual('foo');
    expect(added.sellIn).toEqual(4);
    expect(added.quality).toEqual(10);
  });

  describe('General items quality rules', () => {
    it('Should degrade quality by 1 after each SellIn day passed', () => {
      const gildedRose = new GildedRose([new Item('foo', 3, 8)]);
      const items = gildedRose.updateQuality();
      const added = items[0];
      expect(added.sellIn).toEqual(2);
      expect(added.quality).toEqual(7);
    });

    it('Should degrade quality 2x when SellIn date have passed (i.e euqals 0)', () => {
      const gildedRose = new GildedRose([new Item('foo', 0, 4)]);
      const items = gildedRose.updateQuality();
      const added = items[0];
      expect(added.sellIn).toEqual(-1);
      expect(added.quality).toEqual(2);
    });

    it('Quality of an item is never negative', () => {
      const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
      const items = gildedRose.updateQuality();
      const added = items[0];
      expect(added.sellIn).toEqual(-1);
      expect(added.quality).toEqual(0);
    });
  });

  describe("'Aged Brie' quality rules", () => {
    it('Aged Brie increases in Quality the older it gets', () => {
      const gildedRose = new GildedRose([new Item('Aged Brie', 5, 30)]);
      const items = gildedRose.updateQuality();
      const added = items[0];
      expect(added.sellIn).toEqual(4);
      expect(added.quality).toEqual(31);
    });

    it('Aged Brie quality should never go above 50', () => {
      const gildedRose = new GildedRose([new Item('Aged Brie', 1, 50)]);
      const items = gildedRose.updateQuality();
      const added = items[0];
      expect(added.sellIn).toEqual(0);
      expect(added.quality).toEqual(50);
    });
  });

  describe("'Sulfuras' quality rules", () => {
    it('Sulfuras never has to be sold or decreases in quality', () => {
      const gildedRose = new GildedRose([
        new Item('Sulfuras, Hand of Ragnaros', 1, 80),
      ]);
      const items = gildedRose.updateQuality();
      const added = items[0];
      expect(added.sellIn).toEqual(1);
      expect(added.quality).toEqual(80);
    });
  });

  describe("'Backstage passes' quality rules", () => {
    it('Quality should never go above 50', () => {
      const gildedRose = new GildedRose([
        new Item('Backstage passes to a TAFKAL80ETC concert', 1, 50),
      ]);
      const items = gildedRose.updateQuality();
      const added = items[0];
      expect(added.sellIn).toEqual(0);
      expect(added.quality).toEqual(50);
    });

    it('Quality increases by 1 when more than 10 days remaining', () => {
      const gildedRose = new GildedRose([
        new Item('Backstage passes to a TAFKAL80ETC concert', 11, 24),
      ]);
      const items = gildedRose.updateQuality();
      const added = items[0];
      expect(added.sellIn).toEqual(10);
      expect(added.quality).toEqual(25);
    });

    it('Quality increases by 2 when more than 5 days remaining', () => {
      const gildedRose = new GildedRose([
        new Item('Backstage passes to a TAFKAL80ETC concert', 6, 10),
      ]);
      const items = gildedRose.updateQuality();
      const added = items[0];
      expect(added.sellIn).toEqual(5);
      expect(added.quality).toEqual(12);
    });

    it('Quality increases by 3 when less than 5 days remaining', () => {
      const gildedRose = new GildedRose([
        new Item('Backstage passes to a TAFKAL80ETC concert', 4, 5),
      ]);
      const items = gildedRose.updateQuality();
      const added = items[0];
      expect(added.sellIn).toEqual(3);
      expect(added.quality).toEqual(8);
    });

    it('Quality drops to 0 after the concert passes', () => {
      const gildedRose = new GildedRose([
        new Item('Backstage passes to a TAFKAL80ETC concert', 0, 10),
      ]);
      const items = gildedRose.updateQuality();
      const added = items[0];
      expect(added.sellIn).toEqual(-1);
      expect(added.quality).toEqual(0);
    });
  });

  describe("'Conjured' items quality rules", () => {
    it('Quality degrades twice as fast as normal items', () => {
      const gildedRose = new GildedRose([new Item('Conjured', 4, 2)]);
      const items = gildedRose.updateQuality();
      const added = items[0];
      expect(added.sellIn).toEqual(3);
      expect(added.quality).toEqual(0);
    });
  });
});
