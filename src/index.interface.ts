/**
 *
 * Types: Gilded Rose
 *
 */

type Item = {
  name: string;
  sellIn: number;
  quality: number;
};

export type FormValues = Pick<Item, 'sellIn' | 'quality'>;

export interface displayedItem extends Item {
  id: number;
  image: string;
}

export interface GildedRoseProviderProps {
  items: Item[];
  isOpen: boolean;
  selectedItem?: string;
  days: number;
}

export interface ParentProps {
  children?: React.ReactNode;
}

export type SetGildedRoseState = React.Dispatch<
  React.SetStateAction<GildedRoseProviderProps>
>;

export type GildedRoseStoreApi = GildedRoseProviderProps & {
  setState: SetGildedRoseState;
};

export interface TableColumn {
  id: number;
  field: string;
  title: string;
  width?: number;
}

type StringBool = 'true' | '';
export interface FlexProps {
  column?: StringBool;
  reverse?: boolean;
  justify?: string;
  align?: string;
  padding?: string;
  margin?: string;
  marginTop?: string;
  marginBottom?: string;
}
