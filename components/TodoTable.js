import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Chip from '@mui/material/Chip';
import { Checkbox } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'

const rows = [
    {
        task: 'Buy some bread and milk',
        module: 'A Label',
        date: '9/18/1998',
        id: 1
    },
    {
        task: 'Buy some milk and bread',
        module: 'A Label',
        date: '11/03/2001',
        id: 2
    },
    {
        task: 'Buy some bread, and, milk',
        module: 'A Label',
        date: '11/17/2004',
        id: 3
    },
];

export default function TodoTable() {
    return (
        <TableContainer 
        component = {Paper}
        sx = {{maxWidth: '600px'}}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align='left' colSpan={3}
                        sx = {{
                            borderBottom: 'none' 
                            }}>
                                <Typography variant="h6">To-do List</Typography></TableCell>
                        <TableCell align='right' sx = {{borderBottom: 'none'}}><Button variant = "contained" color="secondary">Add New</Button></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell padding='checkbox'/>
                        <TableCell>Task</TableCell>
                        <TableCell align='center'>Module</TableCell>
                        <TableCell align='right'>Due Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key = {row.id}>
                            <TableCell padding='checkbox'><Checkbox color='success'></Checkbox></TableCell>
                            <TableCell>{row.task}</TableCell>
                            <TableCell align='center'><Chip label={row.module} color="info"/></TableCell>
                            <TableCell align='right'>{row.date}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}