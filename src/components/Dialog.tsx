import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  Button,
  Dialog,
  DialogTitle,
  TextField,
  DialogContent,
  Grid,
  InputAdornment,
  Alert,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import useGildedRoseStore from 'hooks/useGildedRoseStore';
import { MIN_QUALITY, MAX_QUALITY } from 'app/utils';
import { ErrorMessage } from 'styles/styledComponents';
import { FormValues, GildedRoseProviderProps } from 'index.interface';

const ItemDialog = () => {
  const { selectedItem, isOpen, setState } = useGildedRoseStore();

  const isSulfuras: boolean = selectedItem === 'Sulfuras, Hand of Ragnaros';

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      sellIn: '',
      quality: '',
    },
  });

  const handleClose = () => {
    reset();
    setState((prev) => ({
      ...prev,
      isOpen: false,
    }));
  };

  const onSubmit: SubmitHandler<FormValues> = (values) => {
    //@ts-ignore
    setState((prev: GildedRoseProviderProps) => ({
      ...prev,
      isOpen: false,
      selectedItem: undefined,
      items: [
        ...prev.items,
        {
          name: selectedItem,
          sellIn: values.sellIn,
          quality: values.quality,
        },
      ],
    }));
  };

  useEffect(() => {
    if (isSulfuras) {
      setValue('sellIn', '0');
      setValue('quality', '80');
    }
    if (isSubmitSuccessful) reset();
  }, [isSulfuras, setValue, isSubmitSuccessful, reset]);

  return (
    <Dialog onClose={handleClose} open={isOpen}>
      <DialogTitle>Set information</DialogTitle>
      {isSulfuras && <Alert severity="error">Legendary item</Alert>}

      <DialogContent>
        <form
          onSubmit={
            //@ts-ignore
            handleSubmit(onSubmit)
          }
        >
          <Grid container direction="column" rowSpacing={3}>
            <Grid item>
              <TextField
                label="Sell in"
                variant="standard"
                fullWidth
                type="number"
                disabled={isSulfuras}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">days</InputAdornment>
                  ),
                }}
                {...register('sellIn', {
                  valueAsNumber: true,
                  required: '* required',
                })}
                error={!!errors.sellIn}
              />
              {errors.sellIn && (
                <ErrorMessage>{errors.sellIn.message}</ErrorMessage>
              )}
            </Grid>

            <Grid item>
              <TextField
                label="Quality"
                variant="standard"
                type="number"
                fullWidth
                disabled={isSulfuras}
                InputProps={{
                  inputProps: { min: MIN_QUALITY, max: MAX_QUALITY },
                  endAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
                {...register('quality', {
                  valueAsNumber: true,
                  required: '* required',
                  min: MIN_QUALITY,
                })}
                error={!!errors.quality}
              />
              {errors.quality && (
                <ErrorMessage>{errors.quality.message}</ErrorMessage>
              )}
            </Grid>

            <Grid item container justifyContent="space-around">
              <Button
                variant="outlined"
                onClick={handleClose}
                size="small"
                startIcon={<HighlightOffIcon />}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                type="submit"
                size="small"
              >
                Add
              </Button>
            </Grid>
          </Grid>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ItemDialog;
