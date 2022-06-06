import { Item } from "./item";
import { increaseQuality, decreaseQuality } from "./utils";

const updateQualityItem = (item: Item): Item => {
  // Normal quality degrade by 1
  item.quality = decreaseQuality(item.quality);
  // Once the sell by date has passed, Quality degrades twice as fast (another degrade by 1)
  item.quality =
    item.sellIn <= 0 ? decreaseQuality(item.quality) : item.quality;

  return item;
};

export const updateQualityForNormalItem = (item: Item): Item => {
  item = updateQualityItem(item);
  item.sellIn -= 1;

  return item;
};

/**
 *
 * Special items
 *
 */

// "Aged Brie" actually increases in Quality the older it gets
export const updateQualityForAgedBrie = (item: Item): Item => {
  item.quality = increaseQuality(item.quality);
  item.quality = item.sellIn < 0 ? increaseQuality(item.quality) : item.quality;
  item.sellIn -= 1;

  return item;
};

const increaseQualityForBackstagePasses = (item: Item): number => {
  // normal increase in quality
  let quality = increaseQuality(item.quality);
  // now increase one more time (2) when there are 10 days or less
  quality = item.sellIn <= 10 ? increaseQuality(quality) : quality;
  // now increase another time (3) when there are 5 days or less
  quality = item.sellIn <= 5 ? increaseQuality(quality) : quality;

  return quality;
};

export const updateQualityForBackstagePasses = (item: Item): Item => {
  // Quality increases the sooner the concert appraoches, however,
  // Quality drops to 0 after the concert, no more need for it :(
  item.quality = item.sellIn <= 0 ? 0 : increaseQualityForBackstagePasses(item);
  item.sellIn -= 1;

  return item;
};

// Sulfuras, being a legendary item, never has to be sold or decreases in Quality, thus return item
export const updateQualityForSulfuras = (item: Item): Item => item;

export const updateQualityForConjured = (item: Item): Item => {
  // "Conjured" items degrade in Quality twice as fast as normal items
  item = updateQualityItem(item);
  item = updateQualityItem(item);

  item.sellIn -= 1;

  return item;
};
