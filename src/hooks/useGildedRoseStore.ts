/*
 *
 * Hook: `useGildedRoseStore`.
 *
 */
import { useContext } from 'react';
import GildedRoseContext from '../store/context';
import { GildedRoseStoreApi } from '../index.interface';

const useGildedRoseStore = (): GildedRoseStoreApi =>
  useContext(GildedRoseContext);

export default useGildedRoseStore;
