import * as React from "react";
import {
    Button,
    Stack,
} from "@mui/material";
import Link from "next/link";

export default function TableNav() {

    return (
        <Stack direction="row" justifyContent="center" spacing={2} padding={1}>
        <Link href="/" passHref><Button color="secondary">To-do List</Button></Link>
        <Link href="/modules" passHref><Button color="secondary">Modules</Button></Link>
        <Link href="/completed" passHref><Button color="secondary">Completed Tasks</Button></Link>
        <Link href="/deleted" passHref><Button color="secondary">Deleted Tasks</Button></Link>
        <Link href="/api/auth/logout"><Button variant="contained" color="success">Logout</Button></Link>
        </Stack>
    )
}