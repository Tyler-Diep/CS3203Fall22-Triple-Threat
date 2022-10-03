import * as React from "react";
import {
  Checkbox,
  TextField,
  Chip,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  Paper,
  Button,
  Typography,
} from "@mui/material";

import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const rows = [
  {
    task: "Buy some bread and milk",
    module: "A Label",
    date: "9/18/1998",
    id: 1,
  },
  {
    task: "Buy some milk and bread",
    module: "A Label",
    date: "11/03/2001",
    id: 2,
  },
  {
    task: "Buy some bread, and, milk",
    module: "A Label",
    date: "11/17/2004",
    id: 3,
  },
];

export default function TodoTable() {
  const [value, setValue] = React.useState(dayjs("2014-08-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <TableContainer component={Paper} sx={{ maxWidth: "600px" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell
              align="left"
              colSpan={3}
              sx={{
                borderBottom: "none",
              }}
            >
              <Typography variant="h6">To-do List</Typography>
            </TableCell>
            <TableCell align="right" sx={{ borderBottom: "none" }}>
              <Button variant="contained" color="secondary">
                Add New
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell padding="checkbox" />
            <TableCell>
              <TextField label="Task"></TextField>
            </TableCell>
            <TableCell align="center">
              <TextField label="Module"></TextField>
            </TableCell>
            <TableCell align="right">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Date"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell padding="checkbox">
                <Checkbox color="success"></Checkbox>
              </TableCell>
              <TableCell>{row.task}</TableCell>
              <TableCell align="center">
                <Chip label={row.module} color="info" />
              </TableCell>
              <TableCell align="right">{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
