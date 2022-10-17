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
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { ViewModuleSharp } from "@mui/icons-material";

export default function ModuleTable() {
  const rows = useSelector((state) => state.todo.todos);

  const [moduleFilter, setModuleFilter] = React.useState("");

  const onModuleInput = (event) => {
    setModuleFilter(event.target.value);
    rows = rows.filter((item) => item.module.includes(moduleFilter));
    console.log(rows);
  };

  const modules = Array.from(new Set(rows.map((item) => item.module)));
  const menuItems = modules.map((item) => (
    <MenuItem value={item}>{item}</MenuItem>
  ));

  const filteredElements = rows
    .filter((e) => e.module == moduleFilter)
    .map((e) => (
      <TableRow key={e.id}>
        <TableCell padding="checkbox">
          <Checkbox color="success"></Checkbox>
        </TableCell>
        <TableCell>{e.task}</TableCell>
        <TableCell align="center">
          <Chip label={e.module} color="info" />
        </TableCell>
        <TableCell align="right">{e.date}</TableCell>
      </TableRow>
    ));

  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Link href="/">
          <Button variant="contained" color="secondary">
            Todo List
          </Button>
        </Link>
        <Link href="/modules">
          <Button variant="contained" color="secondary">
            Filter by Modules
          </Button>
        </Link>

        <Link href="/deleted">
          <Button variant="contained" color="primary">
            Deleted Items
          </Button>
        </Link>
      </Stack>
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
                <Typography variant="h6">Module List</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell padding="checkbox" />
              <TableCell align="center">
                <TextField
                  disabled
                  label="Filter Module"
                  value={moduleFilter}
                  onChange={onModuleInput}
                ></TextField>

                <Select
                  label="Filter Module"
                  value={moduleFilter}
                  onChange={onModuleInput}
                >
                  {menuItems}
                </Select>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{filteredElements}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
