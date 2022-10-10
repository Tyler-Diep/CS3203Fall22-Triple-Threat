import { Box, ListItem, List, ListItemText } from "@mui/material";
import styles from "../../styles/Home.module.css";
import { Link } from "next/link";

const WelcomeBar = () => {
  return (
    <Box sx={{ m: 2, p: 2, border: "2px solid black", width: 1 }}>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">My Agenda!</a>
      </h1>

      <p className={styles.description}>Get started by adding a todo</p>
    </Box>
  );
};

export default WelcomeBar;
