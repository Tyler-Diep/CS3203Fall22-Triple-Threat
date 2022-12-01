import * as React from "react";
import {
    Button,
    Stack,
} from "@mui/material";
import Link from "next/link";
import {useSelector } from "react-redux";
import { useUser } from "@auth0/nextjs-auth0/";



const handleLogOut = async(userTodos, userDeleted, userCompleted, userEmail) => {
    console.log(userEmail);

    console.log(userTodos);
    console.log(userDeleted);
    console.log(userCompleted);

    const response = await fetch("/api/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({email: userEmail, todos: userTodos, 
            deleted: userDeleted, completed: userCompleted }),
      });
    
    const data = await response.json();

    console.log(data);


}

export default function TableNav() {

    const { user, error, isLoading } = useUser();

    const todos = useSelector((state) => state.todo.todos);
    const deleted = useSelector((state) => state.todo.deleted);
    const completed = useSelector((state) => state.todo.completed);


    return (
        <Stack direction="row" justifyContent="center" spacing={2} padding={1}>
        <Link href="/" passHref><Button onClick={() => handleLogOut()} color="secondary">To-do List</Button></Link>
        <Link href="/modules" passHref><Button onClick={() => handleLogOut()} color="secondary">Modules</Button></Link>
        <Link href="/completed" passHref><Button onClick={() => handleLogOut()} color="secondary">Completed Tasks</Button></Link>
        <Link href="/deleted" passHref><Button onClick={() => handleLogOut()} color="secondary">Deleted Tasks</Button></Link>
        <Link href="/api/auth/logout"><Button onClick={() => handleLogOut(todos,deleted,completed, user.email)} variant="contained" color="success">Logout</Button></Link>
        </Stack>
    )
}