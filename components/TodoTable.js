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
  const [dateValue, setDateValue] = React.useState("");

  const onDateInput = (event) => {
    setDateValue(event.target.value);
  };

  const [module, setModule] = React.useState("");

  const onModuleInput = (event) => {
    setModule(event.target.value);
  };

  const [task, setTask] = React.useState("");

  const onTaskInput = (event) => {
    setTask(event.target.value);
  };
  const [id, setId] = React.useState(4);

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
              <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                  if (task != "" && module != "" && dateValue != "") {
                    rows.push({
                      task: task,
                      module: module,
                      date:
                        dateValue.split("-")[1] +
                        "/" +
                        dateValue.split("-")[2] +
                        "/" +
                        dateValue.split("-")[0],
                      id: id,
                    }),
                      setId(id + 1),
                      console.log(rows);
                  }
                }}
              >
                Add New
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell padding="checkbox" />
            <TableCell>
              <TextField
                label="Task"
                value={task}
                onChange={onTaskInput}
              ></TextField>
            </TableCell>
            <TableCell align="center">
              <TextField
                label="Module"
                value={module}
                onChange={onModuleInput}
              ></TextField>
            </TableCell>
            <TableCell align="right">
              <TextField
                id="date"
                label="Date"
                type="date"
                sx={{ width: 220 }}
                onChange={onDateInput}
                InputLabelProps={{
                  shrink: true,
                }}
              />
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
