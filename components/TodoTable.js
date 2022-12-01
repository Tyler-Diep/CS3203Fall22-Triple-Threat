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
  Card,
  CardActions,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { PREPEND, REMOVE, PREPEND_DELETE, TOGGLE_COMPLETED, PREPEND_COMPLETE, REMOVE_COMPLETE } from "../redux/todosSlice";

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

  
  let val = 0;

  rows.forEach((row) => {
    if (val < row.id) val = row.id;
  })

  const del = useSelector((state) => state.todo.deleted);
  del.forEach((row) => {
    if (val < row.id) val = row.id;
  })

  const comp = useSelector((state) => state.todo.completed);
  comp.forEach((row) => {
    if (val < row.id) val = row.id;
  })

  const [id, setId] = React.useState(val + 1);


  const [task, setTask] = React.useState("");

  const onTaskInput = (event) => {
    setTask(event.target.value);
    console.log(val);
  };

  const [checked, setChecked] = React.useState(false);

  const onCheck = (event) => {
    setChecked({...checked, [event.target.checked] : event.target.checked})
  }

  const onClickCheck = (todoID) => {
    dispatch(TOGGLE_COMPLETED(todoID));
  }

  const onClickDelete = (todoID, todo) => {
    dispatch(PREPEND_DELETE(todo)); // Add todo to the list of deleted todos
    dispatch(REMOVE(todoID)); // Remove the todo from the list
  };

  const onClickClear = () => {
    dispatch(PREPEND_COMPLETE()); // Add all checked tasks to the list of completed todos
    dispatch(REMOVE_COMPLETE()); // Clear all checked tasks from the todo list
  }

  return (
    <React.Fragment>
      <Card sx={{ m: 2 }}>
        <CardActions>
          <TextField sx={{ m: 1 }}
            label="Task"
            value={task}
            onChange={onTaskInput}>
          </TextField>
          <TextField sx={{ m: 1 }}
            label="Module"
            value={module}
            onChange={onModuleInput}>
          </TextField>
          <TextField
            id="date"
            label="Date"
            type="datetime-local"
            sx={{ width: 220, m: 1 }}
            onChange={onDateInput}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button sx={{ m: 1 }}
            variant="contained"
            color="secondary"
            onClick={() => {
              if (task != "" && module != "" && dateValue != "") {
                dispatch(
                  PREPEND({
                    task: task,
                    module: module,
                    date:
                      dateValue.split("T")[0] +
                      "\n" +
                      dateValue.split("T")[1],
                    id: id,
                    completed: false,
                  })
                ),
                  setId(id + 1),
                  console.log(rows);
              }
            }}
          >
            Add New
          </Button>
        </CardActions>
      </Card>
      <TableContainer component={Paper} sx={{ maxWidth: "750px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                align="left"
                colSpan={4}
                sx={{
                  borderBottom: "none",
                }}
              >
                <Typography variant="h6">To-do List</Typography>
              </TableCell>
              <TableCell align="right" sx={{ borderBottom: "none" }}>
                <Button 
                variant="contained" 
                color="success"
                onClick={() => onClickClear()}>Complete</Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell padding="checkbox"></TableCell>
              <TableCell align="left">Task</TableCell>
              <TableCell align="center">Module</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell padding="checkbox">
                  <Checkbox
                  checked = {row.completed}
                  onChange = {onCheck}
                  onClick={() => onClickCheck(row.id)}
                  color="success">
                  </Checkbox>
                </TableCell>
                <TableCell>{row.task}</TableCell>
                <TableCell align="center">
                  <Chip label={row.module} color="info" />
                </TableCell>
                <TableCell align="right">{row.date}</TableCell>
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
    </React.Fragment>
  );
}
