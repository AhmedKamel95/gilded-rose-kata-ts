import Grid from '@mui/material/Grid';
import { Item, Dialog } from 'components';
import { defaultItemsList } from 'utils/constants';
import { displayedItem } from 'index.interface';

const AddItems = () => {
  return (
    <Grid container spacing={3}>
      {defaultItemsList.map((item: displayedItem) => (
        <Grid item key={item.id} xs={12} sm={4}>
          <Item item={item} />
        </Grid>
      ))}
      <Dialog />
    </Grid>
  );
};

export default AddItems;
