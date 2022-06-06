import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  tableCellClasses,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { GildedRose } from 'app/gilded-rose';
import useGildedRoseStore from 'hooks/useGildedRoseStore';
import { columns } from 'utils/constants';
import { TableColumn } from 'index.interface';

const DayData = ({ day }: { day: number }) => {
  const { items } = useGildedRoseStore();
  const gildedRose = new GildedRose(items);
  if (day) gildedRose.updateQuality();

  return (
    <Paper variant="outlined">
      <TableContainer>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <StyledTableCell align="center" colSpan={3}>
                Day {day}
              </StyledTableCell>
            </TableRow>
            <TableRow>
              {columns.map((column: TableColumn, idx: number) => (
                <StyledTableCell
                  align={idx ? 'center' : 'left'}
                  key={column.id}
                >
                  {column.title}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((row, idx) => (
              <StyledTableRow key={idx}>
                {columns.map((column: TableColumn, idx: number) => (
                  <StyledTableCell
                    align={idx ? 'center' : 'left'}
                    key={column.id}
                  >
                    {
                      //@ts-ignore
                      row[column.field]
                    }
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default DayData;

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#002e63',
    color: 'white',
    fontSize: '1em',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: '0.9em',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#F5F5F5',
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
