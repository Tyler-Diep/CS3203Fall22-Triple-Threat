import Head from "next/head";
import styles from "../styles/Home.module.css";
import TodoTable from "../components/TodoTable";
import WelcomeHeader from "../components/WelcomeHeader";
import NavBar from "../components/NavBar";
import { useUser } from "@auth0/nextjs-auth0/";
import { Button, Box } from "@mui/material";
import Link from "next/link";
import { Typography } from "@mui/material";

export default function Todos() {

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
        <Box sx={{ p: 4 }}>
          <Typography variant="h1" color="primary">
            Todo List
          </Typography>
          </Box>
          <h1>{user.email}</h1>
          <TodoTable />
        </main>
      </div>
    )
  );
}