import Head from "next/head";
import styles from "../styles/Home.module.css";
import TodoTable from "../components/TodoTable";
import WelcomeHeader from "../components/WelcomeHeader";
import NavBar from "../components/NavBar";
import { useUser } from "@auth0/nextjs-auth0/";
import { Button } from "@mui/material";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { SET_COMPLETED, SET_DELETED, SET_TODOS } from "../redux/todosSlice";

const handleLogIn = async(userEmail) => {
  console.log(userEmail);
  const dispatch = useDispatch();

  const response = await fetch("/api/id?" + new URLSearchParams({email: userEmail}), {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    });
  
  const data = await response.json();

  console.log(data.data);

  dispatch(SET_TODOS(data.data.todos));
  dispatch(SET_COMPLETED(data.data.completed));
  dispatch(SET_DELETED(data.data.deleted));
}

export default function Home() {
  
  const { user, error, isLoading } = useUser();
  

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (!user) {
    return (
      <main className={styles.main}>
        <WelcomeHeader />
        <Link href="/api/auth/login"><Button variant="contained" color="success">Login</Button></Link>
      </main>
    );
  }

  if (user) {
    handleLogIn(user.email);
  }

  return (
    user && (
      <div className={styles.container}>
        <Head>
          <title>Your Agenda</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <NavBar />
        <main className={styles.main}>
          <WelcomeHeader />
          <h1>{user.email}</h1>
          <TodoTable />
        </main>
      </div>
    )
  );
}
