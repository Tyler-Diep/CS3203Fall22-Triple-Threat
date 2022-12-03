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
  Stack,
  MenuItem,
  Select,
  Card,
  CardActions,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

export default function ModuleTable() {
  const rows = useSelector((state) => state.todo.todos);

  const [moduleFilter, setModuleFilter] = React.useState("");

  const onModuleInput = (event) => {
    setModuleFilter(event.target.value);
  };

  const modules = Array.from(new Set(rows.map((item) => item.module)));
  const menuItems = modules.map((item) => (
    <MenuItem value={item}>{item}</MenuItem>
  ));

  const filteredElements = rows
    .filter((e) => e.module == moduleFilter)
    .map((e) => (
      <TableRow key={e.id}>
        <TableCell>{e.task}</TableCell>
        <TableCell align="center">
          <Chip label={e.module} color="info" />
        </TableCell>
        <TableCell align="right">{e.date}</TableCell>
      </TableRow>
    ));

  return (
    <React.Fragment>
      <Card sx={{ m: 2 }}>
        <CardActions>
          <TextField
            disabled
            label="Filter Module"
            value={moduleFilter}
          ></TextField>
          <Select
            label="Filter Module"
            value={moduleFilter}
            onChange={onModuleInput}
          >
            {menuItems}
          </Select>
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
                <Typography variant="h6">Module List</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">Task</TableCell>
              <TableCell align="center">Module</TableCell>
              <TableCell align="right">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{filteredElements}</TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
}
