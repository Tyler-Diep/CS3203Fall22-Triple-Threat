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
  IconButton,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { PREPEND, REMOVE, PREPEND_DELETE } from "../redux/todosSlice";

import DeleteIcon from "@mui/icons-material/Delete";

export default function TodoTable() {
  const rows = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

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

  const onClickDelete = (todoID, todo) => {
    dispatch(PREPEND_DELETE(todo)); // Add todo to the list of deleted todos
    dispatch(REMOVE(todoID)); // Remove the todo from the list
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
              <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                  if (task != "" && module != "" && dateValue != "") {
                    const dates = dateValue.split("T")[0].split("-");
                    dispatch(
                      PREPEND({
                        task: task,
                        module: module,
                        date: dates[1] + "/" + dates[2] + "/" + dates[0],
                        time: dateValue.split("T")[1],
                        id: id,
                      })
                    ),
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
                type="datetime-local"
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
              <TableCell align="right">{row.time}</TableCell>

              <TableCell padding="checkbox">
                <IconButton
                  edge="end"
                  aria-label="comments"
                  onClick={() => onClickDelete(row.id, row)}
                >
                  <DeleteIcon />
                </IconButton>{" "}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
