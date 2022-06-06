import { Button, Typography } from '@mui/material';
import useGildedRoseStore from 'hooks/useGildedRoseStore';
import { displayedItem } from 'index.interface';
import { ItemContainer } from 'styles/styledComponents';

const Item = ({ item }: { item: displayedItem }) => {
  const { setState } = useGildedRoseStore();

  const handleOpenDialog = (name: string) => () => {
    setState((prev) => ({
      ...prev,
      isOpen: true,
      selectedItem: name,
    }));
  };

  return (
    <ItemContainer>
      <img src={item.image} alt={item.name} />
      <Typography>{item.name}</Typography>
      <Button onClick={handleOpenDialog(item.name)}>Select</Button>
    </ItemContainer>
  );
};

export default Item;
