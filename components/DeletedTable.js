import * as React from "react";
import {
  Checkbox,
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
  Stack,
  IconButton,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

import ReplyIcon from "@mui/icons-material/Reply";
import { PREPEND, REMOVE_DELETE } from "../redux/todosSlice";



export default function DeletedTable() {

  // The rows in the deleted table will be the todo entries from the deleted list
  const rows = useSelector((state) => state.todo.deleted);

  // Used to dispatch actions(ie add/remove from todo/deleted list)
  const dispatch = useDispatch();


  // The deleted list 
  const deletedElements = rows.map((e) => (
    <TableRow key={e.id}>
      <TableCell padding="checkbox">
        <Checkbox color="success"></Checkbox>
      </TableCell>
      <TableCell>{e.task}</TableCell>
      <TableCell align="center">
        <Chip label={e.module} color="info" />
      </TableCell>
      <TableCell align="right">{e.date}</TableCell>
      <TableCell padding="checkbox">
                <IconButton
                  edge="end"
                  aria-label="comments"
                  onClick={() => onClickDelete(e.id, e)}
                >
                  <ReplyIcon />
                </IconButton>{" "}
              </TableCell>
    </TableRow>
  ));

  const onClickDelete = (todoID, todo) => {
    dispatch(PREPEND(todo)); // Add todo to the list of regular todos
    dispatch(REMOVE_DELETE(todoID)); // Remove the todo from the list
  };


  return (
    <div>
      <TableContainer component={Paper} sx={{ maxWidth: "750px" }}>
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
                <Typography variant="h6">Deleted Tasks</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell padding="checkbox" />
              <TableCell align="left">Task</TableCell>
              <TableCell align="center">Module</TableCell>
              <TableCell align="right">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{deletedElements}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
