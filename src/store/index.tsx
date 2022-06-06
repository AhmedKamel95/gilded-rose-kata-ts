/*
 *
 * Component: `GildedRoseProvider`
 *
 */
import { useState } from 'react';
import { GildedRoseProviderProps, ParentProps } from 'index.interface';
import GildedRoseContext, { initialState } from './context';

const GildedRoseProvider = ({ children }: ParentProps) => {
  const [context, setContext] = useState<GildedRoseProviderProps>(initialState);

  return (
    <GildedRoseContext.Provider
      value={{
        ...context,
        setState: setContext,
      }}
    >
      {children}
    </GildedRoseContext.Provider>
  );
};

export default GildedRoseProvider;
