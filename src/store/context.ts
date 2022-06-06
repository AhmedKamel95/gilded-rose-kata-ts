/**
 *
 * Context: GildedRoseContext
 *
 */
import { createContext } from 'react';
import { GildedRoseProviderProps, GildedRoseStoreApi } from 'index.interface';

const defaultFN = () => null;

export const initialState: GildedRoseProviderProps = {
  items: [],
  isOpen: false,
  selectedItem: undefined,
  days: 10,
};

const GildedRoseContext = createContext<GildedRoseStoreApi>({
  ...initialState,
  setState: defaultFN,
});

export default GildedRoseContext;
