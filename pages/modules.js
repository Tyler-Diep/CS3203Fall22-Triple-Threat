import Head from "next/head";
import { ThemeProvider } from "@mui/material";
import { appTheme } from "../themes/theme";
import styles from "../styles/Home.module.css";
import ModuleTable from "../components/ModuleTable";
import WelcomeHeader from "../components/WelcomeHeader";
import CssBaseline from "@mui/material/CssBaseline";
import { useUser } from "@auth0/nextjs-auth0/";

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (!user) {
    return (
      <ThemeProvider theme={appTheme}>
        <main className={styles.main}>
          <WelcomeHeader />
          <a href="/api/auth/login">Login</a>
        </main>
      </ThemeProvider>
    );
  }

  return (
    user && (
      <ThemeProvider theme={appTheme}>
        <CssBaseline>
          <div className={styles.container}>
            <Head>
              <title>Your Agenda</title>
              <meta name="description" content="Generated by create next app" />
              <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
              <WelcomeHeader />
              <ModuleTable />
              <a href="/api/auth/logout">Logout</a>
            </main>
          </div>
        </CssBaseline>
      </ThemeProvider>
    )
  );
}