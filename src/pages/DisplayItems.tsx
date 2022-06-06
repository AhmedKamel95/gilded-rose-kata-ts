import { Grid } from '@mui/material';
import useGildedRoseStore from 'hooks/useGildedRoseStore';
import { DayTable } from 'components';

const DisplayItems = () => {
  const { days } = useGildedRoseStore();

  return (
    <Grid container spacing={3}>
      {Array.from(Array(days).keys()).map((day, idx) => {
        return (
          <Grid key={idx} item xs={4}>
            <DayTable day={day} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default DisplayItems;
