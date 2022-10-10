import Link from "next/link";
import { Stack, Box, Typography, Button } from "@mui/material";

export default function WelcomeHeader() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h1" color="primary">
        Welcome to Your Agenda
      </Typography>

      <Stack direction="row" spacing={2}>
        <Link href="/">
          <Button variant="contained" color="secondary">
            Todo List
          </Button>
        </Link>
        <Link href="/moduleTable">
          <Button variant="contained" color="secondary">
            Filter by Modules
          </Button>
        </Link>

        <Button variant="contained" color="primary">
          Deleted Items
        </Button>
      </Stack>
    </Box>
  );
}
