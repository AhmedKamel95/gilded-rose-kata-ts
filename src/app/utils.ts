export const MIN_QUALITY = 0;
export const MAX_QUALITY = 50;

const isQualityLessThanMax = (quality: number): boolean =>
  quality < MAX_QUALITY;
const isQualityHigherThanMin = (quality: number): boolean =>
  quality > MIN_QUALITY;

// Since the Quality of an item is never more than 50, we return the quality
export const increaseQuality = (quality: number): number =>
  isQualityLessThanMax(quality) ? quality + 1 : quality;

// Since the Quality of an item is never negative, we return the quality
export const decreaseQuality = (quality: number): number =>
  isQualityHigherThanMin(quality) ? quality - 1 : quality;
