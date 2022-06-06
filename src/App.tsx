import { useState } from 'react';
import {
  AppBar,
  Container,
  Toolbar,
  Paper,
  Button,
  Typography,
  TextField,
  InputAdornment,
  Tooltip,
  IconButton,
} from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { AddItems, DisplayItems } from 'pages';
import useGildedRoseStore from 'hooks/useGildedRoseStore';
import { Flex } from 'styles/styledComponents';
import { initialState } from 'store/context';
import { GildedRoseProviderProps } from 'index.interface';

const App = () => {
  const { items, days, setState } = useGildedRoseStore();
  const [activeStep, setActiveStep] = useState<number>(0);

  const handleNext = () => setActiveStep(activeStep + 1);

  const handleBack = () => {
    setState(initialState);
    setActiveStep(activeStep - 1);
  };

  //@ts-ignore
  const handleSetDays = ({ target: { value } }) => {
    setState((prev: GildedRoseProviderProps) => ({
      ...prev,
      days: Number(value),
    }));
  };

  const handleClearItems = () =>
    setState((prev: GildedRoseProviderProps) => ({
      ...prev,
      items: [],
    }));

  return (
    <>
      <AppBar position="relative" color="primary">
        <Toolbar>
          <Typography variant="h5">Gilded Rose</Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="xl">
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Flex justify="space-between" marginBottom="20px">
            <Typography variant="h5">
              {activeStep ? 'Items' : 'Add Items'}
            </Typography>
            {!activeStep && (
              <TextField
                variant="standard"
                type="number"
                sx={{ width: '90px' }}
                InputProps={{
                  inputProps: { min: 1, max: 20 },
                  endAdornment: (
                    <InputAdornment position="start">days</InputAdornment>
                  ),
                }}
                value={days}
                onChange={handleSetDays}
              />
            )}
          </Flex>

          <>
            {activeStep ? <DisplayItems /> : <AddItems />}
            <Flex justify="space-between" marginTop="30px">
              <Flex align="center">
                {!activeStep && (
                  <>
                    <Typography>Total items: {items.length}</Typography>
                    <Tooltip title="Clear items">
                      <IconButton sx={{ ml: 1 }} onClick={handleClearItems}>
                        <HighlightOffIcon />
                      </IconButton>
                    </Tooltip>
                  </>
                )}
              </Flex>
              <div>
                {activeStep !== 0 && <Button onClick={handleBack}>Back</Button>}
                <Button
                  variant="contained"
                  onClick={handleNext}
                  disabled={!items.length || !days}
                >
                  Next
                </Button>
              </div>
            </Flex>
          </>
        </Paper>
      </Container>
    </>
  );
};

export default App;
