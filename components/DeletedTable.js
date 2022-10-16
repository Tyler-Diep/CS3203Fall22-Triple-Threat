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
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

export default function DeletedTable() {
  const rows = useSelector((state) => state.todo.deleted);

  const [moduleFilter, setModuleFilter] = React.useState("");

  const onModuleInput = (event) => {
    setModuleFilter(event.target.value);
    rows = rows.filter((item) => item.module.includes(moduleFilter));
    console.log(rows);
  };

  const filteredElements = rows.map((e) => (
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
                <Typography variant="h6">Deleted List</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell padding="checkbox" />
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{filteredElements}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
